<template>
  <div>

    <PageHeading title="Automatic matching" summary="We'll try and some matches to save you time."></PageHeading>

    <section class="step step-1" v-if="step === 1">
        <div class="container">
            <h2>Exact match</h2>
            <p>Would you like us to try and find some <strong>exact</strong> matches?</p>
            <div class="buttons">
                <button class="button button-active" type="button" name="button" @click="findExactMatches">Yes</button>
                <button class="button" type="button" name="button" @click="stepSkip">No</button>
            </div>
        </div>
    </section>

    <transition name="fade">
        <div v-if="step >= 2">
            <section class="step step-2" v-if="step >= 2">
                <div class="container" v-if="exactMatches.length >= 1">
                    <h2>We found {{ exactMatches.length }} exact matches!</h2>
                    <p>We'll automatically remove these for you, since they don't require redirects!</p>
                    <div class="stage-matches" v-if="exactMatches.length >= 1">
                        <div v-for="link in exactMatches" :key="link.index">
                            <MatchLinks :links="link"></MatchLinks>
                        </div>
                    </div>
                </div>
                <div class="container" v-else>
                    <h2>We didn't find any matches...</h2>
                </div>
            </section>

            <hr v-if="step >= 2">

            <section class="step step-3" v-if="step === 2">

                <div class="container">
                    <h2>Partial match</h2>
                    <p>Would you like us to try and find some <strong>partial</strong> matches?</p>
                    <div class="buttons">
                        <button class="button button-active" type="button" name="button" @click="findPartialMatches">Yes</button>
                        <button class="button" type="button" name="button" @click="stepSkip">No</button>
                    </div>
                </div>
            </section>
        </div>

    </transition>

    <transition name="fade">
        <section class="step step-4" v-if="step >= 3">
            <div class="container">
                <div v-if="partialMatches.length >= 1">
                    <h2>We found {{ partialMatches.length }} partial matches!</h2>
                    <p>Each redirect shown has one or more partial matches. Please select the correct match (if any) and add it.</p>
                    <div class="stage-matches" v-if="partialMatches.length >= 1">
                        <div v-for="link in partialMatches" :key="link.index">
                            <PartialMatchLink :redirectData="link" @childToParent="confirmRedirect"></PartialMatchLink>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2>We couldn't find any partial matches...</h2>
                </div>
            </div>
        </section>
    </transition>

    <hr v-if="step >= 3">

    <section class="step step-5 stage-stats" v-if="step == 3">
        <div class="container">
            <h2>Summary</h2>

            <div class="group">
                <div class="stat-item">
                    <p class="value">{{ partialMatches.length }}</p>
                    <p class="label">Partial match(es)</p>
                </div>
                <div class="stat-item">
                    <p class="value">{{ createdRedirects.length }}</p>
                    <p class="label">Redirect(s) created</p>
                </div>
                <div class="stat-item">
                    <p class="value">{{ oldLinks.length }}</p>
                    <p class="label">Link(s) left</p>
                </div>
            </div>
        </div>
    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <div class="group group-center buttons">
                <button type="button" name="button" class="button" @click="nextStage">Next -></button>
            </div>
        </div>
    </section>

    <StageIndicator></StageIndicator>

  </div>
</template>

<script>

import PageHeading from '@/components/PageHeading.vue';
import PartialMatchLink from '@/components/PartialMatchLink.vue';
import MatchLinks from '@/components/MatchLinks.vue';
import StageIndicator from '@/components/StageIndicator.vue'

export default {
    name: 'StageThree',
    components: {
        PageHeading,
        PartialMatchLink,
        MatchLinks,
        StageIndicator,
    },
    data() {
        return {
            newLinks: null,
            oldLinks: null,
            exactMatches: [],
            partialMatches: [],
            createdRedirects: [],
            step: 1,
        }
    },
    created() {
        this.newLinks = this.$store.state.newLinks;
        this.oldLinks = this.$store.state.oldLinks;

        //reset previous data
        this.$store.state.automatching = false;
        this.$store.state.partialRedirects = [];
        this.$store.state.remaining = [];
    },
    methods: {
        findExactMatches() {
            const arr1 = this.newLinks,
                  arr2 = this.oldLinks;

            let remaining = arr2.filter(function(o1){
                return !arr1.some(function(o2){
                    return o1.pathname === o2.pathname;
                });
            })
            let matches = arr2.filter(function(o1){
                return arr1.some(function(o2){
                    return o1.pathname === o2.pathname;
                });
            })

            this.exactMatches = matches;
            this.oldLinks = remaining;
            this.step = 2;
        },
        findPartialMatches() {

            function createKeywords(link) {
                let pathName = link.pathname,
                    path = pathName.replace(/\/+$/, ''),
                    parts = path.split('/'),
                    keywords = [];

                    parts.forEach((part) => {
                        let words = part.split(/[.*+-/_]/);
                        words.forEach((word) => {
                            if (word.length > 3) {
                                keywords.push(word)
                            }
                        })
                    })

                    const uniqueKeywords = [...new Set(keywords)];

                    return {
                        keywords: uniqueKeywords,
                        link: link
                    }
            }

            let arr1 = [];
            this.oldLinks.forEach(function(link) {

                let linkObj = createKeywords(link);
                arr1.push(linkObj)

            })

            let arr2 = [];
            this.newLinks.forEach(function(link) {

                let linkObj = createKeywords(link);
                arr2.push(linkObj)

            })

            let redirects = [];
            arr1.forEach(function(o1) {
                let matches = [];
                let count;

                arr2.forEach(function(o2) {

                    count = o1.keywords.length;
                    const intersection = o2.keywords.filter(word => {
                        // old method - o1.keywords.includes(word)
                        if (o1.keywords.indexOf(word) > -1) {
                            return word
                        }
                    })

                    if (count == 1) {
                        if (intersection.length >= 1) {
                            matches.push({
                                rank: intersection.length,
                                link: o2.link,
                                similarities: intersection,
                            })
                        }
                    } else {
                        if (intersection.length >= 2) {

                            let obj = {
                                rank: intersection.length,
                                link: o2.link,
                                similarities: intersection,
                            }

                            matches.push(obj)
                        }
                    }
                })

                //form the object of the matches
                //output the matches to the data
                if (matches.length >= 1) {

                    //sort array by highest rank
                    matches.sort((a, b) => b.rank - a.rank)

                    //reduce the array to top 3
                    if (matches.length > 3) {
                        let removeCount = matches.length - 3;
                        matches.splice(2, removeCount);
                    }

                    //push data to components via
                    let redirectObj = {
                        new: matches,
                        old: o1.link,
                    }

                    redirects.push(redirectObj)
                }

            })

            let probablyExactMatches = [];
            let singleMatches = [];
            let multiMatches = [];

            //split and sort redirects based on relevence
            redirects.forEach((item) => {
                if (item.new.length == 1) {
                    if (item.new[0].rank == 1) {
                        probablyExactMatches.push(item)
                    } else {
                        singleMatches.push(item)
                    }
                }
                else {
                    multiMatches.push(item)
                }
            })

            //sort arrays by ranks (show highest relevence first)
            singleMatches.sort((a, b) => b.new[0].rank - a.new[0].rank);
            multiMatches.sort((a, b) => b.new[0].rank - a.new[0].rank);

            let joinMatches = [].concat(probablyExactMatches, singleMatches, multiMatches)

            this.partialMatches = joinMatches;
            this.step = 3

        },
        confirmRedirect(value) {

            let arr2 = this.oldLinks;
            let arr1 = [];
                arr1.push(value.oldLink);

            let remaining = arr2.filter(function(o1){
                return !arr1.some(function(o2){
                    return o1.pathname === o2.pathname;
                });
            })


            this.oldLinks = remaining;

            this.createdRedirects.push({
                toRedirect: value.newLink,
                fromRedirect: [value.oldLink]
            })

        },
        stepSkip() {
            this.step++
        },
        nextStage() {
            this.$store.state.stage3 = true;
            this.$store.state.automatching = true;
            this.$store.state.partialRedirects = this.createdRedirects;
            this.$store.state.remaining = this.oldLinks;
            this.$router.push({ path: '/stage-4' })
        },
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>

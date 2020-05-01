<template>
  <div>

    <PageHeading title="Automatic matching" summary="We'll try and some matches to save you time."></PageHeading>

    <section class="step step-1" v-if="step >= 1">
        <div class="container">
            <h2>Exact match</h2>
            <p>Would you like us to try and find some <strong>exact</strong> matches?</p>
            <div class="buttons">
                <button class="button button-active" type="button" name="button" @click="findExactMatches">Yes</button>
                <button class="button" type="button" name="button" @click="stepSkip">No</button>
            </div>
        </div>
    </section>

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

    <section class="step step-3" v-if="step >= 2">
        <div class="container">
            <h2>Partial match</h2>
            <p>Would you like us to try and find some <strong>partial</strong> matches?</p>
            <div class="buttons">
                <button class="button button-active" type="button" name="button" @click="findPartialMatches">Yes</button>
                <button class="button" type="button" name="button" @click="stepSkip">No</button>
            </div>
        </div>
    </section>

    <section class="step step-4" v-if="step >= 3">
        <div class="container">
            <h2>We found {{ partialMatches.length }} partial matches!</h2>
            <p>Each redirect shown has one or more partial matches. Please select the correct match (if any) and add it. Any partial matches that did not work can be left alone.</p>
            <div class="stage-matches" v-if="partialMatches.length >= 1">
                <div v-for="link in partialMatches" :key="link.index">
                    <PartialMatchLink :redirectData="link"></PartialMatchLink>
                </div>
            </div>
        </div>
    </section>

    <section class="step step-5" v-if="step >= 4">
        <div class="container">

            <h2>There are # redirects remaining...</h2>

            <div class="buttons">
                <button class="button" type="button" name="button">Next -></button>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

import PageHeading from '@/components/PageHeading.vue';
import PartialMatchLink from '@/components/PartialMatchLink.vue';
import MatchLinks from '@/components/MatchLinks.vue';
//import StageIndicator from '@/components/StageIndicator.vue'

export default {
    name: 'MatchingRevision',
    components: {
        PageHeading,
        PartialMatchLink,
        MatchLinks,
        //StageIndicator,
    },
    data() {
        return {
            newLinks: null,
            oldLinks: null,
            exactMatches: [],
            partialMatches: [],
            step: 1,
        }
    },
    created() {
        this.newLinks = this.$store.state.newPlaceholder;
        this.oldLinks = this.$store.state.oldPlaceholder;
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
            this.step++
        },
        findPartialMatches() {
            const arr1 = this.newLinks;
            const arr2 = this.oldLinks;
            let partialMatches = [];

            //create object array of partials
            arr2.forEach((item) => {

                //remove trailing slashes on pathname
                let name = item.pathname;
                if (name.slice(-1) == '/') {
                    name = item.pathname.slice(0, -1)
                }

                //check if url contains / - grab end parts accordingly
                let parts;
                if (name.includes('/')) {
                    parts = name.split('/').slice(-1)[0];
                } else {
                    parts = name;
                }

                //split different words up
                let words = [];
                if (parts.includes('-')) {
                    words = parts.split('-')
                } else {
                    words.push(parts);
                }

                //check if each word is within a new url
                let redirectMatchOptions = [];
                words.forEach((keyword) => {
                    if (keyword.length > 2) {

                        let partialMatches = arr1.filter((o1) => {
                            return o1.pathname.includes(keyword)
                        })

                        if (partialMatches.length >= 1) {
                            partialMatches.forEach((match) => {
                                redirectMatchOptions.push(match)
                            })
                        }
                    }
                })

                if (redirectMatchOptions.length >= 1) {
                    let uniqueArr = redirectMatchOptions.filter((elem, index, self) =>
                        self.findIndex((t) => {
                            return (t.pathname === elem.pathname && t.url === elem.url)
                        }) === index)

                    partialMatches.push({
                        old: item,
                        new: uniqueArr,
                    })
                }

            })

            this.partialMatches = partialMatches;

            this.step++
        },
        stepSkip() {
            this.step++
        },
    }
}
</script>

<style lang="scss" scoped>
.step {
    margin-bottom: 3em;

    &-2,
    &-4 {

        .container {
            background: #CBD5E0;
            padding: 2em;
            border-radius: 0.5em;
            border-left: 0.5em solid #2D3748;
        }
    }
}
</style>

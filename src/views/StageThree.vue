<template>
  <div>

    <PageHeading title="Auto-matching" summary="We'll try and find exact matches to save you time."></PageHeading>

    <section class="stage-options" v-if="optionSelected">
        <div class="container">
            <p>Would you like us to try and find exact matches?</p>
            <br>
            <div class="group buttons">
                <button class="button" type="button" name="button" @click="checkForMatches">Yes</button>
                <router-link class="button" to="/stage-4">No</router-link>
            </div>
        </div>
    </section>

    <section v-if="matchesRun">
        <div class="container">

            <div v-if="matches.length > 0">
                <h2>We found <strong>{{ matches.length }}</strong> {{ matches.length > 1 ? 'matches' : 'match' }}!</h2>
                <br>
                <p>Here {{ matches.length > 1 ? 'is a list of the ones' : ' is the one' }} we found:</p>
                <div class="stage-matches" v-if="matches.length >= 1">
                    <div v-for="link in matches" :key="link.index">
                        <MatchLinks :links="link"></MatchLinks>
                    </div>
                </div>
                <br>
                <br>
                <p>We'll remove them from the list so you don't have to!</p>
                <p class="stage-info" v-if="remaining.length > 0">
                    <strong>{{ remaining.length }} left...</strong><br /> We could not find a match for {{ remaining.length > 1 ? 'these links' : 'this link' }}, unfortunately.
                </p>
            </div>

            <div v-else>
                <h3>Unfortunately, no exact matches were found.</h3>
            </div>
            <br>
            <div class="buttons">
                <router-link class="button" to="/stage-4">Next -></router-link>
            </div>

        </div>
    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <div class="group group-center buttons">
                <router-link class="button button-secondary" to="/stage-2">Back</router-link>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import MatchLinks from '@/components/MatchLinks.vue';
import PageHeading from '@/components/PageHeading.vue';

export default {
    name: 'StageThree',
    components: {
        MatchLinks,
        PageHeading
    },
    data() {
        return {
            newLinks: null,
            oldLinks: null,
            matches: [],
            remaining: [],
            matchesRun: false,
            optionSelected: true,
        }
    },
    created() {
        this.newLinks = this.$store.state.newLinks;
        this.oldLinks = this.$store.state.oldLinks;
    },
    methods: {
        checkForMatches() {

            this.optionSelected = false;

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

            this.matches = matches;
            this.remaining = remaining;
            this.matchesRun = true;

            this.$store.state.automatching = true,
            this.$store.state.remaining = remaining,
            this.$store.state.matches = matches;

        },
        skipStage() {
            this.$router.push({ path: '/stage-4' });
        }
    }
}
</script>

<style lang="css" scoped>
</style>

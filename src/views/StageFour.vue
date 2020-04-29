<template>
  <div>

    <PageHeading title="Manual Matching" summary="Please create a match between the old and new links. Each pair you make can become a redirect if you add it."></PageHeading>

    <section class="matching" v-if="checkNewLinksLength()">
        <div class="container">
            <div class="group matching-columns">

                <section class="matching-link-block">

                    <h3>Old Links</h3>

                    <div class="link-search">
                        <input type="text" name="search-old" value=""
                            placeholder="Search..."
                            v-on:keyup="searchHandler"
                            v-on:blur="searchBlur"
                            v-model="searchOldVal"
                            :class="{'no-results': searchOldFalse}">
                    </div>

                    <div class="link-list">
                        <div v-if="searchOld.length < 1">
                            <div class="links links-old" v-for="(link, index) in oldLinks" :key="index">
                                <Links :links="link" @childToParent="moveOldToCenter"></Links>
                            </div>
                        </div>

                        <div v-else>
                            <div class="links links-old" v-for="(link, index) in searchOld" :key="index">
                                <Links :links="link" @childToParent="moveOldToCenter"></Links>
                            </div>
                        </div>

                    </div>

                    <p class="link-counter" v-if="searchOld.length < 1">{{ oldLinks.length }} link(s) left</p>

                </section>

                <section class="matching-center">

                    <h3>Pairs</h3>

                    <div class="matching-block">

                        <div class="drop-old"  v-if="selectedOld != ''">
                            <div class="links links-new" v-for="(link, index) in selectedOld" :key="index">
                                <Links :links="link" @childToParent="removeOldFromCenter"></Links>
                            </div>
                            <svg width="20" height="30" viewBox="0 0 20 30" class="dot-indicators">
                                <path d="M10 40 L10 -10" class="dot-indicators-path"></path>
                            </svg>
                        </div>

                        <div class="drop-new" v-if="selectedNew != ''">
                            <Links :links="selectedNew" @childToParent="removeNewFromCenter"></Links>
                        </div>

                        <div class="drop-actions buttons buttons-center">
                            <button class="button button-green" type="button" name="button" title="Press enter to quickly add redirects." @click="addRedirect">Create redirect</button>
                        </div>

                    </div>

                    <br>

                    <p class="stage-info stage-info-small" v-if="stageInfo">
                        {{ stageInfo }}
                    </p>

                    <p class="stage-error stage-error-small" v-if="stageError">
                        {{ stageError}}
                    </p>

                </section>

                <section class="matching-link-block">

                    <h3>New Links</h3>

                    <div class="link-search">
                        <input type="text" name="search-new" value=""
                            placeholder="Search..."
                            v-on:keyup="searchHandler"
                            v-on:blur="searchBlur"
                            v-model="searchNewVal"
                            :class="{'no-results': searchNewFalse}">
                    </div>

                    <div class="link-list">
                        <div v-if="searchNew.length < 1">
                            <div class="links links-new" v-for="(link, index) in newLinks" :key="index">
                                <Links :links="link" @childToParent="moveNewToCenter"></Links>
                            </div>
                        </div>

                        <div v-else>
                            <div class="links links-new" v-for="(link, index) in searchNew" :key="index">
                                <Links :links="link" @childToParent="moveNewToCenter"></Links>
                            </div>
                        </div>
                    </div>

                    <p class="link-counter" v-if="searchNew.length < 1">{{ newLinks.length }} links total</p>

                </section>

            </div>

            <br>

            <div class="redirects-list" v-if="redirectList.length >= 1">

                <h2>Final redirects</h2>

                <div class="redirect-listing redirect-listing-header">

                    <div class="redirect-from-group">
                        <p><strong>From</strong></p>
                    </div>

                    <div class="redirect-to">
                        <p><strong>To</strong></p>
                    </div>

                </div>

                <div class="links links-new" v-for="(redirect, index) in redirectList" :key="index">
                    <RedirectListing :redirect="redirect"/>
                </div>

            </div>

        </div>
    </section>

    <section class="" v-else>

        <div class="container">

            <h2>Old Links</h2>

            <p>This appears when you don't specify new links. Go do that.</p>

            <div class="links links-old" v-for="(link, index) in oldLinks" :key="index">
                <LinksAlternate :links="link"></LinksAlternate>
            </div>

        </div>

    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <div class="group group-center buttons">
                <!-- <router-link class="button button-secondary" to="/stage-3">Back</router-link> -->
                <button type="button" name="button" class="button" @click="finalStage">Next -></button>
            </div>
        </div>
    </section>

    <section class="stage-settings">
        <div class="container">
            <p><strong>Settings</strong></p>
            <div class="setting">
                <input type="checkbox" id="checkbox" v-model="linkSearchFields">
                <label for="checkbox">Search both</label>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import Links from '@/components/Links';
import LinksAlternate from '@/components/LinksAlternate';
import RedirectListing from '@/components/RedirectListing';
import PageHeading from '@/components/PageHeading.vue';

export default {
    name: 'StageFour',
    components: {
        Links,
        LinksAlternate,
        PageHeading,
        RedirectListing
    },
    data() {
        return {
            selectedNew: '',
            selectedOld: [],
            oldLinks: [],
            newLinks: [],
            searchOld: [],
            searchOldVal: '',
            searchOldFalse: false,
            searchNew: [],
            searchNewVal: '',
            searchNewFalse: false,
            linkSearchFields: false,
            redirectList: [],
            stageError: '',
            stageInfo: 'Click on a link to add it to the center for pairing. You can select multiple old links, but only one new link.'
        }
    },
    created() {
        //Reset redirects list just in case they start over
        this.$store.state.redirects = [];

        if (this.$store.state.automatching) {
            this.oldLinks = this.$store.state.remaining;
        } else {
            this.oldLinks = this.$store.state.oldLinks;
        }
        this.newLinks = this.$store.state.newLinks;

        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                let focus = this.$el.querySelector(':focus');
                if (focus) {
                    focus.blur()
                }
                this.addRedirect()
            }
        })
    },
    methods: {
        checkNewLinksLength() {
            if (this.$store.state.newLinks.length < 1) {
                return false
            } else {
                return true
            }
        },
        moveOldToCenter(value) {
            this.stageInfo = '';
            this.stageError = '';

            this.selectedOld.push(value)
            if (this.oldLinks.includes(value)) {
                this.oldLinks = this.oldLinks.filter((item) => item.url !== value.url)

                //reset search
                this.searchOld = [];
                this.searchOldVal = '';
                this.searchOldFalse = false;
            }
        },
        moveNewToCenter(value) {
            this.stageInfo = '';
            this.stageError = '';
            this.selectedNew = value;

            //reset search
            this.searchNew = [];
            this.searchNewVal = '';
            this.searchNewFalse = false;

        },
        removeOldFromCenter(value) {
            if (this.selectedOld.includes(value)) {
                this.selectedOld = this.selectedOld.filter((item) => item.url !== value.url)
                this.oldLinks.push(value)
                this.oldLinks = this.sortArray(this.oldLinks);
            }
        },
        removeNewFromCenter() {
            this.selectedNew = '';
        },
        searchOldLinks(e) {
            let value = e.target.value;

            if (!value) {
                this.searchOld = [];
                this.searchOldVal = '';
                this.searchOldFalse = false;
                return false;
            }
            if (this.linkSearchFields) {
                return false
            }

            let filtered = this.searchFilter(this.oldLinks, value);
            if (filtered.length < 1) {
                this.searchOld = filtered;
                this.searchOldFalse = true;
            } else {
                this.searchOld = filtered;
                this.searchOldFalse = false;
            }
        },
        searchNewLinks(e) {
            let value = e.target.value;

            if (!value) {
                this.searchNew = [];
                this.searchNewVal = '';
                this.searchNewFalse = false;
                return false;
            }
            if (this.linkSearchFields) {
                return false
            }

            let filtered = this.searchFilter(this.newLinks, value);
            if (filtered.length < 1) {
                this.searchNew = filtered;
                this.searchNewFalse = true;
            } else {
                this.searchNew = filtered;
                this.searchNewFalse = false;
            }
        },
        searchFilter(arr, value) {
            return arr.filter((item) => item.url.includes(value));
        },
        linkedSearch(e) {
            let value = e.target.value;

            if (e.target.name == 'search-old') {
                this.searchNewVal = value
            }
            if (e.target.name == 'search-new') {
                this.searchOldVal = value
            }

            if (this.linkSearchFields) {
                let filteredOld = this.searchFilter(this.oldLinks, value);
                if (filteredOld.length < 1) {
                    this.searchOld = filteredOld;
                    this.searchOldFalse = true;
                } else {
                    this.searchOld = filteredOld;
                    this.searchOldFalse = false;
                }
                let filteredNew = this.searchFilter(this.newLinks, value);
                if (filteredNew.length < 1) {
                    this.searchNew = filteredNew;
                    this.searchNewFalse = true;
                } else {
                    this.searchNew = filteredNew;
                    this.searchNewFalse = false;
                }
            }
        },
        searchHandler(e) {

            if (this.linkSearchFields) {
                this.linkedSearch(e)
            } else {
                if (e.target.name == 'search-new') {
                    this.searchNewLinks(e)
                }
                if (e.target.name == 'search-old') {
                    this.searchOldLinks(e)
                }
            }
        },
        searchBlur() {
            setTimeout(() => {
                this.searchNew = [];
                this.searchNewVal = '';
                this.searchNewFalse = false;
                this.searchOld = [];
                this.searchOldVal = '';
                this.searchOldFalse = false;
            }, 100);
        },
        sortArray(arr) {
            return arr.sort((a, b) => (a.pathname.split('/')[1] > b.pathname.split('/')[1]) ? 1 : -1)
        },
        addRedirect() {
            const toRedirect = this.selectedNew;
            const fromRedirect = this.selectedOld;

            if (!toRedirect || !fromRedirect || fromRedirect.length <= 0) {
                this.stageError = 'You must select links to add to the Pairs section before adding them.'
                return false;
            }

            this.selectedNew = '',
            this.selectedOld = [];

            let redirectObj = {
                toRedirect,
                fromRedirect
            }

            this.redirectList.push(redirectObj);
        },
        finalStage() {

            this.$store.state.redirects = this.redirectList;
            this.$router.push({ path: '/stage-5' })

        }
    }
}
</script>

<style lang="scss" scoped>

</style>

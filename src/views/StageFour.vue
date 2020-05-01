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
                            placeholder="Search... (, to focus)"
                            v-on:keyup="searchHandler"
                            v-model="searchOldVal"
                            :class="{'no-results': searchOldFalse}">
                    </div>

                    <div class="link-list">

                        <div v-if="searchOld.length < 1">
                            <div class="links links-old" v-for="(link, index) in oldLinks" :key="index">
                                <Links :links="link" @childToParent="moveOldToCenter" @linkData="openLink"></Links>
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
                            <svg width="20" height="30" viewBox="0 0 20 30" class="dot-indicators" v-if="selectedNew != ''">
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
                            placeholder="Search... (. to focus)"
                            v-on:keyup="searchHandler"
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

    <StageIndicator></StageIndicator>

    <section class="stage-settings">
        <div class="container">
            <div class="setting">
                <input type="checkbox" id="checkbox" v-model="linkSearchFields">
                <label for="checkbox">Search both</label>
            </div>
            <div class="setting">
                <input type="checkbox" id="checkbox" v-model="lockScroll">
                <label for="checkbox">Scroll lock</label>
            </div>
        </div>
    </section>

    <secton class="stage-warning" v-if="lockScroll">
        <button class="button" name="scrollLockButton" @click="lockScrollWarning">
            scroll lock is on
        </button>
    </secton>

  </div>
</template>

<script>
import Links from '@/components/Links';
import LinksAlternate from '@/components/LinksAlternate';
import RedirectListing from '@/components/RedirectListing';
import PageHeading from '@/components/PageHeading.vue';
import StageIndicator from '@/components/StageIndicator.vue'

export default {
    name: 'StageFour',
    components: {
        Links,
        LinksAlternate,
        PageHeading,
        RedirectListing,
        StageIndicator,
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
            lockScroll: false,
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
    },
    mounted() {
        window.addEventListener('keydown', (e) => {
            let focus = this.$el.querySelector(':focus');

            //enter
            if (e.keyCode == 13) {

                if (focus) {
                    if (focus.tagName == 'INPUT') {
                        return false
                    }
                    focus.blur()
                }
                this.addRedirect()
            }

            //escape
            if (e.keyCode == 27) {
                if (focus) {
                    if (focus.tagName == 'INPUT') {
                        focus.blur()
                    }
                }
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
            }
            if (this.searchOld.length >= 1) {
                if (this.searchOld.includes(value)) {
                    this.searchOld = this.searchOld.filter((item) => item.url !== value.url)
                }
            }
        },
        moveNewToCenter(value) {
            this.stageInfo = '';
            this.stageError = '';
            this.selectedNew = value;
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
            return arr.filter((item) => item.pathname.includes(value));
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
        openLink(link) {
                console.log(link.url)
                let win = window.open(link.url, '_blank');
                win.focus();
        },
        scrollLock() {
            let parent = this.$el;

            if (this.lockScroll) {
                document.body.style.overflow = 'hidden'
                parent.style.height = parent.scrollHeight+'px';
            } else {
                document.body.style.overflow = 'auto'
                parent.style.height = null;
            }
        },
        lockScrollWarning() {
            this.lockScroll = false;
            document.body.style.overflow = 'auto'
            parent.style.height = null;
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

            if (this.linkSearchFields || this.searchOldVal || this.searchNewVal) {
                let inputs = this.$el.querySelectorAll('input[type="text"]');

                if (this.searchOldVal && !this.linkSearchFields) {
                    inputs[0].focus()
                }
                if (this.searchNewVal && !this.linkSearchFields) {
                    inputs[1].focus()
                }
                if (this.linkSearchFields) {
                    inputs[0].focus()
                }
            }

            //clear search values
            this.searchOld = [];
            this.searchNew = [];
            this.searchOldVal = '';
            this.searchNewVal = '';
            this.searchOldFalse = false;
            this.searchNewFalse = false;

        },
        finalStage() {

            this.$store.state.redirects = this.redirectList;
            this.$store.state.stage4 = true;
            this.$router.push({ path: '/stage-5' })

        }
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

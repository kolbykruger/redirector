<template>
  <div>

    <PageHeading title="The old website" summary="These links will be redirected to new pages."></PageHeading>

    <section class="stage-options">
        <div class="container">
            <div class="group buttons">
                <button class="button" type="button" name="button" @click="toggleFileUpload" :class="{'button-active': showFileUpload}">Upload XML File</button>
                <button class="button" type="button" name="button" @click="toggleTextarea" :class="{'button-active': showTextarea}">Paste RAW</button>
            </div>
        </div>
    </section>

    <section class="stage-actions">
        <div class="container">
            <div class="" v-if="showFileUpload">
                <input type="file" name="Upload" value="" v-on:change="handleFileUpload()" ref="file">
            </div>
            <div class="" v-if="showTextarea">
                <textarea name="name" rows="8" cols="80" v-model="rawData"></textarea>
            </div>
            <div class="stage-error" v-if="stageError">
                {{ stageError }}
            </div>
        </div>
    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <div class="group group-center buttons">
                <!-- <router-link class="button button-secondary" to="/stage-0">Back</router-link> -->
                <button class="button" @click="parseActions">Next -></button>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue';

export default {
    name: 'StageOne',
    components: {
        PageHeading
    },
    data() {
        return {
            stageError: '',
            stageReady: false,
            showFileUpload: true,
            showTextarea: false,
            urlData: null,
            fileData: null,
            rawData: 'https://google.com/',
        }
    },
    created() {

    },
    methods: {
        toggleTextarea() {
            this.showTextarea = true, this.showFileUpload = false;
            this.stageError = '';
        },
        toggleFileUpload() {
            this.showFileUpload = true, this.showTextarea = false;
            this.stageError = '';
        },
        parseActions() {
            this.stageError = '';

            if (this.showURLField) {this.parseURLData()}
            if (this.showFileUpload) {this.parseFileData()}
            if (this.showTextarea) {this.parseRawData()}
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
        parseFileData() {
            let _this = this;

            if (!this.file) {
                this.stageError = 'Please attach an XML file to continue.'
                return false;
            }

            let reader = new window.FileReader()
                reader.onload = function(event) {

                    let arr = [];
                    let readXML = event.target.result;
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(readXML, 'application/xml');

                    let loc = doc.querySelectorAll('loc');

                    loc.forEach(function(item) {
                        arr.push(_this.createArrObj(item.innerHTML));
                    })

                    _this.pushState(_this.sortArray(arr))

                }
                reader.readAsText(this.file, 'UTF-8');

        },
        parseRawData() {

            if (this.rawData == '') {this.stageError = 'You must provide your raw data to continue.'; return false}

            const links = this.rawData.split(/\r|\n/);
            let arr = [];

            links.forEach(link => {
                arr.push(this.createArrObj(link))
            })

            this.pushState(this.sortArray(arr))
        },
        validateURL(url) {
            try {new URL(url);} catch (_) {return {status: false, error: url};}
            return {status: true}
        },
        createArrObj(item) {
            let validator = this.validateURL(item);

            if (!validator.status) {
                this.stageError = 'Invalid URL found: ' + validator.error
                return false
            }

            const url = new URL(item);
            return {
                url: item,
                href: url.href,
                hostname: url.hostname,
                pathname: url.pathname,
                hash: url.hash,
                protocol: url.protocol,
            }
        },
        sortArray(arr) {
            return arr.sort((a, b) => (a.pathname.split('/')[1] > b.pathname.split('/')[1]) ? 1 : -1)
        },
        pushState(arr) {
            if (arr) {
                this.$store.state.oldLinks = arr;
                this.$router.push({ path: '/stage-2' })
            } else {
                this.stageError = 'There was an issue processing the data you specified. We are sorry for the inconvenience.'
            }
        }
    }
}
</script>

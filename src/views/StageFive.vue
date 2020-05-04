<template>
  <div>

    <PageHeading title="The redirects" summary="Below you'll find your created redirects in both Apache and Nginx formats."></PageHeading>

    <section class="redirect-output">
        <div class="container">
            <h2>Apache redirects</h2>
            <p>Place these redirects in your .htacess file.</p>
            <pre><code v-for="(link, index) in redirects" :key="index">{{ createRedirect(link) }}</code></pre>
            <br>
            <div class="textarea-copy">
                <textarea name="name" rows="8" cols="80" v-model="finalForm"></textarea>
            </div>
            <div class="buttons buttons-center">
                <button class="button" type="button" name="button" @click="copyRedirects">Copy</button>
            </div>
        </div>
        <div class="container">
            <h2>Nginx redirects</h2>
            <p>Place these redirects in your nginx.conf file.</p>
            <pre><code v-for="(link, index) in redirects" :key="index">{{ createNginxRedirect(link) }}</code></pre>
            <br>
            <div class="textarea-copy">
                <textarea name="name" rows="8" cols="80" v-model="nginxFinalForm"></textarea>
            </div>
            <div class="buttons buttons-center">
                <button class="button" type="button" name="button" @click="copyRedirects">Copy</button>
            </div>
        </div>
    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <h2 style="text-align: center;">Created by Kolby Kruger</h2>
            <div class="buttons buttons-center">
                <a class="button" href="https://kolby.dev/" target="_blank" rel="nofollow">Website</a>
                <a class="button" href="https://github.com/kolbykruger" target="_blank" rel="nofollow">Github</a>
            </div>
        </div>
    </section>

    <StageIndicator></StageIndicator>

    <br>
    <br>
    <br>

  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue';
import StageIndicator from '@/components/StageIndicator.vue'

export default {
    name: 'StageFive',
    components: {
        PageHeading,
        StageIndicator,
    },
    data() {
        return {
            redirects: [],
            finalForm: '',
            nginxFinalForm: '',
            rawFinalForm: '',
        }
    },
    created() {
        this.$store.state.stage5 = true;

        let stageFourRedirects = this.$store.state.redirects;
        let stageThreeRedirects = this.$store.state.partialRedirects;

        let arr = [];
        if (stageThreeRedirects) {
            arr = stageFourRedirects.concat(stageThreeRedirects);
        } else {
            arr = stageFourRedirects;
        }

        this.redirects = arr;
    },
    methods: {
        createRedirect(link) {

            let output = '';
            let newUrl = new URL(this.$store.state.newUrl);

            if (link.fromRedirect.length > 1) {
                link.fromRedirect.forEach((item) => {
                    output += this.formatRedirect('apache', item.pathname.substring(1), link.toRedirect.pathname, newUrl);
                });
            } else {
                output += this.formatRedirect('apache', link.fromRedirect[0].pathname.substring(1), link.toRedirect.pathname, newUrl)
            }

            this.finalForm = output;
            return output;
        },
        createNginxRedirect(link) {
            let output = '';
            let newUrl = new URL(this.$store.state.newUrl);

            if (link.fromRedirect.length > 1) {
                link.fromRedirect.forEach((item) => {
                    output += this.formatRedirect('nginx', item.pathname.substring(1), link.toRedirect.pathname, newUrl);
                });
            } else {
                output += this.formatRedirect('nginx', link.fromRedirect[0].pathname.substring(1), link.toRedirect.pathname, newUrl)
            }

            this.nginxFinalForm = output;
            return output;
        },
        formatRedirect(format, oldURL, newURL, url) {
            if (format == 'nginx') {
                return `rewrite ^${oldURL}$ ${url.protocol}//${url.hostname}${newURL} permanent \n`;
            }
            if (format == 'apache') {
                return `RewriteRule ^${oldURL}$ ${url.protocol}//${url.hostname}${newURL} [R=301,L] \n`
            }
        },
        copyRedirects(e) {
            const el = e.target;
            const textarea = e.target.parentNode.previousElementSibling.childNodes[0];

            el.innerText = 'Copied!';
            el.classList.add('button-green');

            setTimeout(() => {
                el.innerText = 'Copy';
                el.classList.remove('button-green');
            }, 2500);

            textarea.select()
            document.execCommand("copy");
        }
    }
}
</script>

<style lang="scss" scoped>
.textarea-copy {
    max-height: 1px;
    max-width: 1px;
    overflow: hidden;
}
</style>

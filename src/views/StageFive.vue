<template>
  <div>

    <PageHeading title="The redirects" summary="Below you'll find your created redirects in both Apache and Nginx formats."></PageHeading>

    <!-- <section class="stage-options">
        <div class="container">
            <p>Provide output options</p>

            <input type="radio" id="one" value="301" v-model="redirectType">
            <label for="one">301 Redirect</label>
            <br>
            <input type="radio" id="two" value="302" v-model="redirectType">
            <label for="two">302 Redirect</label>
            {{ redirectType }}
        </div>

    </section> -->

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
            <div class="group group-center buttons">
                <!-- <router-link class="button button-secondary" to="/stage-4">Back</router-link> -->
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue';

export default {
    name: 'StageFive',
    components: {
        PageHeading,
    },
    data() {
        return {
            redirects: [],
            finalForm: '',
            nginxFinalForm: '',
        }
    },
    created() {
        this.redirects = this.$store.state.redirects
    },
    methods: {
        createRedirect(link) {

            let output = '';
            let newUrl = new URL(this.$store.state.newUrl);

            if (link.fromRedirect.length > 1) {
                link.fromRedirect.forEach((item) => {
                    output += `RewriteRule ^${item.pathname.substring(1)}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} [R=301,L] \n`}
                );
            } else {
                output += `RewriteRule ^${link.fromRedirect[0].pathname.substring(1)}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} [R=301,L] \n`
            }
            this.finalForm = output;
            return output;
        },
        createNginxRedirect(link) {
            let output = '';
            let newUrl = new URL(this.$store.state.newUrl);

            if (link.fromRedirect.length > 1) {
                link.fromRedirect.forEach((item) => {
                    output += `rewrite ^${item.pathname}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} permanent \n`}
                );
            } else {
                output += `rewrite ^${link.fromRedirect[0].pathname}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} permanent \n`
            }

            this.nginxFinalForm = output;
            return output;
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

<template>
  <div>

    <PageHeading title="Your Redirects" summary="Here they are at last!"></PageHeading>

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
            <pre><code v-for="(link, index) in redirects" :key="index">{{ createRedirect(link) }}</code></pre>
            <br>
            <div class="buttons buttons-center">
                <button class="button" type="button" name="button" @click="copyRedirects">Copy</button>
            </div>
        </div>
    </section>

    <section class="stage-navigation buttons">
        <div class="container">
            <div class="group group-center buttons">
                <router-link class="button button-secondary" to="/stage-4">Back</router-link>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue';

export default {
    name: 'Stage-5',
    components: {
        PageHeading,
    },
    data() {
        return {
            redirects: [],
            finalForm: '',
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
                    output += `RewriteRule ^${item.pathname}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} [R=301,L] \n`}
                );
            } else {
                output += `RewriteRule ^${link.fromRedirect[0].pathname}$ ${newUrl.protocol}//${newUrl.hostname}${link.toRedirect.pathname} [R=301,L] \n`
            }
            this.finalForm = output;
            return output;
        },
        copyRedirects() {
            console.log('test')
            let opt = document.querySelector('.redirect-output');
            console.log(opt)
        }
    }
}
</script>

<style lang="css" scoped>
</style>

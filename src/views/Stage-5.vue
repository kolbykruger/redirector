<template>
  <div>

    <PageHeading title="Your Redirects" summary="Let us know how you would like your redirects formatted"></PageHeading>

    <section class="stage-options">
        <div class="container">
            <p>Provide output options</p>

            <input type="radio" id="one" value="301" v-model="redirectType">
            <label for="one">301 Redirect</label>
            <br>
            <input type="radio" id="two" value="302" v-model="redirectType">
            <label for="two">302 Redirect</label>
            {{ redirectType }}
        </div>

    </section>

    <section class="redirect-output">
        <div class="container">
            <pre>
                <code>
                    {{ redirects }}
                </code>
            </pre>
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
        PageHeading
    },
    data() {
        return {
            redirects: [],
            redirectType: 302
        }
    },
    created() {
        this.redirects = this.$store.state.redirects
    }
}
</script>

<style lang="css" scoped>
</style>

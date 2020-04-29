<template>
  <div class="home">

    <PageHeading title="Welcome to Redirector!" summary="Let us help you with your 301 redirects!"/>

    <section class="start-app">
        <div class="container">
            <div class="group buttons">
                <router-link class="button" to="/stage-0">Start</router-link>
                <router-link class="button button-secondary" to="/about">What is this?</router-link>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import PageHeading from '@/components/PageHeading.vue'

export default {
  name: 'Home',
  components: {
    PageHeading
  }
}
</script>

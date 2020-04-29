<template>
  <div class="home">

    <PageHeading title="Welcome to Redirector!" summary="Let us help you with your 301 redirects!"/>
    <section>
        <div class="container">
            <p>All of your provided information is processed client-side, meaning we don't collect or save any of your information.</p>
        </div>
    </section>
    <section class="start-app">
        <div class="container">
            <br>
            <div class="group buttons">
                <router-link class="button button-green button-large" to="/stage-0">Start making redirects -></router-link>
                <router-link class="button button-secondary button-large" to="/about">What is this?</router-link>
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

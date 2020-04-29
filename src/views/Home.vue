<template>
  <div class="home">

    <PageHeading title="Welcome to Redirector!" summary="The tool designed to help you bulk create 301 redirects."/>
    <section>
        <div class="container">
            <p>We currently offer <strong>Apache (.htaccess)</strong> and <strong>Nginx (nginx.conf)</strong> outputs.</p>
        </div>
    </section>
    <section class="start-app">
        <div class="container">
            <br>
            <div class="group buttons">
                <router-link class="button button-green button-large" to="/stage-0">Start making redirects -></router-link>
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

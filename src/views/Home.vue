<template>
  <div class="home">

    <div class="homescreen">
        <div class="white">
            <div class="content">
                <h1>redirector</h1>
                <p>A tool for creating bulk redirects.</p>
                <div class="buttons buttons-center">
                    <router-link class="button button-green button-large" to="/stage-0">Get started -></router-link>
                </div>
            </div>
        </div>

        <div class="black">
            <div class="content">
                <h1>redirector</h1>
                <p>A tool for creating bulk redirects.</p>
                <div class="buttons buttons-center">
                    <router-link class="button button-green button-large" to="/stage-0">Get started -></router-link>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
        isVisible: false,
      }
  },
  mounted() {
      this.isVisible = true
  }
}
</script>

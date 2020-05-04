<template>
  <div id="app">
    <!-- <header>
        <div class="container">
            <div class="logo">
                <router-link to="/">
                    <span class="icon">-></span> Redirector
                </router-link>
            </div>
            <nav>
              <router-link class="button button-green" to="/stage-0">Start</router-link>
          </nav>
        </div>
    </header> -->
    <main>
        <transition name="slide" mode="out-in">
            <router-view/>
        </transition>
    </main>
  </div>
</template>

<style lang="css" scoped>
.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-leave-active,
.slide-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

</style>

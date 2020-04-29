<template>
  <div id="app">
    <header>
        <div class="container">
            <div class="logo">
                <router-link to="/">
                    <span class="icon">-></span> Redirector
                </router-link>
            </div>
            <nav>
              <!--router-link to="/about">About</router-link-->
              <router-link class="button button-green" to="/stage-0">Start</router-link>
          </nav>
        </div>
    </header>
    <main>
        <router-view/>
    </main>
    <footer>
        <div class="container">
            <a href="https://github.com/kolbykruger/redirector" target="_blank">Github</a>
        </div>
    </footer>
  </div>
</template>

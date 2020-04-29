<template>
  <div id="app">
    <header>
        <div class="container">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link> |
              <router-link to="/stage-0">Start</router-link>
            </div>
        </div>
    </header>
    <main>
        <router-view/>
    </main>
    <footer>
        <div class="container">
            footer
        </div>
    </footer>
  </div>
</template>

<template>
  <div id="app" class="main-content">
    <Header />
    <Hero />
    <AboutMe />
    <Portfolio />
    <Posts />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
*,
*::after,
*::before,
html {
  // sass-lint:disable-block no-vendor-prefixes
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  font-size: 18px;
  font-family: $default;
}
a {
  text-decoration: none;
}
body {
  overflow-x: hidden;
}
.DEF_wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>

<template>
  <div id="app" class="main-content">
    <Header></Header>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Portfolio></Portfolio>
    <Posts></Posts>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Hero,
    AboutMe,
    Portfolio,
    Posts,
    Contact,
    Footer
  }
};
</script>

<style lang="sass">
@import assets/sass/_variables
@import assets/sass/_base
</style>

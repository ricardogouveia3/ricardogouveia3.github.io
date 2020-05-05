<template>
  <div id="app" class="main-content">
    <Header />
    <Hero :newest="this.portfolioFirstProject" />
    <AboutMe />
    <Portfolio v-if="this.portfolioData" :projects="this.portfolioData" />
    <Posts />
    <Contact />
    <Footer />
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

const API_PORTFOLIO_ENDPOINT = "https://api.rcrd.me/rcrd/portfolio";

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
  },
  data() {
    return {
      portfolioData: null,
      portfolioFirstProject: null
    };
  },
  beforeCreate() {
    fetch(API_PORTFOLIO_ENDPOINT)
      .then(response => this.handleFetchError(response))
      .then(response => response.json())
      .then(data => {
        this.portfolioData = data.slice(0, 3);
        this.portfolioFirstProject = data[0];
      });
  },
  methods: {
    handleFetchError: function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }
};
</script>

<style lang="sass">
@import assets/sass/_variables
@import assets/sass/_base
</style>

<template>
  <section id="portfolio">
    <div class="DEF_wrapper">
      <h2>Portfolio</h2>
      <ul>
        <SingleJob
          v-for="(project, index) in projects"
          v-bind:key="index"
          :project="project"
        ></SingleJob>
      </ul>
      <a class="see-all" href="https://portfolio.rcrd.me"
        ><span class="see-all__text">Veja o portfolio completo</span
        ><img
          class="see-all__img"
          src="../assets/img/icons/arrow_right--portfolio.png"
          alt=""
      /></a>
    </div>
  </section>
</template>

<script>
import SingleJob from "./cards/SingleJob";

export default {
  name: "Portfolio",
  components: {
    SingleJob,
  },
  props: {},
  data: function() {
    return {
      projects: [],
    };
  },
  created: function() {
    this.$axios.get("https://api.rcrd.me/rcrd/portfolio").then((response) => {
      this.projects = response.data;
      this.projects.length = 3;
    });
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables
@import ../assets/sass/animation

section
  background-color: #EFEFF0

.DEF_wrapper
  padding: 50px 20px
  border-top: 10px solid $caribbean-green

h2
  margin: 0
  text-align: center
  font-family: $classic
  text-transform: uppercase
  margin-bottom: 50px
  font-size: 100px
  color: $armadillo
  letter-spacing: 1.43px

  @media (max-width: 700px)
    font-size: 80px
  @media (max-width: 500px)
    font-size: 45px

ul,
.card-container
  list-style-type: none
  padding: 0
  margin: 0

ul
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 50px
  margin-bottom: 50px

  @media (max-width: 500px)
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

.see-all
  background-color: $caribbean-green
  border: 0
  color: $white
  cursor: pointer
  display: block
  font-weight: bold
  padding: 1.5ch
  position: relative
  text-align: left
  text-decoration: none
  text-transform: uppercase
  transition: background-color .4s ease-in-out
  width: 100%

  &:hover
    background-color: lighten($caribbean-green, 20%)

  @media (max-width: 700px)
    text-align: center
    line-height: 1.5

.see-all__img
  width: 13px
  position: absolute
  right: 50px
  animation: arrowBounceLeft--light alternate 1.5s infinite

  @media (max-width: 700px)
    display: none
</style>

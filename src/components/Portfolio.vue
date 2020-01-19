<template>
  <section id="portfolio">
    <div class="DEF_wrapper">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="(project, index) in projects" v-bind:key="index">
          <a class="card" :href="project.link">
            <div class="job-img">
              <img :src="project.image" />
            </div>
            <div class="job-info">
              <span class="job-type" :style="{ color: project.color }">
                {{ project.type }}
              </span>
              <h4 class="job-title">
                {{ project.title }}
              </h4>
              <span class="job-date">{{ project.date }}</span>
            </div>
          </a>
        </li>
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
export default {
  name: "Portfolio",
  props: {},
  data: function() {
    return {
      projects: []
    };
  },
  created: function() {
    this.$axios
      .get(
        "https://raw.githubusercontent.com/ricardogouveia3/rcrd-portfolio/master/data/portfolio.json"
      )
      .then(response => {
        this.projects = response.data.projects;
        this.projects.length = 3;
      });
  },
  methods: {}
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

li
  &:hover
    .job-img
      opacity: .7
    .job-title
      color: $caribbean-green

@media (min-width: 1000px)
  li:first-of-type
    grid-column-start: 1
    grid-column-end: 3

    .job-info
      max-width: 50%
      margin-top: -180px

    .job-img
      height: 350px

.job-info
  background-color: $white
  margin-top: -70px
  position: relative
  padding: 40px 30px
  margin-right: 50px

  @media (max-width: 1000px)
    margin-right: unset

.job-type,
.job-date
  font-weight: 300
  color: #AEAEAE
  letter-spacing: 1.25px

.job-type
  font-size: 15px
  text-transform: uppercase
  position: absolute
  left: 0
  border-left: 3px solid
  padding: 8px 0 8px 28px
  margin-bottom: 20px

.job-title
  transition: color .5s ease-in-out
  font-weight: bold
  margin: 40px 0 20px 0
  font-size: 30px
  color: $armadillo
  line-height: 1.5

.job-img
  transition: opacity .5s ease-in-out
  width: 100%
  height: 280px
  overflow: hidden

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 100% 50%;



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

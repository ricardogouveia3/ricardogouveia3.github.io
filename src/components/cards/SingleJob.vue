<template>
  <li>
    <a class="card" :href="project.link">
      <div class="job-img">
        <img :src="project.cardImg64" />
      </div>
      <div class="job-info">
        <span class="job-type" :style="{ color: project.typeColor }">
          {{ project.type }}
        </span>
        <h4 class="job-title">
          {{ project.title }}
        </h4>
        <span class="job-date">{{ project.date }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "SingleJob",
  props: { project: Object },
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../../assets/sass/_variables
@import ../../assets/sass/animation

li
  &:hover
    .job-img
      opacity: .7
    .job-title
      color: $caribbean-green

@media (min-width: 1000px)
  li:first-of-type
    height: 350px
    grid-column-start: 1
    grid-column-end: 3

    .job-info
      max-width: 40%
      height: 350px
      margin-top: -350px
      display: flex
      flex-direction: column
      justify-content: space-between

    .job-title
      margin-top: 85px

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
    object-position: 100% 50%
</style>

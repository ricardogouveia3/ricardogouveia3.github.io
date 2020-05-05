<template>
  <div class="newer-project">
    <span>Projeto <br />+ recente</span>
    <a :href="this.project.link" target="_blank" rel="noopener noreferrer">
      <img
        class="project-img"
        :src="this.project.cardImg64"
        :alt="this.project.name"
      />
      <div class="arrow">
        <img
          src="./../../assets/img/icons/arrow_right--newerProject.png"
          alt="Seta para a direita"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CtaNewerProject",
  props: {
    project: Object
  },
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../../assets/sass/_variables
@import ../../assets/sass/animation

.newer-project
  position: absolute
  left: 50px
  bottom: 50px

  @media (max-width: 700px)
    display: none

span
  font-weight: bold
  color: #fff
  font-size: 20px
  text-transform: uppercase
  display: block

a
  display: flex
  height: 120px
  width: 220px
  margin-top: 15px
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, .34)

.project-img
  object-fit: cover
  object-position: 100% 50%
  max-width: 190px

.arrow
  background-color: $caribbean-green
  height: 100%
  display: flex
  align-items: center

  img
    height: 35px
    padding: 0 5px
</style>

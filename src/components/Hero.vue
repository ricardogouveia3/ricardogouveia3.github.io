<template>
  <section>
    <div class="DEF_wrapper">
      <div class="title">
        <h1>Ricardo</h1>
        <div class="subtitle">
          <h3 class="subtitle--left">
            Front-end dev —
          </h3>
          <h3 class="subtitle--right">
            — UI designer
          </h3>
        </div>
      </div>
      <div class="photo">
        <img src="../assets/img/me-lookingLeft-bw--sketch.png" />
      </div>
    </div>
    <Cta-newer-project v-if="this.newest && this.newest.title" :project="this.newest" />
  </section>
</template>

<script>
import CtaNewerProject from "./ctas/ctaNewerProject";

export default {
  name: "Hero",
  components: {
    CtaNewerProject
  },
  props: {
    newest: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables

section
  min-height: 600px
  background-color: $caribbean-green
  background-image: url('../assets/img/colorfull-background.jpg')
  background-repeat: repeat
  max-width: 100vw
  border: 0
  position: relative

  @media (max-width: 700px)
    min-height: 400px

.title
  width: 100%
  transform: translateY(-50%)
  text-align: center

h1
  padding: 0
  font-family: $classic
  font-weight: bold
  color: $armadillo
  font-size: 215px
  text-transform: uppercase
  overflow: hidden
  white-space: nowrap
  margin: 0 auto

  @media (max-width: 1000px)
    font-size: 150px
  @media (max-width: 700px)
    font-size: 100px
  @media (max-width: 500px)
    font-size: 70px

.subtitle
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%

.subtitle--left,
.subtitle--right
  letter-spacing: 2.5px
  line-height: 40px
  color: $armadillo
  margin: 0
  font-size: 25px
  text-transform: uppercase
  font-weight: 600

  @media (max-width: 1000px)
    letter-spacing: unset
    font-size: 20px
  @media (max-width: 700px)
    font-size: 15px

@media (max-width: 1000px)
  .subtitle--left
    padding-left: 20px
  .subtitle--right
    padding-right: 20px


.photo
  position: absolute
  overflow: hidden
  left: 50%
  top: 0
  max-width: 1000px
  transform: translateX(-50%)

  @media (max-width: 700px)
    position: relative
    left: 0
    width: 100vw
    max-height: 500px
    transform: none

img
  object-fit: fill
  border: 0
  padding: 0 80px
  width: 1000px
  border-bottom: 40px solid $caribbean-green

  @media (max-width: 700px)
    border: 0
    width: 150vw
    transform: translateX(-25vw)
    overflow: hidden
    margin: 0 auto
    padding: 0
</style>

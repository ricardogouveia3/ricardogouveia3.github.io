<template>
  <a href="https://portfolio.rcrd.me">
    <span>Veja o portfolio completo</span>
    <img
      class="see-all__img"
      src="../../assets/img/icons/arrow_right--portfolio.png"
      alt=""
  /></a>
</template>

<script>
export default {
  name: "CtaPortfolio",
  props: {},
  data: function() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../../assets/sass/_variables
@import ../../assets/sass/animation

a
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

img
  width: 13px
  position: absolute
  right: 50px
  animation: arrowBounceLeft--light alternate 1.5s infinite

  @media (max-width: 700px)
    display: none
</style>

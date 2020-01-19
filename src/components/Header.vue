<template>
  <header>
    <div class="DEF_wrapper">
      <nav class="nav--desktop">
        <ul>
          <li>
            <a id="menuAbout" href="#about" data-scroll>About</a>
          </li>
          <li>
            <a id="menuPortfolio" href="#portfolio" data-scroll>Portfolio</a>
          </li>
          <li>
            <a href="/"><img class="logo" src="../assets/img/logo.svg"/></a>
          </li>
          <li>
            <a id="menuPosts" href="#posts" data-scroll>Posts</a>
          </li>
          <li>
            <a id="menuContact" href="#contact" data-scroll>Contact</a>
          </li>
        </ul>
      </nav>
      <nav class="nav--mobile">
        <ul>
          <li>
            <a href="/"><img class="logo" src="../assets/img/logo.svg"/></a>
          </li>
          <li>
            <a id="menuAbout" href="#about" data-scroll>About</a>
          </li>
          <li>
            <a id="menuPortfolio" href="#portfolio" data-scroll>Projects</a>
          </li>
          <li>
            <a id="menuPosts" href="#posts" data-scroll>Posts</a>
          </li>
          <li>
            <a id="menuContact" href="#contact" data-scroll>Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables

header
  width: 100%

.nav--desktop
  padding: 0 20px
  @media (max-width: 700px)
    display: none

ul
  list-style-type: none
  display: flex
  justify-content: space-between
  margin: 50px 0
  padding: 0

li
  margin: 0
  padding: 0
  display: flex
  align-items: center

li a
  color: $armadillo
  font-size: 20px
  line-height: 25px
  text-transform: uppercase
  transition: color .3s ease-in-out
  letter-spacing: 1px

  &:hover
    color: $caribbean-green

.nav--mobile
  @media (min-width: 700px)
    display: none

  ul
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center


  li
    max-width: 200px
    display: block
    width: 100%
    padding: 1ch 0
    border-bottom: 1px solid rgba($armadillo, .5)

    &:hover
      border-color: rgba($caribbean-green, .5)

    &:first-of-type
      margin-bottom: 30px
      border: 0

    a
      display: block
      width: 100%
      text-decoration: none
      text-align: center

hr
  border: 0
  margin-bottom: 150px
  border-bottom: .5px solid $armadillo

  @media (max-width: 700px)
    margin-bottom: 100px
</style>

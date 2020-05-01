<template>
  <section id="posts">
    <div class="DEF_wrapper">
      <h2>Leia meus posts no DEV Community</h2>

      <ul>
        <SinglePost
          v-for="(post, index) in posts"
          v-bind:key="index"
          :post="post"
        ></SinglePost>
      </ul>

      <Cta-posts></Cta-posts>
    </div>
  </section>
</template>

<script>
import SinglePost from "./cards/SinglePost";
import CtaPosts from "./ctas/ctaPosts";

export default {
  name: "Posts",
  components: {
    SinglePost,
    CtaPosts,
  },
  props: {},

  data: function() {
    return {
      posts: [],
    };
  },

  created: function() {
    this.$axios
      .get("https://dev.to/api/articles?username=ricardogouveia3")
      .then((response) => {
        this.posts = response.data;
        this.posts.length = 4;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables
@import ../assets/sass/_animation

section
  width: 100%
  background-color: $caribbean-green
  background-image: url('../assets/img/colorfull-background.jpg')

.DEF_wrapper
  padding: 50px 20px
  border-top: 10px solid $caribbean-green

h2
  color: $white
  display: flex
  font-family: $classic
  font-size: 40px
  font-weight: bold
  justify-content: center
  line-height: 1.5
  margin: 0 0 50px 0
  text-align: center
  width: 100%

  @media (max-width: 500px)
    font-size: 35px

ul
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 25px
  margin-bottom: 50px
  padding: 0

  @media (max-width: 500px)
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

li
  list-style-type: none

  &:hover
    .job-img
      opacity: .7

li a
  display: block
  width: 100%
  height: 100%
  margin: 0
  background: $white
  max-width: 100%
  transition: background-color .4s ease-in-out

  &:hover
    background-color: darken($white, 10%)

.job-img
  transition: opacity .5s ease-in-out
  width: 100%
  overflow: hidden

  img
    width: 100%
    object-fit: contain
    object-position: 100% 50%;

.job-info
  color: $armadillo
  padding: 0 15px

  p
    opacity: .7
    font-size: .8em
</style>

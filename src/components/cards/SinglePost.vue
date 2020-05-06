<template>
  <li>
    <a class="card" :href="post.url" target="_blank">
      <div class="job-img">
        <img :src="post.cover_image" />
      </div>
      <div class="job-info">
        <h4 class="job-title">
          {{ post.title }}
        </h4>
        <p>{{ post.description }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object
  },

  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../../assets/sass/_variables
@import ../../assets/sass/_animation

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
  padding: 0 15px 15px 15px

  p
    opacity: .7
    font-size: .8em
</style>

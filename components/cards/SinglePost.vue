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
        <p class="job-description">{{ post.description }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: Object,
  },

  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.job-img {
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
    object-position: 100% 50%;
  }
}

.job-info {
  color: $armadillo;
  display: flex;
  flex-direction: column;
  padding: 15px;

  .job-title {
    margin: 10px 0;
  }

  .job-description {
    opacity: 0.7;
    font-size: 0.8em;
    margin: 15px 0;
  }
}

li {
  list-style-type: none;

  &:hover {
    .job-img {
      opacity: 0.7;
    }
  }
}

li a {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  background: $white;
  max-width: 100%;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: darken($white, 10%);
  }
}
</style>

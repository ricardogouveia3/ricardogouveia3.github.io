<template>
  <li>
    <a
      class="card"
      :href="project.link"
      :style="{ backgroundColor: project.color }"
      target="_blank"
    >
      <div
        v-if="!project.maintained"
        class="card__status-indicator card__status-indicator--deprecated"
      >
        <span class="card__status-indicator__text">deprecated</span>
      </div>
      <div class="project__icon-wrapper">
        <img
          v-if="project.icon"
          :src="project.icon"
          class="project_icon-wrapper__icon project_icon-wrapper__icon--custom"
        />
        <img
          src="../../assets/img/icons/circle-icon.svg"
          alt="White circle icon"
          class="project_icon-wrapper__icon project_icon-wrapper__icon--generic"
        />
      </div>
      <div class="project__info">
        <h4 class="project__title">
          {{ project.title }}
        </h4>
        <p class="project__description">
          {{ project.description }}
        </p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SingleLabProject',
  props: { project: Object },
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  background-color: $white;
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 100%;
  position: relative;
}

.card__status-indicator {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .card__status-indicator__text {
    font-size: 10px;
    line-height: 1;
    display: inline-block;
  }
}

.card__status-indicator--deprecated {
  background-color: $black;

  .card__status-indicator__text {
    text-transform: uppercase;
    color: #ff7979;
    font-weight: bold;
  }
}

.project__icon-wrapper {
  max-width: 30px;
  max-height: 30px;
  display: flex;

  .project_icon-wrapper__icon {
    width: 30px;
    height: 30px;
  }
}

.project__title {
  font-weight: bold;
  margin: 20px 0;
  font-size: 30px;
  color: $white;
  line-height: 1.5;
}

.project__description {
  color: $white;
  transition: color 0.5s ease-in-out;
  opacity: 0.85;
}

li {
  &:hover {
    .project__description {
      opacity: 1;
    }
  }
}
</style>

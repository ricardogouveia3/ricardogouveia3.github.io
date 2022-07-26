<template>
  <div v-if="project.link" class="newer-project">
    <span>Projeto <br />+ recente</span>
    <a :href="project.link" target="_blank" rel="noopener noreferrer">
      <img class="project-img" :src="project.cardImg" :alt="project.name" />
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
import { Portfolio as PortfolioAPI } from '../../api/portfolio'

export default {
  name: 'CtaNewerProject',
  props: {},

  data() {
    return {
      project: {},
    }
  },

  async fetch() {
    this.project = await PortfolioAPI.getData().then((data) => data[0])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newer-project {
  position: absolute;
  left: 50px;
  bottom: 50px;

  @media (max-width: 700px) {
    display: none;
  }
}
span {
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  display: block;
}
a {
  display: flex;
  height: 120px;
  width: 220px;
  margin-top: 15px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.34);
}
.project-img {
  object-fit: cover;
  object-position: 100% 50%;
  max-width: 190px;
}
.arrow {
  background-color: $caribbean-green;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    height: 35px;
    padding: 0 5px;
  }
}
</style>

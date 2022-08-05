<template>
  <section v-if="projects.length > 0" id="portfolio">
    <div class="DEF_wrapper">
      <h2>Labs</h2>
      <ul>
        <SingleLabProject
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </ul>
      <cta-labs />
    </div>
  </section>
</template>

<script>
import { Labs as LabsAPI } from '../api/labs'
import SingleLabProject from './cards/SingleLabProject'
import CtaLabs from './ctas/ctaLabs'

export default {
  name: 'Labs',
  components: {
    SingleLabProject,
    CtaLabs,
  },
  props: {},

  data() {
    return {
      projects: [],
    }
  },

  async fetch() {
    this.projects = await LabsAPI.getData().then((data) => data.slice(0, 3))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  background-color: #4a4a4a;
}
.DEF_wrapper {
  border-top: 10px solid $caribbean-green;
  padding: 50px 20px;
}
h2 {
  margin: 0;
  text-align: center;
  font-family: $classic;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-size: 100px;
  color: $white;
  letter-spacing: 1.43px;

  @media (max-width: 700px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 45px;
  }
}
ul,
.card-container {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 870px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
}
.see-all {
  background-color: $caribbean-green;
  border: 0;
  color: $white;
  cursor: pointer;
  display: block;
  font-weight: bold;
  padding: 1.5ch;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.4s ease-in-out;
  width: 100%;

  &:hover {
    background-color: lighten($caribbean-green, 20%);
  }

  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.5;
  }
}
.see-all__img {
  width: 13px;
  position: absolute;
  right: 50px;
  animation: arrowBounceLeft--light alternate 1.5s infinite;

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1000px) {
    font-size: 150px;
  }
  @media (max-width: 700px) {
    font-size: 100px;
  }
  @media (max-width: 500px) {
    font-size: 70px;
  }
}
.subtitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.subtitle--left,
.subtitle--right {
  letter-spacing: 2.5px;
  line-height: 40px;
  color: $armadillo;
  margin: 0;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 1000px) {
    letter-spacing: unset;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
}
@media (max-width: 1000px) {
  .subtitle--left {
    padding-left: 20px;
  }
  .subtitle--right {
    padding-right: 20px;
  }
}

.photo {
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 0;
  max-width: 1000px;
  transform: translateX(-50%);

  @media (max-width: 700px) {
    position: relative;
    left: 0;
    width: 100vw;
    max-height: 500px;
    transform: none;
  }
}
img {
  object-fit: fill;
  border: 0;
  padding: 0 80px;
  width: 1000px;
  border-bottom: 40px solid $caribbean-green;

  @media (max-width: 700px) {
    border: 0;
    width: 150vw;
    transform: translateX(-25vw);
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
  }
}
</style>

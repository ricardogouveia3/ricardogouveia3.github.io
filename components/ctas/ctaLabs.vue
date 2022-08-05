<template>
  <a target="_blank" href="https://labs.rcrd.dev">
    <span>Veja todos os projetos</span>
    <img
      class="see-all__img"
      src="../../assets/img/icons/arrow_right--posts.png"
      alt=""
    />
  </a>
</template>

<script>
export default {
  name: 'CtaLabs',
  props: {},
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: $caribbean-green;
  border: 0;
  background-color: $white;
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
    background-color: darken($white, 10%);
  }
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.5;
  }
}
img {
  width: 25px;
  position: absolute;
  right: 50px;
  animation: arrowBounceLeft--light alternate 1.5s infinite;

  @media (max-width: 700px) {
    display: none;
  }
}
</style>

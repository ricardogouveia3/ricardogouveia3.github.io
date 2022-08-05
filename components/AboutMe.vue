<template>
  <section>
    <div class="DEF_wrapper">
      <h2 id="about">About me</h2>
      <div class="content">
        <img src="../assets/img/me-lookingFront--sketch.png" />
        <p>
          Recifense morando em São Paulo. Desde 2015 no front-end. Formado em
          Ciência da Computação pela&nbsp;
          <a
            target="_blank"
            rel="noopener"
            href="http://www.ufopa.edu.br/ufopa/"
            >UFOPA</a
          >.
        </p>
        <p>
          Já atuei em startups como a Hoolyn - focada em turismo compartilhado;
          em agências como a
          <a href="http://reatordigital.com.br/" rel="noopener" target="_blank"
            >Reator Digital</a
          >
          (infoprodutos e social media) e
          <a href="https://murilhas.com.br/" rel="noopener" target="_blank"
            >Murilhas Comunicação</a
          >
          (produtos físicos e digitais para grandes empresas) e em consultorias
          de software como a
          <a
            href="https://www.accenture.com/br-pt"
            rel="noopener"
            target="_blank"
            >Accenture</a
          >
          (usando Angular em contexto bancário).
        </p>
        <p>
          Atualmente, trabalho na
          <a
            href="https://www.thoughtworks.com/pt/"
            rel="noopener"
            target="_blank"
            >ThoughtWorks</a
          >
          em São Paulo como pessoa desenvolvedora.
        </p>
      </div>
      <ul class="icons">
        <li>
          <a href="https://twitter.com/ricardogouveia3" target="_blank"
            ><img src="../assets/img/icons/twitter.png"
          /></a>
        </li>
        <li>
          <a href="https://github.com/ricardogouveia3" target="_blank"
            ><img src="../assets/img/icons/github.png"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ricardogouveia3" target="_blank"
            ><img src="../assets/img/icons/linkedin.png"
          /></a>
        </li>
        <li>
          <a href="https://dribbble.com/ricardogouveia3" target="_blank"
            ><img src="../assets/img/icons/dribbble.png"
          /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  width: 100%;
  background-color: $armadillo;
}
.DEF_wrapper {
  padding-bottom: 100px;
  padding-top: 230px;
  border-bottom: 10px solid $caribbean-green;

  @media (max-width: 700px) {
    padding-top: 50px;
    border-top: 40px solid $caribbean-green;
  }
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
    font-size: 50px;
  }
}
li {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: opacity 0.5s ease-in-out;

  img {
    width: 40px;
  }

  &:hover {
    opacity: 0.7;
  }
}
.content {
  img {
    float: left;
    width: 50%;
    padding-right: 20px;
    shape-outside: circle();
    margin-right: 30px;

    @media (max-width: 850px) {
      display: block;
      max-width: 500px;
      width: 90vw;
      margin: 0 auto;
      padding: 0;
      shape-outside: unset;
      float: none;
    }
  }
  p {
    font-size: 19px;
    margin-top: 20px;
    color: $white;
    line-height: 2;
    font-weight: 300;
    padding-left: 15px;

    @media (max-width: 850px) {
      display: block;
      width: 90vw;
      margin: 0 auto;
      font-size: 18px;
      line-height: 1.7;
      text-align: justify;
      padding: 15px 0;
    }

    &:first-of-type {
      padding-top: 45px;

      @media (max-width: 900px) {
        padding-top: 50px;
      }

      @media (max-width: 850px) {
        padding-top: 0;
        margin-top: 50px;
      }
    }
  }
  a {
    text-decoration: underline;
    color: $white;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: $caribbean-green;
    }
  }
}
.icons {
  clear: both;
  display: flex;
  padding-left: 0;
  margin: 0 auto;
  padding-top: 50px;
  list-style-type: none;
  max-width: 500px;
  align-items: center;
  justify-content: space-around;
}
</style>

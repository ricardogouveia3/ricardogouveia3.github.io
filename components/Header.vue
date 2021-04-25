<template>
  <header>
    <div class="DEF_wrapper">
      <nav class="nav">
        <ul>
          <li class="mobile-logo">
            <a href="/"><img class="logo" src="../assets/img/logo.svg" /></a>
          </li>
          <li>
            <a id="menuAbout" href="#about" data-scroll>About</a>
          </li>
          <li>
            <a id="menuPortfolio" href="#portfolio" data-scroll>Portfolio</a>
          </li>
          <li class="desktop-logo">
            <a href="/"><img class="logo" src="../assets/img/logo.svg" /></a>
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
  name: 'Header',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  width: 100%;
}

.nav {
  .desktop-logo {
    display: none;
  }

  ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0;
    margin: 35px 0 20px 0;
  }

  li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0 0 1ch 0;

    &:hover {
      border-color: rgba($caribbean-green, 0.5);
    }

    a {
      border-bottom: 1px solid rgba($armadillo, 0.5);
      padding-bottom: 10px;
      display: block;
      width: 200px;
      text-decoration: none;
      text-align: center;
      color: $armadillo;
      line-height: 25px;
      text-transform: uppercase;
      transition: color 0.3s ease-in-out;
      letter-spacing: 1px;

      &:hover {
        color: $caribbean-green;
      }
    }

    &.mobile-logo a {
      border-bottom: none;
    }
  }
}

@media screen and (min-width: 700px) {
  .nav {
    padding: 0 20px;

    .mobile-logo {
      display: none;
    }

    .desktop-logo {
      display: block;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 50px 0 25px 0;
      padding: 0;
    }

    li a {
      width: unset;
      font-size: 20px;
      border-bottom: none;
    }
  }
}

hr {
  border: 0;
  margin-bottom: 150px;
  border-bottom: 0.5px solid $armadillo;

  @media (max-width: 700px) {
    margin-bottom: 100px;
  }
}
</style>

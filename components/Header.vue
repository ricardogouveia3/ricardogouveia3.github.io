<template>
  <header>
    <div class="DEF_wrapper">
      <nav class="nav">
        <ul class="menu-list">
          <li class="menu-list__item mobile-logo">
            <a class="menu__item__link" href="/"
              ><img class="logo" src="../assets/img/logo.svg"
            /></a>
          </li>
          <li class="menu-list__item">
            <a id="menuAbout" class="menu__item__link" href="#about" data-scroll
              >About</a
            >
          </li>
          <li class="menu-list__item">
            <ul class="submenu">
              <li class="menu-list__item menu-list__item--submenu">
                <a
                  id="menuPortfolio"
                  class="menu__item__link"
                  href="#portfolio"
                  data-scroll
                  >Portfolio</a
                >
              </li>
              <li class="menu-list__item menu-list__item--submenu">
                <a
                  id="menuLabs"
                  class="menu__item__link"
                  href="#labs"
                  data-scroll
                  >Labs</a
                >
              </li>
            </ul>
          </li>
          <li class="desktop-logo menu-list__item">
            <a class="menu__item__link" href="/"
              ><img class="logo" src="../assets/img/logo.svg"
            /></a>
          </li>
          <li class="menu-list__item">
            <a id="menuPosts" class="menu__item__link" href="#posts" data-scroll
              >Posts</a
            >
          </li>
          <li class="menu-list__item">
            <a
              id="menuContact"
              class="menu__item__link"
              href="#contact"
              data-scroll
              >Contact</a
            >
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
/* stylelint-disable */

header {
  width: 100%;
}

.menu-list {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  margin: 35px 0 20px 0;
}

.menu-list__item {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0 0 1ch 0;

  &:hover {
    border-color: rgba($caribbean-green, 0.5);
  }

  &.mobile-logo .menu__item__link {
    border-bottom: none;
  }
}

.desktop-logo {
  display: none;
}

.menu__item__link {
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

.menu-list__item:last-child:not(.menu-list__item--submenu) .menu__item__link {
  border-bottom: none;
}

.submenu {
  display: flex;
  flex-direction: column;
  padding: 0;

  .menu-list__item--submenu:last-child {
    padding-bottom: 0;
  }
}

@media screen and (min-width: 700px) {
  .nav {
    padding: 0 20px;
  }

  .mobile-logo {
    display: none;
  }

  .desktop-logo {
    display: block;
  }

  .menu-list {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0 25px 0;
    padding: 0;
  }

  .menu__item__link {
    width: unset;
    font-size: 20px;
    border-bottom: none;
  }

  .menu-list__item--submenu a {
    padding-bottom: 0;
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

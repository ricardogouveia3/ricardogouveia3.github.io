<template>
  <section id="portfolio">
    <div class="DEF_wrapper">
      <h2>Labs</h2>
      <div class="dynamic-content">
        <ul class="slider-menu">
          <li v-for="(item, index) in labItems" v-bind:key="index">
            <a
              @click="selectLabItem($event)"
              :class="{ selected: isActive(item.title) }"
              href="javascript:void(0)"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <a
          v-if="selectedLabItem"
          :style="{ backgroundColor: selectedLabItem.color }"
          class="showroom"
        >
          <h3>{{ selectedLabItem.title }}</h3>
          <p>{{ selectedLabItem.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
const RCRD_API_LABS = "https://api.rcrd.me/labs";

export default {
  name: "Labs",
  components: {},
  props: {},

  data: function() {
    return {
      labItems: null,
      selectedLabItem: null
    };
  },

  beforeCreate() {
    fetch(RCRD_API_LABS)
      .then(response => this.handleFetchError(response))
      .then(response => response.json())
      .then(data => {
        this.labItems = data;
        this.selectedLabItem = this.labItems[0];
      });
  },

  methods: {
    handleFetchError: function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    },
    selectLabItem: function(e) {
      this.selectedLabItem = this.labItems.find(item => {
        return (
          item.title.toLowerCase() === e.srcElement.textContent.toLowerCase()
        );
      });
    },
    isActive(itemTitle) {
      // eslint-disable-next-line no-console
      console.log(this.selectedLabItem);
      return (
        itemTitle.toLowerCase() === this.selectedLabItem.title.toLowerCase()
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables
@import ../assets/sass/animation

section
  background-color: #EFEFF0

.DEF_wrapper
  padding: 50px 20px
  border-top: 10px solid $armadillo

h2
  margin: 0
  text-align: center
  font-family: $default
  text-transform: uppercase
  margin-bottom: 50px
  font-size: 100px
  color: $armadillo
  letter-spacing: 1.43px

  @media (max-width: 700px)
    font-size: 80px
  @media (max-width: 500px)
    font-size: 45px


ul
  background-color: $armadillo
  color: #AEAEAE
  margin: 0
  padding: 0
  list-style-type: none
  display: flex
  text-align: center
  justify-content: center

li
  a
    display: block
    padding: 10px
    text-decoration: none
    color: #FFF
    margin: 0 10px
    transition: all .25s ease
    background-color: $armadillo

    &:hover
      background-color: $caribbean-green

    &.selected
      background-color: $caribbean-green

a.showroom
  color: #fff
  display: flex
  flex-direction: column
  border-top: 3px solid $caribbean-green
  text-decoration: none
  padding: 20px
  transition: background-color .28s ease
</style>

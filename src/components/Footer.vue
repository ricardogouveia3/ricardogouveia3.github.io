<template>
  <footer>
    <div class="DEF_wrapper">
      <p>
        RCRD - All content under MIT*. Pictures, icons and logos that may be
        protected under owner licenses.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import ../assets/sass/_variables

footer
  background-color: #2F2F2F

div
  padding: 50px 20px
  border-top: 1px solid rgba($white, .5)

p
  text-align: center
  color: $white
  font-weight: 300
  font-size: 14px
</style>

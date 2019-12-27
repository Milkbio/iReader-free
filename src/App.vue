<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
  }
}
document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    document.documentElement.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss">
</style>


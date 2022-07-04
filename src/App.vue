<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <header>
      <LocaleSelector />
    </header>
    <router-view />
  </div>
</template>

<script>
import LocaleSelector from './components/LocaleSelector.vue'

export default {
  name: 'App',
  components: {
    LocaleSelector,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <h1>Home Page</h1>
    <router-link to="/detail">Go to detail</router-link>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  },
}
</script>


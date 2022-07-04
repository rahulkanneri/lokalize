<template>
  <div>
    <h1>Detail Page</h1>
    <router-link to="/">Back to home</router-link>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DetailPage',
  components: {
    HelloWorld,
  },
}
</script>


<template>
  <div>
    <Topnav></Topnav>
    <div class="banner">
      <h1>Kattem UI</h1>
      <h2>初探Vue3</h2>
      <p class="actions">
        <a href="">Github </a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav,
  },
}
</script>
<style lang="scss" scoped>
.banner {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(9, 226, 241);
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background-color: #fff;
      display: inline-block;
    }
  }
}
</style>
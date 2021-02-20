<template>
  <Topnav></Topnav>
  <div class="topNav">
    <div class="logo"></div>
    <div class="menu"></div>
  </div>
  <div class="content">
    <aside>侧边栏</aside>
    <main>内容</main>
  </div>
</template>
<script>
import Topnav from '../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>
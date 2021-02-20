<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"  @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const asideVisble = inject<Ref<boolean>>('asideVisible')
    
    const toggleMenu = ()=> {
      asideVisble.value =  !asideVisble.value
    }
    return {toggleMenu}
  },
}
</script>
<style lang="scss" scoped>
.topnav {
  background-color: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background-color: rgb(240, 226, 228);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width:500px) {
    .menu {
      display: none;
    }
    > .logo {
    max-width: 6em;
    margin: auto;
  }
  > .toggleAside {
    display: inline-block;
  }
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
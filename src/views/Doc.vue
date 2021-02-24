<template>
  <div class="layout">
    <Topnav toggleAsideButtonVisible class="nav"></Topnav>
    <div class="content" v-if="asideVisble">
      <aside class="">
        <h2>组件列表</h2>
        <ol>
          <li v-for="(item, index) in componentsList" :key="index">
            <router-link :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/layout/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisble = inject<Ref<boolean>>('asideVisible')
    const componentsList = [
      { name: 'Switch 组件', path: '/doc/switch' },
      { name: 'Button 组件', path: '/doc/button' },
      { name: 'Dialog 组件', path: '/doc/dialog' },
      { name: 'Tabs 组件', path: '/doc/tabs' },
    ]
    return {
      asideVisble,
      componentsList,
    }
  },
}
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
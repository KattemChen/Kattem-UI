<template>
  <Topnav></Topnav>
  <div class="content">
    <aside>
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
</template>
<script>
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  },
  data () {
    return {
      componentsList: [
        { name: 'Switch 组件', path: '/doc/switch' },
        { name: 'Button 组件', path: '/doc/button' },
        { name: 'Dialog 组件', path: '/doc/dialog' },
        { name: 'Tabs 组件', path: '/doc/tabs' }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
aside {
  background-color: lightblue;
  width: 150px;
  padding: 70px 16px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
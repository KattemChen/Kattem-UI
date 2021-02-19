<template>
  <div>
    导航栏:
    <router-link to="/"> Kattem |</router-link>
    <router-link to="/Kattem2"> Kattem2 </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

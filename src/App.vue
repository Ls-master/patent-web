<template>
  <div id="app">
    <div class="app-left">
      <left-menu />
    </div>

    <div class="app-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';

export default {
  name: 'App',
  components: {
    LeftMenu
  }
}
</script>

<style lang="scss">
@import "./style/index.scss";

#app {
  width: 100%;
  display: flex;
  .app-left {
    width: 200px;
    height: 100%;
  }
  .app-right {
    flex: 1;
  }
}
</style>

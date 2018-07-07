<template lang="html">
  <div class="container-main">
    <top />
    <div class="main-content">
      <div class="content-left">
        <left-menu />
      </div>
      <div class="content-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue';
import LeftMenu from '../components/LeftMenu.vue';

export default {
  components: {
    Top,
    LeftMenu
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang="scss">
  .container-main {
    height: 100%;
    .main-content {
      height: 90%;
      margin-top: 10px;
      display: flex;
      .content-left {
        width: 200px;
        height: 100%;
        margin-right: 20px;
      }
      .content-right {
        flex: 1;
        background: #FFFFFF;
        box-shadow: 0 2px 6px 0 rgba(193, 201, 214, 0.5);
        padding: 10px;
      }
    }
  }
</style>

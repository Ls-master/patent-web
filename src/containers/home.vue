<template>
  <div class="container-home">
    <router-view/>
  </div>
</template>

<script>
import Top from '../components/Top.vue';

export default {
  components: {
    Top,
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.container-home {
  width: 100%;
  height: 100%;
  min-width: 1100px;
}
</style>
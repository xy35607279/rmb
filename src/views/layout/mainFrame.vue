<template>
  <div class="wrapper">
    <side-bar />
    <div class="right-side">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </div>
</template>
<script>
import sideBar from './sideBar.vue';

export default {
  name: 'MainFrame',
  components: {
    'side-bar': sideBar
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.wrapper {
  display: flex;
}
.right-side {
  flex: 1;
  height: 100%;
  border-left: $eig-test-border;
  min-height: calc(100vh - #{($eig-header-height + $eig-footer-height)});
}
</style>

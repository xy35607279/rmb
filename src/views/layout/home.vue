<template>
  <div class="home-view">
    <div class="header">
      <slot name="header">
        <default-header />
      </slot>
    </div>
    <div class="main-wrapper">
      <slot name="main">
        <default-main />
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <default-footer />
      </slot>
    </div>
  </div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue';
import MainFrame from './mainFrame.vue';

export default {
  name: 'Home',
  components: {
    'default-header': Header,
    'default-footer': Footer,
    'default-main': MainFrame
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.home-view {
  height: 100%;
}
.main-wrapper{
  min-height: calc(100% - #{($eig-header-height + $eig-footer-height)});
}
</style>

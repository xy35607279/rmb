<template>
  <div class="side-bar">
    <el-menu
      :default-active="defaultActive"
      text-color="#000"
      active-text-color="#d49c49"
    >
      <sidebar-item v-for="menuItem in menuList" :key="menuItem.menuId" :item="menuItem" />
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from './sidebarItem.vue';
import { getMenus } from '@/router/service';

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      menuList: [],
      defaultActive: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.defaultActive = this.$route.meta.menuId;
      this.menuList = getMenus(this.$route.meta.channelId);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
@media only screen and (max-width: 768px) {
.side-bar {
    display: none;
  }
}
.side-bar {
  width: $eig-menu-expanded-width;
  margin-right: 20px;
}
.el-menu {
  border-right: 0px;
}
</style>

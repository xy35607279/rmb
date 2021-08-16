<template>
  <div>
    <template v-if="!item.children || !item.children.length">
      <a :href="item.path" target="_blank" @click="handleClickItem(item.path, $event)">
        <el-menu-item :index="item.menuId">
          <span slot="title" :title="$t(item.lang)">{{ $t(item.lang) }}</span>
        </el-menu-item>
      </a>
    </template>
    <el-submenu v-else :index="item.menuId">
      <template slot="title">
        <span slot="title" :title="$t(item.lang)">{{ $t(item.lang) }}</span>
      </template>
      <template v-for="child in item.children">
        <sidebar-item :key="child.menuId" :item="child" />
      </template>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClickItem(path, e) {
      e.preventDefault();
      this.$router.push(path, null, () => { });
    }
  }
};
</script>

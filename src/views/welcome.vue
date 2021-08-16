<template>
  <home>
    <template v-slot:main>
      <div class="welcome">
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <p>Here is welcome page</p>
        <el-button @click="normal">
          ajax default
        </el-button>
        <el-button @click="noMask">
          ajax not loading
        </el-button>
      </div>
    </template>
  </home>
</template>
<script>
import Home from './layout/home.vue';
import ajax from '@/utils/ajax';

export default {
  name: 'Welcome',
  components: {
    home: Home
  },
  methods: {
    normal() {
      const isShowLoading = true;
      ajax.post('/settlement', {}, { isShowLoading });
    },
    noMask() {
      ajax.post('/settlement', {}, { isShowLoading: false });
    }
  }
};
</script>
<style lang="scss" scoped>

.welcome{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

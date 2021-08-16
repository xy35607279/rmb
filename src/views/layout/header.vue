<template>
  <div class="header">
    <div class="logo" @click="$router.push('/home')" />
    <ul class="channel">
      <li
        v-for="item in channelList"
        :key="item.path"
        v-t="item.lang"
        @click="handleChannleClick(item)"
      />
    </ul>
    <div class="operation">
      <a class="item">
        语言
      </a>
      <a class="item">
        个性化
      </a>
      <a class="item">
        登出
      </a>
    </div>
  </div>
</template>

<script>
import { getChannels } from '@/router/service';

export default {
  name: 'Header',
  data() {
    return {
      channelList: [
        // {
        //   i1n8nCode: 'menu.channel.internationalSettlement',
        //   path: '/settlement'
        // },
        // {
        //   i1n8nCode: 'menu.channel.supplyChainFinancial',
        //   path: '/supplyChainFinancial'
        // },
        // {
        //   i1n8nCode: 'menu.channel.internationalPay',
        //   path: '/internationalPay'
        // },
        // {
        //   i1n8nCode: 'menu.channel.globalCash',
        //   path: '/globalCash'
        // },
        // {
        //   i1n8nCode: 'menu.channel.commonManagement',
        //   path: '/commonManagement'
        // }
      ]
    };
  },
  mounted() {
    this.channelList = getChannels();
  },
  methods: {
    handleChannleClick({ path }) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
@mixin space-around {
  display: flex;
  justify-content: space-around;
}
.header {
  height: $eig-header-height;
  border-bottom: $eig-test-border;
  display: flex;
  align-items: center;
  .logo {
    width: 120px;
    height: $eig-header-height;
    align-self: flex-start;
    margin-left: 20px;
    background-image: url('../../assets/logo.png');
    background-size: auto 100%;
  }
  .channel {
    flex: 1;
    @include space-around;
    list-style: none;
  }
  .operation {
    @include space-around;
    width: 200px;
    .item {
      text-align: center;
      line-height: 30px;
      padding-left: 5px;
      padding-right: 5px;
      background-color: #afafaf;
      + .item {
        margin-left: 6px;
      }
    }
  }
}

</style>

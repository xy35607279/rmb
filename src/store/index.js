import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    popErrorMsg(context, msg) {
      const vm = '_vm';
      this[vm].$message.error(msg);
    }
  },
  modules: {
  }
});

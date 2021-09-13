import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import './assets/style/index.scss';
import Vant from 'vant';
import App from './App.vue';
import router, { setupBeforeEachInterceptor } from './router';
import store from './store';
import i18n from './locales';

import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

setupBeforeEachInterceptor(store);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

/*
  先从入口文件开始分析
    1：main文件中引入
      import Vue from 'vue';                                                        引入vue
      import VueRouter from 'vue-router';                                           引入vueRouter
      import ElementUI from 'element-ui';                                           引入elementUI
      import './assets/style/index.scss';                                           引入SCSS
      import App from './App.vue';                                                  引入主文件app.vue，这个就是页面加载时候的入口主文件
      import router, { setupBeforeEachInterceptor } from './router';                引入配置的router
      import store from './store';                                                  引入vuex
      import i18n from './locales';                                                 引入中英文切换

      Vue.use(VueRouter);
      Vue.use(ElementUI);

      Vue.config.productionTip = false;

      setupBeforeEachInterceptor(store);

      new Vue({
        router,
        store,
        i18n,
        render: h => h(App)
      }).$mount('#app');

  路由需要详细看
*/

import VueRouter from 'vue-router';

import { getRoutes } from './service';
import interceptor from './interceptor';

const routes = [
  ...getRoutes()
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export function setupBeforeEachInterceptor(store) {
  const guard = interceptor.bind(null, store);
  router.beforeEach(guard);
}

// router.beforeEach(interceptor);

export default router;

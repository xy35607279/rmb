function interceptor(store, to, from, next) {
  if (to.matched.length) {
    next();
  } else {
    next('/test');
  }
}
export default interceptor;

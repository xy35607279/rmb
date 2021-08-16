function interceptor(store, to, from, next) {
  if (to.matched.length) {
    next();
  } else {
    next('/login');
  }
}
export default interceptor;

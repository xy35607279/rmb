const Welcome = () => import('@/views/welcome.vue');

const home = [
  {
    path: '/home',
    name: 'Home',
    component: Welcome
  }
];
export default home;

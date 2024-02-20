import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage';
import Items from '../components/Items';
import ShoppingCart from '../components/ShoppingCart';
import ContactUs from '../components/ContactUs';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'potions shop',
    component: MainPage,
  },
  {
    path: '/items',
    name: 'items',
    component: Items,
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart,
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUs,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

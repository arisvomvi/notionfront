import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Page from '../views/Page.vue';
import Test from '../views/Test.vue';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
  // { path: '/about', component: About },
  // { path: '/page', component: Page },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 History API
  routes,
});

export default router;

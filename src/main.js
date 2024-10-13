import { createApp } from 'vue';
import App from '@/App.vue';
// import router from '@/router';
// import { initpage } from '@/services/page';
// import './styles/app.scss';

const app = createApp(App);

import GlobalComponents from './plugins/global-components.js'; // Import your plugin
app.use(GlobalComponents);

// console.log('sdsds');

// Call the initpage function and create routes dynamically
// initpage('8a4268397a4545dca8910d682c84715f')
//   .then(response => {
//     console.log('response', response);

//     console.log(response.pages.results);

//     // Dynamically create routes based on the response
//     // if (response && response.pages) {
//     //   app.provide('pages', response.pages.results);

//     //   response.pages.results.forEach((page: any) => {
//     //     router.addRoute({
//     //       path: `/${page.properties.Name.title[0].plain_text}`,
//     //       name: page.properties.Name.title[0].plain_text,
//     //       component: () => import('./views/Page.vue'),
//     //       props: { pageData: page }
//     //     });
//     //   });
//     // }

//     // Mount the app only after routes are created
//     app.use(router);
//     app.mount('#app');
//   })
//   .catch(error => {
//     console.error('Error initializing pages:', error);
//     // Fallback: mount the app without additional routes if there is an error
//     app.use(router);
//     app.mount('#app');
//   });

// app.use(router);
app.mount('#app');

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Import your components
import AllPosts from './components/AllPosts.vue';
import AddPost from './components/AddPost.vue';
import EditPost from './components/EditPost.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ReadPost from './components/ReadPost.vue';


import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';


Vue.use(Vuex);


// Define routes
const routes = [
    { path: '/', component: Login },
    { path: '/home', component: AllPosts },
    { path: '/add', component: AddPost },
    { path: '/edit/:id', name: 'edit', component: EditPost },
    { path: '/register', component: Register },
    { path: '/read/:id', name: 'read', component: ReadPost },

    // Add more routes as needed
];

// Create the router instance
const router = new VueRouter({
    routes,
    mode: 'history', // Use "history" mode for cleaner URLs (requires server configuration)
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.token) {
      // Redirect to login if not authenticated
      next({ name: 'login' });
    } else {
      next();
    }
  });
// Register global components
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Create the main Vue instance
const app = new Vue({
    el: '#app',
    router,
    store,
});

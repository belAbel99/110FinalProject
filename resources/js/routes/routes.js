import AllPosts from '../components/AllPosts.vue';
import AddPost from '../components/AddPost.vue';
import EditPost from '../components/EditPost.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import ReadPost from '../components/ReadPost.vue'

export const routes = [
    {
        name: 'login',
        path: '/',
        component: Login,

    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            // Check if the user is not authenticated
            if (!store.state.token) {
                // Redirect to the login page
                next({ name: 'login' });
            } else {
                // Proceed to the registration page
                next();
            }
        },
    },
    {
        name: 'home',
        path: '/home',
        component: AllPosts,

    },
    {
        name: 'add',
        path: '/add',
        component: AddPost
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'read',
        path: '/read/:id',
        component: ReadPost
    }
];


import {createRouter, createWebHistory} from 'vue-router';

const Home = ()=> import('../Pages/Accueil.vue')
const routes =  [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/connexion',
        name: 'Connexion',
        component: ()=> import('../Pages/Connexion.vue'),
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
  
 })

 export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';

import Game from './components/game.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Game
        },

    ]
});
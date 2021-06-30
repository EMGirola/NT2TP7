import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {    
        indexWinner: -1,
        hasWinner: false,
        message: '',
        rgbWinner: '',

    },

    actions: {
        cambiarMensaje({commit}, mensaje){
            console.log('Cambiar mensaje:', mensaje)
            commit('cambiarMsg', mensaje);
        },
        cambiarIndex({commit}, idx){
            console.log('Cambiar idx:', idx)
            commit('cambiarIdx', idx);
        },
        cambiarRgb({commit}, rgb){
            console.log('Cambiar rgb:', rgb)
            commit('cambiarRgbn', rgb);
        },
    },
    mutations: {
        cambiarMsg(state, msg){
            state.message = msg;
        },
        cambiarIdx(state, idx){
            state.indexWinner = idx;
        },
        cambiarRgbn(state, idx){
            state.rgbWinner = idx;
        }
    }
})
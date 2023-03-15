// import {createStore} from 'vuex';
import { defineStore, acceptHMRUpdate } from 'pinia';
// export default createStore({
//     state: {
//         name: 'dasd',
//         menuList: []
//     },
//     mutations: {
//         setName(state, payload) {
//             state.name = payload;
//         },
//         setMenuList(state, payload) {
//             state.menuList = state.menuList.concat(payload)
//         }
//     },
//     actions: {
//         syncSetName(store, params) {
//             setTimeout(() => {
//                 store.commit('setName', params);
//             }, 2000)
//         },
//         set_menu_list(store, params) {
//             store.commit('setMenuList', params);
//         }
//     },
//     modules: {}
// })

const storeIndex = defineStore('common', {
    state: () => ({
        name: 'dasd',
        menuList: []
    }),
    getters: {},
    actions: {
        syncSetName(params) {
            this.name = params;
        },
        set_menu_list(params) {
            this.menuList = params;
        }
    }
});

import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(storeIndex, import.meta.hot));
export default storeIndex;

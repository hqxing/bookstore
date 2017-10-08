import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import users from './modules/users';
import current_user from './modules/current_user';
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
    	users,current_user
    },
    getters
})

export default store;


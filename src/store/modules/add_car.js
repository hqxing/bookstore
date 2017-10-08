'use strict';
const users = {
	state: {
		addData:[]
	},
	mutations: {
      SET_ADDDATE: (state, newAddData) => {
        state.addInfo = newAddData;
        console.log('stock信息为:',state.currentUserData)
      },
    },
    actions: {
      setUserDate({ dispatch,commit, state},newUserData){
        console.log(newUserData);
        commit('SET_USERDATE',newUserData)
      }
    } 
};

export default users;
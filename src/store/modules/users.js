/*所有用户数据*/
'use strict';
const users = {
	state: {
		"userData": [
			{ "userID":"01", "userName":"用户1" ,"phone":"13580574000"},
			{ "userID":"02", "userName":"用户2" ,"phone":"13580574000"}		
		]
	},
	mutations: {
      SET_USERDATE: (state, newUserData) => {
        state.userData = newUserData;
        console.log('stock信息为:',state.userData)
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
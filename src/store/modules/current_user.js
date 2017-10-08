/*当前用户数据*/
'use strict';
const users = {
	state: {
		"currentUserData": { "userID":"01", "userName":"张三" ,"phone":"13580574000"}
	},
	mutations: {
      SET_USERDATE: (state, newUserData) => {
        state.currentUserData = newUserData;
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

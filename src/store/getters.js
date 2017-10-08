const getters = {

    userIn:state=>{
    	return state.users.userData,state.current_user.currentUserData
    },
    
};
export default getters


export const initialstate={
    getprofile:null,
}
export const reducer=(state,action)=>{
    if (action.type === "ADD_PROFILE"){
        return({
            ...state,
            getprofile:action.value
        })
    }
    return state

}
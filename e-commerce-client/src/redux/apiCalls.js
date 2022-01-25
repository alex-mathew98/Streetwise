import { publicRequest } from "../APIMethods";
import { clearCart } from "./cartRedux";
import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux"

export const login = async(dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const register = async(dispatch,user) => {
    try{
        const res = await publicRequest.post("/auth/register",user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
    console.log("User object received",user);
}


export const signout = async(dispatch) =>{
    dispatch(logout());
    dispatch(clearCart());
}
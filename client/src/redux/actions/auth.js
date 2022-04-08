import {SIGN_IN,SIGN_IN_FAILURE,SIGN_IN_SUCCESS,SIGN_UP,SIGN_UP_FAILURE,SIGN_UP_SUCCESS} from "../constants";

export const signIn=(user)=>{
    return{
        type:SIGN_IN,
        payload:user
    }
}
export const signInSuccess=(user)=>{
    return{
        type:SIGN_IN_SUCCESS,
        payload:user
    }
}
export const signInFailure=(error)=>{
    return{
        type:SIGN_IN_FAILURE,
        payload:error
    }
}


export const signUp=(user)=>{
    return{
        type:SIGN_UP,
        payload:user
    }
}

export const signUpSuccess=(user)=>{
    return{
        type:SIGN_IN_SUCCESS,
        payload:user
    }
}
export const signUpFailure=(error)=>{
    return{
        type:SIGN_UP_FAILURE,
        payload:error
    }
}

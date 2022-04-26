import { HYDRATE } from "next-redux-wrapper"
import * as T from "../types"

const initialState = {
    users: [],
    loginUser: null,
}

const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case HYDRATE:
            console.log(" ### Error: Hydration failed because the initial UI does not match what was rendered on the server. ### ")
            return { ...state, ...action.payload }
            case LOGIN_REQUEST:
                return {
                  ...state,
                  loginLoading: true, 
                  loginSucceed: false,
                  loginError: null
                }
              case LOGIN_SUCCEED:
                return {
                  ...state,
                  loginLoading: false, 
                  loginSucceed: true,
                  loginError: null,
                  user: action.data
                }
              case LOGIN_FAILED:
                return {
                  ...state,
                  loginLoading: false, 
                  loginSucceed: false,
                  loginError: action.error
                }
    }
}
export default userReducer
import * as UserType from "../types"

export const addUser = user => {
    return {
        type: UserType.USER_ADD_REQUESTED,
        payload: user
    }
}
export const login = loginInfo => {
    alert('2>>'+JSON.stringify(loginInfo))
    return {
        type: UserType.USER_ADD_REQUESTED,
        payload: loginInfo
    }
}
export const fetchUsers = () => {
    return {
        type: UserType.USER_FETCH_REQUESTED
    }
}
export const updateUser = user => {
    return {
        type: UserType.USER_UPDATE_REQUESTED,
        payload: user
    }
}
export const delUser = userid => {
    return {
        type: UserType.USER_DELETE_REQUESTED,
        payload: userid
    }
}
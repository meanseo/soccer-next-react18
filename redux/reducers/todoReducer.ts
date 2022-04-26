import { createSlice } from "@reduxjs/toolkit";

export interface TodoType{
    userid: string;
    task: string;
    complete: string; // value is T or F
}

export interface TodoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoRequest(state: TodoState, payload){
            alert('step 2: 리듀서 내부')
            state.loading = true;
        },
        todoSuccess(state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false
        },
        todoFailure(state: TodoState, {payload}){
            state.data = payload 
            state.loading = false
        }
    }
})
const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer
import { todoActions } from "../reducers/todoReducer.ts";
import  { postTodo } from '../api/todoApi.ts'
import {put, takeLatest} from 'redux-saga/effects'

interface AddTodoType{
    type: string;
    payload: {
        userid: string,
        task: string,
        complete: string
    }
}
interface AddTodoSuccessType{
    type: String;
    payload: {
        userid: string
    }
}

function* addTodo(todo: AddTodoType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(todo))
        const response : AddTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.todoSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ')
         yield put(todoActions.todoFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(todoActions.todoRequest, addTodo)
}
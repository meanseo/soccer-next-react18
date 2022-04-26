import { response } from 'express'
import { all } from 'express/lib/application'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"



function* login(action){
    try{
      const res = yield call(loginAPI, action.data)
      yield put({
        type: T.LOGIN_SUCCESS,
        data: res.data
      })
    } catch (err) {
      yield put({
        type: LOGIN_FAIL,
        error: err.response.data
      })
    }
  }

function* watchLogin(){
    alert(`3 >> saga watch`)
    yield takeLatest(T.LOGIN_REQUEST, login)
}
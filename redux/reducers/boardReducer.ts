import { createSlice } from "@reduxjs/toolkit";
const initialState = []
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            alert('리듀서 내부로 들어온 글 제목 : '+ action.payload.title)
            const board = {title: action.payload.title, complete: false}
            state.push(board)
        }
    }
})
export const {addBoard} = boardSlice.actions

export default boardSlice.reducer
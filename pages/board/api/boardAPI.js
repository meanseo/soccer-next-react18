import axios from 'axios'
const SERVER = `http://localhost:8080`

export const boardForm = boardFormRequest => axios.post(`${SERVER}/board/board-form`, boardFormRequest)
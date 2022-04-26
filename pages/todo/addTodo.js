import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/reducers/todoReducer.ts";

export default function AddTodo() {
    const [todo, setTodo] = useState({
      userid: '', task: '', complete:''
    })
    const dispatch = useDispatch()
    const handleChange = e => {
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo,[name]:value})
    }
    
  return (
     <>
      <h1>일정등록</h1>
      <form onSubmit={
        e => {
            e.preventDefault()
            alert(' step 1: 일정등록 ')
            dispatch(todoActions.todoRequest(todo))
            setTodo({
              userid: '',
              task: '',
              complete: ''
            })
        }
    }
    >
      <label><b>사용자ID</b></label>
      <input type="text"
          id="new-todo-input"
          className="input input__lg"
          name="userid"
          autoComplete="off"
          onChange={handleChange}
        /><br/>
        <label><b>일정</b></label>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="task"
          autoComplete="off"
          onChange={handleChange}
        /><br/>
        <label><b>완료 여부</b></label>
        <select name="complete" onChange={handleChange}>
                <option value="T">T</option>
                <option value="F">F</option>
            </select><br/>
        <button type="submit" style={{marginLeft:"20px"}} className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      
       {/**
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
              setCheck(!check)
            }}/>
            <label className="todo-label" htmlFor="todo-0">
              운동 24시간 하기
            </label>
            { check ? <Image class="rotate-center"
            style={{ visibility: "visible", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />
            :<Image
            style={{ width: '6%', visibility: "hidden", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />}
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
      </ul>*/}
    </>
  );
}
import { addBoard } from "../../redux/reducers/boardReducer.ts"; 
import style from "board/style/board-form.module.css"
import React, {useState} from "react"
import { useDispatch } from "react-redux";

export default function BoardhtmlForm(){
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    return (<>
        <>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form action="" onSubmit={ e => {
                e.preventDefault()
                alert('value ?' + value)
                if(value) dispatch(addBoard({title: value}))
            }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} id="title" name="title" placeholder="글 제목 입력"
                onChange={e => {
                    e.preventDefault()
                    setValue(e.target.value)
                }}
                />
                </div>
            </div>
            {/**
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder=""/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="K09" selected>Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" placeholder="" style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} 
                value="Submit"/>
            </div>
            
            </form>
            </div>
        </>
    </>)
}
import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'
const Table = ({ columns, colspan, data}) => {
    return (
      <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}  >
            {columns.map((column, index) => (
                  <th className={tableStyles.th} key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                { data.length == 0  ?<tr className={tableStyles.tr}>
                                      <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다.</td>
                                      </tr>
                :data.map((todo) => (
                <tr className={tableStyles.tr}  key={todo.userid} >
                  <td className={tableStyles.td}>
                    <Link href={{pathname:`/todo/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/todo/${todo.userid}`}>
                      <a>{todo.userid}</a>
                    </Link>
                  </td>
                  <td className={tableStyles.td}>{todo.task}</td>
                  <td className={tableStyles.td}>{todo.complete}</td>
                </tr>
            ))}
        </tbody>
      </table>
    );
  }

export default function UserList(){
    const columns = ["사용자ID", "할 일", "완료 여부"];
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/list').then(res=>{
            setData(res.data.todos)
        }).catch(err=>{})
    },[])
    return (<>
        <h1>스케쥴 목록</h1>
        
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={3} data={data}/>
        </div>
        </>
)}
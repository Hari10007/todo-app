import React, { useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState([])

  const inputFocus= useRef()
  const ref = useRef(0)

  const submit = ()=>{
    inputFocus.current.focus()
    ref.current = 0
    if (todo){
      { arr.map((obj)=>{
        if( obj.text === todo){
          ref.current = ref.current + 1
        }
      })}
      if (ref.current === 0){
        setArr([...arr, {id: Date.now(), text: todo, status: false}])
      }
      else{
        alert("List already present")
      }
      inputFocus.current.value = ""
    }
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="input">
        <input ref={inputFocus}
        type="text" 
        onChange={(e)=>{setTodo(e.target.value)}}
        placeholder="Add item..." />
        <i className="far fa-paper-plane" onClick={ submit }></i>
      </div>
      {/* { arr.map((obj)=>{
        return(
          <div className="todos">
            <div className="todo">
              <div className="left">
                <input 
                type="checkbox"
                onChange={(e)=>{
                  setTodo(arr.filter(obj2=>{
                    if (obj2.id === obj.id ){
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))}}
                value={obj.status}/>
                <p>{obj.text}</p>
                <p>{obj.status}</p>
              </div>
              <div className="right">
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
          </div>
        )
      })} */}
      
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL No</th>
            <th>To Do </th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        {arr.map((obj, index)=>{
            if (arr.size !== 0){
              return(
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj.text}</td>
                    <td>{obj.id}</td>
                    <td><i className="far fa-trash-alt"
                      onClick={(e)=>{
                      setArr(arr.filter(obj2=> obj2.id !== obj.id)
                      )}}></i></td>
                  </tr>
                </tbody>
              )
            }else{
              return(<h5>List is empty</h5>)
            }
        })}
      </Table>
    </div>
  );
}

export default App;

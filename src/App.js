import React, { useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todo, setTodo] = useState("")
  const [arr, setArr] = useState([])
  const [error,setError]=useState('')
  
  const inputFocus= useRef()
  const ref = useRef(0)
  console.log(arr);

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
        setError(" ")
      }
      else{
        setError("List already present")
      }
      inputFocus.current.value = ""
    }
  }
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do App</h1>
      </div>

      <div className="input">
        <input ref={inputFocus}
        type="text" 
        onChange={(e)=>{setTodo(e.target.value)}}
        placeholder="Add item..." />
        <i className="far fa-paper-plane" onClick={ submit }></i>
      </div>
      <p style={{color:'#ff0000', textAlign: 'center'}}>{error?error:''}</p>
    
      <br />
      {arr.length !== 0 && 
        <Table striped bordered hover id='customers'>
          <thead>
            <tr>
              <th>Status</th>
              <th>To Do </th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          {arr.map((obj, index)=>{
              if (arr.size !== 0){
                return(
                  <tbody key={index}>
                    <tr>
                      <td><input 
                          type="checkbox"
                          onChange={(e)=>{
                            setTodo(arr.filter(obj2=>{
                              if (obj2.id === obj.id ){
                                obj2.status = e.target.checked
                              }
                              return obj2
                            }))}}
                          value={obj.status? "checked" : ""}/></td>
                      <td>{obj.text}</td>
                      <td>{new Date(obj.id).toLocaleString()}</td>
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
      }   
    </div>
  );
}

export default App;

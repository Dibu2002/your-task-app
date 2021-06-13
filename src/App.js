import Header from './files/Header.js'
import { Todos } from './files/Todos.js'
import { Footer } from './files/Footer.js'
import './App.css';
import React, { useState, useEffect } from 'react'
import AddTodo from './files/AddTodo.js'
import About from './files/about.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, settodos] = useState(initTodo)

  const addTodo = (TITLE, DESC) => {
    console.log("todo added", TITLE, DESC);
    const srNo = todos.length !== 0 ? todos[todos.length - 1].sr_no + 1 : 1;
    const myTodo = {
      sr_no: srNo,
      task: TITLE,
      Desc: DESC
    }
    settodos([...todos, myTodo])
    // localStorage.setItem("todos",JSON.stringify(todos))
  }

  function onDelete(todoitem) {
    console.log(todoitem, "is deleted");
    settodos(
      todos.filter((e) => {
        return (e !== todoitem)
      }))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/your-task-app" render={()=>{
            return(
              <>
              <Header title="let's start" heading="start" nav={true}/>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete}/>
            </>
            )}}>
          </Route>
          
          <Route exact path="/your-task-app/about">
              <Header title="let's start" heading="start" />             
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

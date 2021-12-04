import { useContext, useEffect } from "react"
import { TodoContextProvider } from "../../context/todo-context/TodoContext"
import TodoItem from "../todo-item/TodoItem"

function TodoList () {

  const {dispatch, state} = useContext(TodoContextProvider)

  const {todo,error} = state

  useEffect (() => { 
    dispatch({
      type: 'load'
    })
    fetch(`${process.env.REACT_APP_PLACEHOLDER_URL}/todos`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'removeLoad'
      })
      return dispatch({
        type: 'set todo',
        data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'removeLoad'
      })
      dispatch({
        type: 'set error',
        errorMessage: err.message
      })
    })
  }, [dispatch])

  return (
    <>

      <ul className="todo-list">

        
        {error && <p>{error}</p>}
        {todo.map(todo => <TodoItem {...todo} key={todo.id}></TodoItem>)}
          
        
      </ul>
    
    </>
  )

}

export default TodoList

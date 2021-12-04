import { useContext } from "react"
import { TodoContextProvider } from "../../context/todo-context/TodoContext"
import CreateTodo from "../create-todo/CreateTodo"
import TodoList from "../todo-list/TodoList"

function TodoForm () {

  const {createdTodo, dispatch, state} = useContext(TodoContextProvider)

  const {todo} = state

  function handleFormSubmit (evt) {

    evt.preventDefault()
    dispatch({
      type: 'create'
    })

    if (createdTodo.current.value.trim()) {
      fetch(`${process.env.REACT_APP_PLACEHOLDER_URL}/todos`, {
        method: 'POST',

        body: JSON.stringify({
          title: createdTodo.current.value,
          userId: 1,
          completed: false
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      })
      
      .then((response) => {
        dispatch({
          type: 'created'
        })
        return response.json()
      })
      .then((data) => {
        dispatch({
          type: 'post todo',
          todo,
          data
        })
      });

      createdTodo.current.value = ''

    }

  }

  return (
    <>
      <form className="todo-form" onSubmit={handleFormSubmit} action="https://echo.htmlacademy.ru" method="post">
        <CreateTodo />
        <TodoList /> 
      </form>
    </>
  )

}

export default TodoForm

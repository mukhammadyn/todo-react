import { createContext, useRef, useReducer } from "react"
import TodoReducer from "../../reducer/todo-reducer/TodoReducer"

export const TodoContextProvider = createContext()

function TodoContext ({children}) {

  const initialState = {
    todo: [],
    load: false,
    done: false,
    create: false,
    check: false,
    error: ''
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const createdTodo = useRef()

  return (
    <TodoContextProvider.Provider value={{
       
       createdTodo,
       state, dispatch

    }} children={children} />
  )

}

export default TodoContext

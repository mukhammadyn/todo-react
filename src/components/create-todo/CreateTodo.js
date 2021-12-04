import { useContext } from "react"
import { TodoContextProvider } from "../../context/todo-context/TodoContext"

function CreateTodo () {

  const {state, createdTodo} = useContext(TodoContextProvider)

  const {create} = state

  return (
    <>

      <div className="create-todo">

        <input ref={createdTodo} className="create-todo__input" type="text" name="new-todo" aria-label="Create todo" placeholder="Create todo" required />
        <button className="create-todo__button" disabled={create} type="submit">{create ? '...' : 'Creat'}</button>

      </div>

    </>
  )

}

export default CreateTodo

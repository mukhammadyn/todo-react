import { useContext } from "react"
import { TodoContextProvider } from "../../context/todo-context/TodoContext"

function TodoItem ({title, id, completed}) {


  const {dispatch, state} = useContext(TodoContextProvider)
  const {todo} = state

  function handleTodoChecked (evt) {

    const currentIndex = todo.findIndex((i) => {
      return i.id === ~~evt.target.value
    })

    const changedItem = todo[currentIndex]
    const changeItem = {
      ...changedItem,
      completed: !changedItem.completed
    }

    dispatch({
      type: 'check',
      todo,
      currentIndex,
      changeItem
    })

    fetch(`${process.env.REACT_APP_PLACEHOLDER_URL}/todos/` + currentIndex, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !changedItem.completed
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
      type: 'check',
      todo,
      currentIndex,
      changeItem
      })
    })
    .catch((err) => {
      console.log(err.message);
    })

  }

  function handleRemoveTodo (evt) {


    const removedTodo = todo.findIndex((i) => {
      return i.id === ~~evt.target.dataset.id
    })


    dispatch({
      type: 'remove todo',
      todo,
      removedTodo
    })


    fetch(`${process.env.REACT_APP_PLACEHOLDER_URL}/todos/` + evt.target.dataset.id, {
      method: 'DELETE'

    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({
        type: 'remove todo',
        todo,
        removedTodo
      })
    })
    .catch((err) => {
      console.log(err.message);
    })

  }
  
  return (
    <>
    
      <li className="todo-item" id={id}>
      
        <input onChange={handleTodoChecked} checked={completed} className="todo-item__checkbox" value={id} type="checkbox" />
        <p className={completed ? "todo-item__name todo-item__name--completed" : "todo-item__name"}>{title}</p>
        
        <div className="todo-item__buttons">
          <button onClick={handleRemoveTodo} className="todo-item__btn todo-item__btn--remove" data-id={id} type="button">Delete todo</button>
        </div>

      </li>
      
    
    </>
  )
    
}
  
export default TodoItem
  
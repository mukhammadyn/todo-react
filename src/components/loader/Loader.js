import { useContext } from "react"
import { TodoContextProvider } from "../../context/todo-context/TodoContext"

function Loader () {

  const {state} = useContext(TodoContextProvider)
  const {load} = state

  return (
    <>
    
      <div className={load ? "loader loader--active" : "loader"}>

        <div className="loader__inner"></div>

      </div>
    
    </>
  )

}

export default Loader

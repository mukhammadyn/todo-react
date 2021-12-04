import Loader from "./components/loader/Loader";
import TodoForm from "./components/todo-form/TodoForm";
import TodoContext from "./context/todo-context/TodoContext";

function App() {
  console.log(process.env.REACT_APP_PLACEHOLDER_URL);
  return (
    <>
    
      <div className="container">

        <TodoContext>
          <Loader />
          <TodoForm>
          </TodoForm>
        </TodoContext>

      </div>

    </>
  );
}

export default App;

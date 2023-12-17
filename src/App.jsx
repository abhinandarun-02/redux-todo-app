import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="py-12 flex flex-col items-center h-screen bg-gray-800">
        <h1 className="text-white text-3xl">Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

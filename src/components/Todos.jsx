// Render all the todos with a delete button for each one

import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

import trash from "../assets/trash.svg";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="m-4 w-11/12 md:w-3/4">
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-white rounded-xl shadow p-6 "
          >
            <h1 className="text-lg font-bold text-gray-800">{todo.text}</h1>
            <button
              className="text-lg font-bold text-red-500"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <img src={trash} className="" alt="delete button" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

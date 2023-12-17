// create a nice looking todo list with tailwindcss

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 m-4 w-11/12 md:w-3/4">
      <form onSubmit={handleTodo}>
        <div className="mb-4">
          <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
            Add Todo
          </label>
          <input
            className="form-input w-full bg-slate-200 rounded-lg  p-2"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button
          className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

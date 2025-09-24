import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-4xl shadow-sm focus:outline-none"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-4xl shadow hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}

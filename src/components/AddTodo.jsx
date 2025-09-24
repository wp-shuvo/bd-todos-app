import { useForm } from "react-hook-form";

export default function AddTodo() {
  const { register, handleSubmit, reset } = useForm();

const onSubmit = async (data) => {
  const postData = {
    title: data.text,       // map 'text' from form to 'title'
    description: "",        // optional
    complited: false,       // default false
  };

  try {
    const res = await fetch("http://localhost:5002/item/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    const result = await res.json();
    console.log("Todo created:", result);
    reset();
  } catch (error) {
    console.error("Error creating todo:", error);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 mb-4 w-full max-w-md"
    >
      <input
        type="text"
        className="flex-1 px-4 py-2 border rounded-4xl shadow-sm focus:outline-none"
        placeholder="Enter todo..."
        {...register("text", { required: true })}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-4xl shadow hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
}

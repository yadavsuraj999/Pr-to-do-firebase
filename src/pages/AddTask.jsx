import { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = useState({
    taskname: "",
    taskdiscription: "",
    priority: "",
    status: "pending",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.taskname.trim() ||
      !input.taskdiscription.trim() ||
      !input.priority.trim()
    ) {
      toast.error("Please fill all the input fields");
      return;
    }

    dispatch(addToDo({ input, uid: user.uid }));

    setInput({
      taskname: "",
      taskdiscription: "",
      priority: "",
      status: "pending",
    });

    navigate("/seetask");
  };

  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 flex items-center text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-10">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
              Create a New Task
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Task Name
                </label>
                <input
                  id="taskname"
                  value={input.taskname}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
                  placeholder="Enter task name..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Description
                </label>
                <textarea
                  id="taskdiscription"
                  value={input.taskdiscription}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 h-32 resize-none"
                  placeholder="Enter task description..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Priority Level
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setInput({ ...input, priority: "high" })}
                    className={`flex-1 py-3 rounded-xl font-semibold shadow-md ${input.priority === "high"
                      ? "bg-red-600 text-white"
                      : "bg-white border-2 border-red-600 border-dashed text-red-600"
                      }`}
                  >
                    High
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput({ ...input, priority: "medium" })}
                    className={`flex-1 py-3 rounded-xl font-semibold shadow-md ${input.priority === "medium"
                      ? "bg-yellow-500 text-white"
                      : "bg-white border-2 border-yellow-500 border-dashed text-yellow-500"
                      }`}
                  >
                    Medium
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput({ ...input, priority: "low" })}
                    className={`flex-1 py-3 rounded-xl font-semibold shadow-md ${input.priority === "low"
                      ? "bg-green-600 text-white"
                      : "bg-white border-2 border-green-600 border-dashed text-green-600"
                      }`}
                  >
                    Low
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-900 hover:scale-95 text-white font-bold text-lg rounded-xl shadow-md  transition"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTask;

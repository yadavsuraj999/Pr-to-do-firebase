import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { editTodo } from "../features/todo/todoSlice";
import Header from "./Header";
import { toast } from "react-toastify";

const EditTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  const taskToEdit = location.state?.task;

  const [input, setInput] = useState({
    taskname: "",
    taskdiscription: "",
    priority: "",
    status: "pending",
  });

  useEffect(() => {
    if (taskToEdit) {
      setInput({
        taskname: taskToEdit.taskname,
        taskdiscription: taskToEdit.taskdiscription,
        priority: taskToEdit.priority,
        status: taskToEdit.status || "pending",
      });
    }
  }, [taskToEdit]);

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
      toast.error("Please fill all fields");
      return;
    }

    dispatch(
      editTodo({
        uid: user.uid,
        id: taskToEdit.id,
        updatedTask: input,
      })
    );

    navigate("/seetask");
  };

  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 flex items-center text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white border-2 border-black border-dashed rounded-3xl shadow-lg p-10">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
              Edit Task
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
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Status
                </label>
                <select
                  id="status"
                  value={input.status}
                  onChange={(e) =>
                    setInput({ ...input, status: e.target.value })
                  }
                  className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
                >
                  <option value="pending">Pending</option>
                  <option value="complete">Complete</option>
                </select>
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
                      : "bg-red-600 text-white opacity-70"
                      }`}
                  >
                    High
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput({ ...input, priority: "medium" })}
                    className={`flex-1 py-3 rounded-xl font-semibold shadow-md ${input.priority === "medium"
                      ? "bg-yellow-500 text-white"
                      : "bg-yellow-500 text-white opacity-70"
                      }`}
                  >
                    Medium
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput({ ...input, priority: "low" })}
                    className={`flex-1 py-3 rounded-xl font-semibold shadow-md ${input.priority === "low"
                      ? "bg-green-600 text-white"
                      : "bg-green-600 text-white opacity-70"
                      }`}
                  >
                    Low
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-md opacity-70 hover:opacity-100 transition"
              >
                Update Task
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditTask;

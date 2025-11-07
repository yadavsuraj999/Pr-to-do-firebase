import { useEffect, useState } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, featchTodo, editTodo } from '../features/todo/todoSlice';
import { List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SeeTasks = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { todoArr } = useSelector((state) => state.todo);

  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (user?.uid) {
      dispatch(featchTodo(user.uid));
    }
  }, [dispatch, user]);

  const filteredTasks = todoArr.filter(task => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  const handleComplete = (task) => {
    dispatch(editTodo({
      uid: user.uid,
      id: task.id,
      updatedTask: { ...task, status: "complete" }
    }));
  };


  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Your Tasks
          </h2>

          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            >
              All Task
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded ${filter === "pending" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("complete")}
              className={`px-4 py-2 rounded ${filter === "complete" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            >
              Complete
            </button>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="text-center py-20 opacity-80">
              <div className="bg-white border border-gray-200 rounded-2xl p-12 max-w-md mx-auto shadow">
                <List className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  No tasks available. Add one to get started.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-xl font-bold text-gray-900 ${task.status === "complete" ? "line-through text-gray-400" : ""
                        }`}
                    >
                      {task.taskname}
                    </h3>
                    <span
                      className={`text-white text-xs font-bold px-3 py-1 rounded-full ${task.priority === 'high'
                        ? 'bg-red-500'
                        : task.priority === 'medium'
                          ? 'bg-yellow-400'
                          : 'bg-green-500'
                        }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <p
                    className={`text-gray-600 mb-6 min-h-[60px] ${task.status === "complete" ? "line-through text-gray-400" : ""
                      }`}
                  >
                    {task.taskdiscription}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      className="flex-1 bg-blue-600 hover:bg-blue-900 hover:scale-95 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                      onClick={() => navigate("/edittask", { state: { task } })}
                    >
                      Edit
                    </button>
                    <button
                      className="flex-1 bg-red-600 hover:bg-red-900 hover:scale-95 text-white py-2 rounded-lg text-sm font-medium  transition-colors"
                      onClick={() => dispatch(deleteTodo({ uid: user.uid, deleteTask: task.id }))}
                    >
                      Delete
                    </button>
                    {task.status !== "complete" && (
                      <button
                        className="flex-1 bg-green-600 hover:bg-green-900 hover:scale-95 text-white py-2 rounded-lg text-sm font-medium  transition-colors"
                        onClick={() => handleComplete(task)}
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SeeTasks;

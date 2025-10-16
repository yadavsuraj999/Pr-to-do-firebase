import Header from "./Header";

const AddTask = () => {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 flex items-center text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-10 transition-all duration-300 hover:shadow-xl">

            <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
              Create a New Task
            </h2>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Task Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="Enter task name..."
                disabled
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
              <textarea
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all h-32 resize-none"
                placeholder="Enter task description..."
                disabled
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Priority Level</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl font-semibold bg-red-600 text-white shadow-md cursor-not-allowed opacity-70"
                >
                  High
                </button>
                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl font-semibold bg-yellow-500 text-white shadow-md cursor-not-allowed opacity-70"
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="flex-1 py-3 rounded-xl font-semibold bg-green-600 text-white shadow-md cursor-not-allowed opacity-70"
                >
                  Low
                </button>
              </div>
            </div>

            <button
              className="w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-md cursor-not-allowed opacity-70"
            >
              Add Task
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTask;

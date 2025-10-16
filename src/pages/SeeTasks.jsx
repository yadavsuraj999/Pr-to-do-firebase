import { List } from 'lucide-react';
import Header from './Header';

const SeeTasks = () => {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-50 py-16 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Your Tasks
          </h2>

          {/* Example Task Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Task Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Complete UI Design</h3>
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  High
                </span>
              </div>
              <p className="text-gray-600 mb-6 min-h-[60px]">
                Finish the new dashboard mockups with improved user flow and visuals.
              </p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Delete
                </button>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Team Meeting Notes</h3>
                <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Medium
                </span>
              </div>
              <p className="text-gray-600 mb-6 min-h-[60px]">
                Summarize feedback and action items from the weekly sync-up session.
              </p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Delete
                </button>
              </div>
            </div>

            {/* Task Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Code Review</h3>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Low
                </span>
              </div>
              <p className="text-gray-600 mb-6 min-h-[60px]">
                Review pull requests and check for code consistency and readability.
              </p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  Delete
                </button>
              </div>
            </div>

          </div>

          {/* If no tasks */}
          <div className="text-center py-20 opacity-80">
            <div className="bg-white border border-gray-200 rounded-2xl p-12 max-w-md mx-auto shadow">
              <List className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No tasks available. Add one to get started.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeeTasks;

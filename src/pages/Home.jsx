import { Target, TrendingUp, Zap } from "lucide-react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="container mx-auto px-8 py-16">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to TaskFlow
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your intelligent task management system for professional productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Prioritization</h3>
              <p className="text-gray-600 text-sm">
                Organize your tasks with clear priority levels. Focus on what matters most.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow transition-colors">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Management</h3>
              <p className="text-gray-600 text-sm">
                Add, edit, and track tasks efficiently with a clean, intuitive interface.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow transition-colors">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">
                Monitor your productivity journey with clear visibility into completed and pending tasks.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow  transition-colors">
            <h2 className="text-3xl font-bold mb-4">Ready to boost your productivity?</h2>
            <p className="text-gray-600 mb-6">
              Start managing your tasks efficiently today.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              onClick={() => navigate("/addtask")}
            >
              Create Your First Task
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;

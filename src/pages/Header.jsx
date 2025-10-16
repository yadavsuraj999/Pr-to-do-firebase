import { CheckSquare, Plus, List, LogOut, Zap } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleLogOut } from '../features/auth/authSlice';

const Header = ({ activeTab }) => {

  const dispatch = useDispatch()



  return (
    <header className="bg-white border-b border-gray-300 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CheckSquare className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-xl font-semibold text-gray-800 tracking-wide">TaskFlow</span>
        </div>

        <nav className="flex items-center space-x-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'Home'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-blue-200 hover:text-blue-800'
              }`}
          >
            <Zap className="w-4 h-4 text-indigo-600" />
            <span>Home</span>
          </Link>

          <Link
            to="/seetask"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'See Tasks'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-green-200 hover:text-green-800'
              }`}
          >
            <List className="w-4 h-4 text-green-600" />
            <span>See Tasks</span>
          </Link>

          <Link
            to="/addtask"
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'Add Task'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-purple-200 hover:text-purple-800'
              }`}
          >
            <Plus className="w-4 h-4 text-purple-600" />
            <span>Add Task</span>
          </Link>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${activeTab === 'Logout'
              ? 'bg-red-600 text-white'
              : 'text-gray-600 hover:bg-red-200 hover:text-red-800'
              }`}
            onClick={() => dispatch(handleLogOut())}
          >
            <LogOut className="w-4 h-4 text-red-600" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

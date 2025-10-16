import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import SeeTasks from './pages/SeeTasks'
import AddTask from './pages/AddTask'
import { ToastContainer } from 'react-toastify'
import ProtectedRout from './components/ProtectedRout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRout Component={Home} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<Signup />} />
                <Route path='/addtask' element={<ProtectedRout Component={AddTask} />} />
                <Route path='/seetask' element={<ProtectedRout Component={SeeTasks} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
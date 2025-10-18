import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { todostore } from './App/todostore'





createRoot(document.getElementById('root')).render(
  <Provider store={todostore}>
    <App />
  </Provider>
)
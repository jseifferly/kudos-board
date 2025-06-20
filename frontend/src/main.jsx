import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import BoardDetails from './components/BoardDetails.jsx'
import { DarkModeProvider } from './components/DarkModeProvider.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App className='dark-mode'/>
  },
  {
    path: '/board/:id',
    element: <BoardDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <RouterProvider router={routes} />
  </DarkModeProvider>
)

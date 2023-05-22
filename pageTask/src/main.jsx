import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Task from './components/Task/Task.jsx'

const router = createBrowserRouter ([
  {path : '/' , element: <Home/>},
  {path : '/contact' , element: <Contact/>},
  {path : '/task' , element: <Task/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
      
  </React.StrictMode>
)

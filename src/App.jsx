import React from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Footer from './components/footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LiveExams from './components/Examination/LiveExams/LiveExams'
import Exams from './components/Examination/LiveExams/Exams'
import MockTest from './components/Examination/mock/MockTest'
import Instructions from './components/Examination/LiveExams/instructions'
import Result from './components/Result/Result'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path:"/liveexams",
            element:<LiveExams/>
          },
          {
            path:"/exams",
            element:<Exams/>
          },
          {
            path:"/mocktest",
            element:<MockTest/>
          },
          {
            path:"/instructions",
            element:<Instructions/>
          },
          {
            path:"/footer",
            element:<Footer/>
          },
          {
            path:"/result",
            element:<Result/>
          }
      ]
    },
    
  ])
  return <RouterProvider router={route}>
  </RouterProvider>
}

export default App

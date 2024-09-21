import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import LandingPage from './pages/LandingPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
      path: "/",
      element: <LandingPage/>
  }
])

function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App

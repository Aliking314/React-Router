import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout/Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'
import Contact from './components/Contact/Contact.jsx'
import User from './components/Prams/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'User/:userid',
      element:<User/>
    },{
      path:'github',
      loader:githubInfoLoader,
      element:<Github/>
    }
  ]
 },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

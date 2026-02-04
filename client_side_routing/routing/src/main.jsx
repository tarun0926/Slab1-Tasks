import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Hero from './component/Hero.jsx'
import Feature from "./component/Feature.jsx"
import Blog from './component/Blog.jsx'
import About from './component/About.jsx'
import Team from './component/Team.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element: <Hero/>
      },
      {
        path: "feature",
        element: <Feature/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "team",
        element: <Team/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

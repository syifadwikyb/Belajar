import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginMain from './auth/login/LoginMain'
import RegisterMain from './auth/register/RegisterMain'
import ErrorPage from './404/ErrorPage'
import ProductMain from './products/ProductMain'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Coba</div>,
    errorElement: <ErrorPage/>
  },

  {
    path: "/login",
    element: <LoginMain/>
  },

  {
    path: "/register",
    element: <RegisterMain/>,
  },

  {
    path: "/products",
    element: <ProductMain/>,
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

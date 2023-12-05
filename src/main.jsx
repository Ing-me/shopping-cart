import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home'
import App from './App/App'
import Login from './Login/Login'
import Shop from './Shop/Shop'
import ErrorPage from './ErrorPage/ErrorPage'
import ProductLists from './ProductList/ProductList'

import './index.css'
import Cart from './Cart/Cart'
import Details from './Details/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "shop",
        element: <ProductLists />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "product-list",
        element: <ProductLists />
      },
      {
        path: "details/:id",
        element: <Details />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

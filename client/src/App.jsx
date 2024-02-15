import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Layout from "./components/Layout"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

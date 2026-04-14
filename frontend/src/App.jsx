import './App.css'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmployee from './components/CreateEmployee'
import ListOfEmployee from './components/ListOfEmployee'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'
import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "CreateEmployee",
          element: <CreateEmployee />
        },
        {
          path: "ListOfEmployee",
          element: <ListOfEmployee />
        },
        {
          path: "Assignment1",
          element: <Assignment1 />
        },
        {
          path: "Assignment2",
          element: <Assignment2 />
        },
        {
          path: "employee",
          element: <Employee />
        },
        {
          path: "edit-emp",
          element: <EditEmployee />
        },
        {
          path: "Assignment3",
          element: <Assignment3 />
        },
        {
          path: "*",
          element: <Navigate to="/" replace />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
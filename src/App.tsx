import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Dashboard } from './Components/Companies/Dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App

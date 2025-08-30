import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  return (
    <div>
      <ToastContainer />
      {
        token === '' ? <Login setToken={setToken} />
          :
          <>
            <Navbar setToken={setToken} />
            <Sidebar />
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </>
      }
    </div>
  )
}

export default App

import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 flex h-screen items-center justify-center' >
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <div><Toaster /></div>
    </div>
  )
}

export default App

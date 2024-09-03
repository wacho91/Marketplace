import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/AdminLayout"

function App() {
  

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*Common Component*/}
      <h1>Heder Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />}/>
          <Route path="register" element={<AuthRegister />}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App

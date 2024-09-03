import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"

function App() {
  

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*Common Component*/}
      <h2>Heder Component</h2>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/login"/>
          <Route path="/register"/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

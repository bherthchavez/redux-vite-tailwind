
import UserList from "./features/users/UserList"
import { Routes, Route } from "react-router-dom"
import AddUser from "./features/users/AddUser"
import EditUser from "./features/users/EditUser"

function App() {

  return (
    <>

      <div className="h-screen bg-slate-800">
        <div className="container mx-auto px-10 max-w-3xl pt-32 text-gray-100">

          <h1 className="mb-10 text-xl font-bold text-center">Crud with Vite and Redux</h1>

          <Routes>
            <Route path="/" element={ <UserList />} />
            <Route path="/add-user" element={ <AddUser />} />
            <Route path="/edit-user/:id" element={ <EditUser />} />
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App

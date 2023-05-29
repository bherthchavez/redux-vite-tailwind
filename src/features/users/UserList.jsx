import { MdOutlineModeEdit, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import  {useSelector, useDispatch} from 'react-redux'
import { deleteUser } from "./userSlice";

const UserList = () => {
  const users = useSelector(store=> store.users)
  const dispatch = useDispatch()



  const renderCard = () => users.map(user => (
    <div key={user.id} className="bg-slate-950 p-5 flex item-center justify-between rounded-lg">
      <div>
        <h3 className="font-semibold text-lg ">{user.name}</h3>
        <span className="font-normal text-gray-400">{user.email}</span>
      </div>
      <div className="flex items-center gap-3 text-xl text-gray-400">
        <Link to={`/edit-user/${user.id}`}>
          <MdOutlineModeEdit className="cursor-pointer hover:text-gray-200 hover:text-2xl" />
        </Link>
        <MdDeleteForever onClick={()=> dispatch(deleteUser({id: user.id}))} className="cursor-pointer hover:text-gray-200 hover:text-2xl" />
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-user">
        <Button> Add User </Button>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-100 font-semibold">No Users</p>}
      </div>
    </div>
  )
}

export default UserList
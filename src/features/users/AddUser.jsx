import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addUser } from "./userSlice"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"


const AddUser = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [values, setValues] = useState({
    id: uuidv4(),
    name: '',
    email: ''
  })

  const handdleAddUser = () => {
    setValues({ name: '', email: '' })
    dispatch(addUser(values))
    console.log(values)
    navigate('/')
  }

  return (
    <div className="px-14">
      <TextField
        label="Name"
        inputProps={{ type: 'text', placeholder: 'Mark Go' }}
        value={values.name}
        onChange={e => setValues({ ...values, name: e.target.value })}
      />
      <TextField
        label="Email"
        inputProps={{ type: 'email', placeholder: 'mark@mail.com' }}
        value={values.email}
        onChange={e => setValues({ ...values, email: e.target.value })}

      />
      <div className="flex gap-5">
        <Button onClick={handdleAddUser}> Submit </Button>
        <Button onClick={() => navigate('/')}> Cancel </Button>
      </div>
    </div>
  )
}

export default AddUser
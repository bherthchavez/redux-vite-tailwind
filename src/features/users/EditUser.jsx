import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"


const EditUser = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const users = useSelector(store => store.users)
  const findUser = users.filter(user => user.id === params.id)
  const { id, name, email } = findUser[0]

  const [values, setValues] = useState({
    id: id,
    name: name,
    email: email
  })

  const handdleEditUser = () => {
    setValues({ name: '', email: '' })
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }))
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
        <Button onClick={handdleEditUser}> Submit </Button>
        <Button onClick={() => navigate('/')}> Cancel </Button>
      </div>
    </div>
  )
}

export default EditUser
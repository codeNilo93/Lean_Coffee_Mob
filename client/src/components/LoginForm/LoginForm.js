import { useState } from 'react'

const LoginForm = ({ onAddUser }) => {
  const [username, setUsername] = useState('')

  const changeUserNameHandler = event => {
    setUsername(event.target.value)
  }

  return (
    <form onSubmit={() => onAddUser(username)}>
      <label htmlFor="username">Your name</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Your name"
        onChange={changeUserNameHandler}
      />
    </form>
  )
}

export default LoginForm

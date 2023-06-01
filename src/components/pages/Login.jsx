import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MyInput from './../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
  }
  return (
    <div>
      <h1>Log in page</h1>
      <form>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />

        <MyButton onClick={login}>Log in</MyButton>
      </form>
    </div>
  )
}

export default Login

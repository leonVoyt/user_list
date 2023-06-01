import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from './../button/MyButton'
import { AuthContext } from '../../../context/AuthContext'

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const UnLogin = (event) => {
    event.preventDefault()
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }
  return (
    <div className="navbar">
      <div className="exit">
        <MyButton onClick={UnLogin}>Exit</MyButton>
      </div>
      <div className="navbar__links">
        <Link to="/about">
          <MyButton>About</MyButton>
        </Link>
        <Link to="/Posts">
          <MyButton>Posts</MyButton>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

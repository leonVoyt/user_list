import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { BrowserRouter, Navigate } from 'react-router-dom'

import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context/AuthContext'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth: setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

import { Route, Routes, Navigate } from 'react-router-dom'

import { privateRoutes, pablicRoutes } from '../route/route'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import MyLoader from './UI/loader/MyLoader'

function AppRouter() {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext)
  // console.log(isAuth)
  if (isLoading) {
    return <MyLoader />
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          exact={route.exact}
          key={Date.now()}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {pablicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          exact={route.exact}
          key={Date.now()}
          render={() => <Navigate to="/searchDashboard" />}
        />
      ))}
    </Routes>
  )
}

export default AppRouter

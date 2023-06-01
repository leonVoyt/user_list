import { Navigate } from 'react-router-dom'
import About from '../components/pages/About'
import Login from '../components/pages/Login'
import PostIdPages from '../components/pages/PostIdPades'
import PostPage from '../components/pages/PostPage'

export const privateRoutes = [
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <PostPage />, exact: true },
  { path: '/posts/:id', element: <PostIdPages />, exact: true },
  { path: '/', element: <PostPage />, exact: true },
  { path: '*', element: <Navigate to="/posts" />, exact: true },
]

export const pablicRoutes = [
  { path: '/login', element: <Login />, exact: true },
  { path: '*', element: <Navigate to="/login" />, exact: true },
]

/* <Route path="/about" element={<About />} />
<Route exact path="/posts" element={<PostPage />} />
<Route exact path="/posts/:id" element={<PostIdPages />} />
<Route exact path="/" element={<PostPage />} /> */

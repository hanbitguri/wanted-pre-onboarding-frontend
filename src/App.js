import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'

function App() {
  const token = localStorage.getItem('access_token')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    token && setIsLogin(true)
  }, [])

  return (
    <article className="global-wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={token ? <TodoList /> : <Navigate to={'/signin'} replace={true} />} />
      </Routes>
    </article>
  )
}

export default App

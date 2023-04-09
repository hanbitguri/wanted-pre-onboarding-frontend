import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'

function App() {
  const [token, setToken] = useState(localStorage.getItem('access_token'))

  useEffect(() => {
    const savedToken = localStorage.getItem('access_token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  return (
    <article className="global-wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setToken={setToken} />} />
        <Route path="/todo" element={token ? <TodoList /> : <Navigate to={'/signin'} />} />
      </Routes>
    </article>
  )
}

export default App

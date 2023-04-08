import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import TodoList from './pages/TodoList'

function App() {
    const [isLogin, setIsLogin] = useState(false)
    console.log(isLogin)
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsLogin(true)
        }
        setIsLogin(false)
    }, [])

    return (
        <article className="global-wrapper">
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/todo" element={isLogin ? <TodoList /> : <SignIn />}></Route>
            </Routes>
        </article>
    )
}

export default App

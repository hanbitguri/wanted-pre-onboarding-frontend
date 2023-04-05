import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignUp from './pages/SignUp'

function App() {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <article className="global-wrapper">
            <Routes>
                <Route path="/" element={isLogin || <MainPage />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signin" element={<div>로그인창</div>}></Route>
                <Route path="/todo" element={<div>로그인창</div>}></Route>
            </Routes>
        </article>
    )
}

export default App

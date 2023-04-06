import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <article className="global-wrapper">
            <Routes>
                <Route path="/" element={isLogin || <MainPage />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/todo" element={<div>투두</div>}></Route>
            </Routes>
        </article>
    )
}

export default App

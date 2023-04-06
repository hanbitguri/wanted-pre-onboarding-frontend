import '../styles/pages/main-page.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function MainPage() {
    return (
        <>
            <div className="main-auth">
                <Link to={'/signin'}>
                    <Button className="main-signin" content="로그인" />
                </Link>
                <Link to={'/signup'}>
                    <Button className="main-signup" content="회원가입" />
                </Link>
            </div>
        </>
    )
}

export default MainPage

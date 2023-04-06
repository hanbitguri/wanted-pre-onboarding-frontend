import '../styles/pages/signin-page.css'
import Button from '../components/Button'
import Input from '../components/Input'

function Signin() {
    return (
        <form className="signin-form">
            <h2 className="signin-title">로그인</h2>
            <div className="signin-main">
                <Input className="signin-input-id" type="text" data-testid="email-input" />
                <Input className="signin-input-pw" type="password" data-testid="password-input" />
                <Button className="signin-button" type="submit" content="로그인 하기" dti="signin-button"></Button>
            </div>
        </form>
    )
}

export default Signin

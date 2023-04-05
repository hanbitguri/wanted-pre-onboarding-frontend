import Button from '../components/Button'
import Input from '../components/Input'

import '../styles/signup-page.css'

function SignUp() {
    return (
        <>
            <form className="signup-form">
                <h2 className="signup-title">회원가입</h2>
                <div className="signup-main">
                    <Input className="signup-input-id" type="text" data-testid="email-input" />
                    <Input className="signup-input-pw" type="password" data-testid="password-input" />
                    <Button className="signup-button" type="submit" content="가입하기" dti="signup-button"></Button>
                </div>
            </form>
        </>
    )
}

export default SignUp

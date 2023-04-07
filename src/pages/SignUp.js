import '../styles/pages/signup-page.css'
import Button from '../components/Button'
import Input from '../components/Input'
import { useInput } from '../hooks/useInput'

function SignUp() {
    const [isValid, emailChangeHandler, passwordChangeHandler, vaildHandler, onSubmitHandler] = useInput('', '')

    return (
        <form className="signup-form" onSubmit={onSubmitHandler}>
            <h2 className="signup-title">회원가입</h2>
            <div className="signup-main">
                <Input
                    className="signup-input-id"
                    type="text"
                    dti="email-input"
                    onChangeHandler={emailChangeHandler}
                    placeholder="이메일을 입력해주세요."
                />
                <Input
                    className="signup-input-pw"
                    type="password"
                    dti="password-input"
                    onChangeHandler={passwordChangeHandler}
                    onBlurHandler={vaildHandler}
                    placeholder="비밀번호를 입력해주세요."
                />
                <Button
                    className="signup-button"
                    type="submit"
                    content="가입하기"
                    dti="signup-button"
                    disabled={!isValid}
                ></Button>
            </div>
        </form>
    )
}

export default SignUp

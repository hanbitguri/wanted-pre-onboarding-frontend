import '../styles/pages/signup-page.css'
import '../styles/components/button.css'
import '../styles/components/input.css'
import { useInput } from '../hooks/useInput'

function SignUp() {
    const { isValid, valueChangeHandler, valueChangeHandler2, vaildHandler, onSignUpHandler } = useInput('', '')

    return (
        <form className="signup-form" onSubmit={onSignUpHandler}>
            <h2 className="signup-title">회원가입</h2>
            <div className="signup-main">
                <input
                    className="signup-input-id"
                    type="text"
                    data-test-id="email-input"
                    onChangeHandler={valueChangeHandler}
                    placeholder="이메일을 입력해주세요."
                />
                <input
                    className="signup-input-pw"
                    type="password"
                    data-test-id="password-input"
                    onChangeHandler={valueChangeHandler2}
                    onBlurHandler={vaildHandler}
                    placeholder="비밀번호를 입력해주세요."
                />
                <button className="signup-button" type="submit" data-test-id="signup-button" disabled={!isValid}>
                    가입하기
                </button>
            </div>
        </form>
    )
}

export default SignUp

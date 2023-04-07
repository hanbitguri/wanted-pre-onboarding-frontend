import '../styles/pages/signin-page.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { useInput } from '../hooks/useInput'
//localStorage.setItem(Object.keys(pw),Object.values(pw))
//cuen@hanbitguri.com
//123456789

function Signin() {
    const { isValid, emailChangeHandler, passwordChangeHandler, vaildHandler, onSigninHandler } = useInput('', '')

    return (
        <form className="signin-form" onSubmit={onSigninHandler}>
            <h2 className="signin-title">로그인</h2>
            <div className="signin-main">
                <Input
                    className="signin-input-id"
                    type="text"
                    dti="email-input"
                    placeholder="이메일을 입력해주세요."
                    onChangeHandler={emailChangeHandler}
                />
                <Input
                    className="signin-input-pw"
                    type="password"
                    dti="password-input"
                    placeholder="비밀번호를 입력해주세요."
                    onChangeHandler={passwordChangeHandler}
                    onBlurHandler={vaildHandler}
                />
                <Button
                    className="signin-button"
                    type="submit"
                    content="로그인 하기"
                    dti="signin-button"
                    disabled={!isValid}
                ></Button>
            </div>

            <Link to={'/signup'}>회원가입</Link>
        </form>
    )
}

export default Signin

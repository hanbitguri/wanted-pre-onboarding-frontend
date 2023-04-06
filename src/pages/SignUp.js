import '../styles/pages/signup-page.css'
import Button from '../components/Button'
import Input from '../components/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()

    const [isValid, setIsValid] = useState(false)

    const [enteredId, setEnteredId] = useState('')
    const [enteredPw, setEnteredPw] = useState('')

    const idRegex = /.*@.*/gi
    const pwRegex = /.{8,}/gi

    const enteredIdisValid = (string) => idRegex.test(string)
    const enteredPwisValid = (string) => pwRegex.test(string)
    const onChangeHandler = (setState) => {
        return (e) => setState(e.target.value)
    }
    const vaildHandler = () => {
        if (enteredIdisValid(enteredId) && enteredPwisValid(enteredPw)) {
            setIsValid(true)
            return
        }
        setIsValid(false)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: enteredId,
                password: enteredPw,
            }),
        }).then((resp) => {
            if (resp.ok) {
                alert('회원가입이 정상적으로 완료되었습니다 !')
                navigate('/signin')
            }
        })
    }

    return (
        <form className="signup-form" onSubmit={onSubmitHandler}>
            <h2 className="signup-title">회원가입</h2>
            <div className="signup-main">
                <Input
                    className="signup-input-id"
                    type="text"
                    data-testid="email-input"
                    onChangeHandler={onChangeHandler(setEnteredId)}
                    placeholder="이메일을 입력해주세요."
                />
                <Input
                    className="signup-input-pw"
                    type="password"
                    data-testid="password-input"
                    onChangeHandler={onChangeHandler(setEnteredPw)}
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

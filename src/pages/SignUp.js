import '../styles/pages/signup-page.css'
import Button from '../components/Button'
import Input from '../components/Input'
import { useState } from 'react'

function SignUp() {
    const [isValid, setIsValid] = useState(false)

    const [enteredId, setEnteredId] = useState('')
    const [enteredPw, setEnteredPw] = useState('')

    const idRegex = /@{1}/g
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

    return (
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="signup-title">회원가입</h2>
            <div className="signup-main">
                <Input
                    className="signup-input-id"
                    type="text"
                    data-testid="email-input"
                    onChangeHandler={onChangeHandler(setEnteredId)}
                />
                <Input
                    className="signup-input-pw"
                    type="password"
                    data-testid="password-input"
                    onChangeHandler={onChangeHandler(setEnteredPw)}
                    onBlurHandler={vaildHandler}
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

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useInput = (initEmail, initPassword) => {
    const navigate = useNavigate()
    const [isValid, setIsValid] = useState(false)

    const [enteredEmail, setEnteredEmail] = useState(initEmail)
    const [enteredPassword, setEnteredPassword] = useState(initPassword)

    const idRegex = /.*@.*/gi
    const pwRegex = /.{8,}/gi

    const enteredIdisValid = (string) => idRegex.test(string)
    const enteredPwisValid = (string) => pwRegex.test(string)

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
    }

    const vaildHandler = () => {
        if (enteredIdisValid(enteredEmail) && enteredPwisValid(enteredPassword)) {
            setIsValid(true)
            return
        }
        setIsValid(false)
    }
    const onSignUpHandler = (e) => {
        e.preventDefault()
        fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
            }),
        }).then((resp) => {
            if (resp.ok) {
                alert('회원가입이 정상적으로 완료되었습니다 !')
                navigate('/signin')
            }
        })
    }
    const onSigninHandler = (e) => {
        e.preventDefault()
        fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
            }),
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json()
                }
            })
            .then((key) => {
                localStorage.setItem(Object.keys(key), Object.values(key))
                navigate('/todo')
            })
    }

    return { isValid, emailChangeHandler, passwordChangeHandler, vaildHandler, onSignUpHandler, onSigninHandler }
}

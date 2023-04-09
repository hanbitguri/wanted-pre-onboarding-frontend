import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TODO_URL } from '../utils/constant'

export const useInput = (initValue, initValue2) => {
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(false)

  const [enteredValue, setEnteredValue] = useState(initValue)
  const [enteredValue2, setEnteredValue2] = useState(initValue2)

  const idRegex = /.*@.*/gi
  const pwRegex = /.{8,}/gi

  const enteredIdisValid = (string) => idRegex.test(string)
  const enteredPwisValid = (string) => pwRegex.test(string)

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value)
  }
  const valueChangeHandler2 = (e) => {
    setEnteredValue2(e.target.value)
  }

  const vaildHandler = () => {
    if (enteredIdisValid(enteredValue) && enteredPwisValid(enteredValue2)) {
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
        email: enteredValue,
        password: enteredValue2,
      }),
    }).then((resp) => {
      if (resp.ok) {
        alert('회원가입이 정상적으로 완료되었습니다 !')
        navigate('/signin')
      }
    })
  }
  const onSigninHandler = (setToken) => {
    fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredValue,
        password: enteredValue2,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then((key) => {
        const token = key.access_token
        localStorage.setItem('access_token', token)
        setToken(token)
      })
      .then(() => {
        navigate('/todo')
      })
  }

  return {
    isValid,
    valueChangeHandler,
    valueChangeHandler2,
    vaildHandler,
    onSignUpHandler,
    onSigninHandler,
  }
}

import '../styles/pages/signin-page.css'
import '../styles/components/button.css'
import '../styles/components/input.css'
import { Link } from 'react-router-dom'
import { useInput } from '../hooks/useInput'

function Signin({ setToken }) {
  const { isValid, valueChangeHandler, valueChangeHandler2, vaildHandler, onSigninHandler } = useInput('', '')

  return (
    <form
      className="signin-form"
      onSubmit={(e) => {
        e.preventDefault()
        onSigninHandler(setToken)
      }}
    >
      <h2 className="signin-title">로그인</h2>
      <div className="signin-main">
        <input
          className="signin-input-id"
          type="text"
          data-test-id="email-input"
          placeholder="이메일을 입력해주세요."
          onChange={valueChangeHandler}
        />
        <input
          className="signin-input-pw"
          type="password"
          data-test-id="password-input"
          placeholder="비밀번호를 입력해주세요."
          onChange={valueChangeHandler2}
          onBlur={vaildHandler}
        />
        <button className="signin-button" type="submit" data-test-id="signin-button" disabled={!isValid}>
          로그인하기
        </button>
      </div>

      <Link to={'/signup'}>회원가입</Link>
    </form>
  )
}

export default Signin

import '../styles/pages/todo-list-page.css'
import '../styles/components/button.css'
import '../styles/components/input.css'
import TodoItem from '../components/TodoItem'
import { TODO_URL } from '../utils/constant'
import { useEffect, useState } from 'react'

function TodoList() {
  const [enteredValue, setEnteredValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const getTodo = () => {
    fetch(TODO_URL(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList([...data])
      })
  }

  useEffect(getTodo, [])

  return (
    <div>
      <form
        className="add-todo-form"
        onSubmit={(e) => {
          e.preventDefault()
          fetch(TODO_URL(), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: JSON.stringify({
              todo: enteredValue,
            }),
          }).then((resp) => {
            if (resp.ok) {
              getTodo()
              setEnteredValue('')
            }
          })
        }}
      >
        <input
          placeholder="할-일을 추가하세요"
          className="add-todo-input"
          type="text"
          data-test-id="new-todo-input"
          value={enteredValue}
          onChange={(e) => {
            setEnteredValue(e.target.value)
          }}
        ></input>
        <button className="add-todo-button" data-test-id="new-todo-add-button">
          추가
        </button>
      </form>
      <ol className="todo-list">
        {todoList.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} getTodo={getTodo} />
        })}
      </ol>
    </div>
  )
}

export default TodoList

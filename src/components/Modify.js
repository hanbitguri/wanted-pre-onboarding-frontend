import React, { useState } from 'react'
import { TODO_URL } from '../utils/constant'
function Modify({ setModify, todo, getTodo }) {
    const [enteredValue, setEnteredValue] = useState('')
    return (
        <form>
            <input
                type="text"
                className="todo-modify-input"
                onChange={(e) => {
                    setEnteredValue(e.target.value)
                }}
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    fetch(TODO_URL(todo.id), {
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            todo: enteredValue,
                            isCompleted: todo.isCompleted,
                        }),
                    }).then((resp) => {
                        if (resp.ok) {
                            setModify(false)
                            getTodo()
                        }
                    })
                }}
            >
                제출
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    setModify(false)
                }}
            >
                취소
            </button>
        </form>
    )
}

export default Modify

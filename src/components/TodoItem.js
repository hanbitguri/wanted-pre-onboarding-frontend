import React, { useState } from 'react'
import { TODO_URL } from '../utils/constant'
import '../styles/components/todo-item.css'
import Modify from './Modify'
function TodoItem({ todo, getTodo }) {
    const [modify, setModify] = useState(false)

    return (
        <li className="todo-item">
            <label>
                <input
                    type="checkbox"
                    defaultChecked={todo.isCompleted}
                    onChange={() => {
                        fetch(TODO_URL(todo.id), {
                            method: 'PUT',
                            headers: {
                                Authorization: ` Bearer ${localStorage.getItem('access_token')}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                todo: todo.todo,
                                isCompleted: !todo.isCompleted,
                            }),
                        })
                    }}
                />
                {modify ? (
                    <Modify setModify={setModify} todo={todo} getTodo={getTodo}></Modify>
                ) : (
                    <div>
                        <span>{todo.todo}</span>
                        <button
                            className="todo-modify-button"
                            onClick={(e) => {
                                e.preventDefault()
                                setModify(true)
                            }}
                        >
                            수정
                        </button>
                        <button
                            className="todo-remove-button"
                            onClick={(e) => {
                                e.preventDefault()
                                fetch(TODO_URL(todo.id), {
                                    method: 'DELETE',
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                                    },
                                }).then((resp) => {
                                    if (resp.ok) {
                                        getTodo()
                                    }
                                })
                            }}
                        >
                            삭제
                        </button>
                    </div>
                )}
            </label>
        </li>
    )
}

export default TodoItem

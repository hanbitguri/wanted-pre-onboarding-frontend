import React from 'react'
import '../styles/components/input.css'

export default function Input(props) {
    return (
        <input
            className={props.className}
            type={props.type}
            data-test-id={props.dti}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
        />
    )
}

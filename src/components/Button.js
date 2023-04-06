import '../styles/components/button.css'

function Button(props) {
    return (
        <button className={props.className} data-test-id={props.dti} disabled={props.disabled}>
            {props.content}
        </button>
    )
}

export default Button

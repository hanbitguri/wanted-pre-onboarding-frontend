import '../styles/components/button.css'

function Button(props) {
    return (
        <button className={props.className} data-test-id={props.dti}>
            {props.content}
        </button>
    )
}

export default Button

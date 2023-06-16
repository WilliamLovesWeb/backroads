const Button = (props) => {
    return(
        <div className='Button' style={props.style}>
            {props.content}
        </div>
    );
}
export default Button;
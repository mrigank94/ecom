const Button = (props) => {
    return ( <div className={`button ${props.children === '=' ? 'equal' : ''}`}>{props.children}</div> );
}
 
export default Button;
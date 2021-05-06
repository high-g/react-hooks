const Button = ({ handleClick, children }) => {
  console.log('Button Component', children)
  return <button onClick={handleClick}>{children}</button>
}

export default Button

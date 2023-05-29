
// eslint-disable-next-line react/prop-types
const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className="bg-slate-600 py-2 px-6 rounded hover:bg-slate-700 mb-10">
        {children}
    </button>
  )
}

export default Button
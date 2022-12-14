interface Props {
  text: string
  padding: string
  gradient?: boolean
  target?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = (props) => {
  const { text, padding, gradient, target, onClick } = props
  const colorStyle = () => {
    if (gradient) {
      return 'bg-gradient-to-r from-gradual to-secondary hover:opacity-80'
    }

    return `border border-white hover:border-secondary ${
      target && 'border-secondary'
    }`
  }

  return (
    <>
      <button
        type="button"
        className={`whitespace-nowrap rounded-lg text-white transition duration-700 ${colorStyle()} ${padding}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
export default Button

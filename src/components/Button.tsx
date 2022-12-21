interface Props {
  text: string
  padding: string
  type?: string
  disabled?: boolean
  gradient?: boolean
  target?: boolean
  block?: boolean // 手機版滿版
  onClick?: () => void
}

const Button: React.FC<Props> = (props) => {
  const { text, padding, disabled, block, gradient, target, onClick } = props
  const colorStyle = () => {
    if (disabled) return 'cursor-not-allowed border border-gray text-gray'

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
        type={props.type ? 'submit' : 'button'}
        className={`whitespace-nowrap rounded-lg text-white transition duration-700 
        ${colorStyle()} ${padding} ${block && 'w-full md:w-auto'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
export default Button

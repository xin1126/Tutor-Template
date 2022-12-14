interface Props {
  text: string
  click?: () => void
}

const Button: React.FC<Props> = ({ text, click }) => {
  return (
    <button
      type="button"
      className="min-w-[130px] rounded-xl border border-white py-2 px-8 text-white transition duration-500 hover:border-secondary"
      onClick={click}
    >
      {text}
    </button>
  )
}
export default Button

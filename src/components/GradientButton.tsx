interface Props {
  text: string
  px: number
  click?: () => void
}

const GradientButton: React.FC<Props> = ({ text, px, click }) => {
  const pxStyle = () => (px === 32 ? 'md:px-8' : 'md:px-12')
  return (
    <button
      type="button"
      className={`
      rounded-lg bg-gradient-to-r from-gradual to-secondary py-2 px-4 text-white transition duration-700 hover:opacity-80
      ${pxStyle()}
      `}
      onClick={click}
    >
      {text}
    </button>
  )
}
export default GradientButton

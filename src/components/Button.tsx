import { ReactNode } from 'react'
interface Props {
  color: string
  children: ReactNode
  click: () => void
}

const Button: React.FC<Props> = ({ color, click, children }) => {
  const [bg, setBg] = useState('primary')

  useEffect(() => {
    switch (color) {
      case 'primary':
        setBg('bg-primary')
        break
      case 'secondary':
        setBg('bg-secondary')
        break
      case 'success':
        setBg('bg-success')
        break
      case 'warning':
        setBg('bg-warning')
        break
      case 'danger':
        setBg('bg-danger')
        break
    }
  }, [color])
  return (
    <button
      type="button"
      className={`rounded-lg p-2 text-white transition duration-700 hover:opacity-80 ${bg} mr-3 w-[100px]`}
      onClick={click}
    >
      {children}
    </button>
  )
}
export default Button

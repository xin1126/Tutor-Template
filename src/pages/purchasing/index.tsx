// import Process from './components/Process'
import Info from './components/Info'
import Registration from './components/Registration'
import Payment from './components/Payment'
import { createContext } from 'react'
import { useAppSelector } from '@/store/index'

export interface Context {
  schedule: number
  price: string
  setText: (str: number) => void
  setPrice: (str: string) => void
}

export const FatherContext = createContext<Context>({
  schedule: 1,
  price: '',
  setText: () => {},
  setPrice: () => {},
})

const Purchasing: React.FC = () => {
  const [schedule, setText] = useState(1)
  const [price, setPrice] = useState('')

  const navigate = useNavigate()
  const { teacherName } = useAppSelector((state) => state.course)
  useEffect(() => {
    if (!teacherName) navigate('/')
  })

  return (
    <FatherContext.Provider value={{ schedule, price, setText, setPrice }}>
      {/* <Process /> */}
      <div className="flex justify-center bg-black pb-11 xl:pb-[144px] xl:pt-12">
        {schedule === 1 && (
          <div className="flex flex-col items-center xl:flex-row">
            <Info />
            <Registration />
          </div>
        )}
        {schedule === 2 && <Payment />}
      </div>
      {/* {schedule === 3 && <Registration />} */}
    </FatherContext.Provider>
  )
}

export default Purchasing

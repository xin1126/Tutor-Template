import Process from './components/Process'
import Info from './components/Info'
import Registration from './components/Registration'
import Payment from './components/Payment'
import Result from './components/Result'
import { createContext } from 'react'
import { useAppSelector } from '@/store/index'

interface TempInfo {
  price: string
  title: string
}

export interface Context {
  schedule: number
  info: TempInfo
  setSchedule: (n: number) => void
  setInfo: (data: TempInfo) => void
}

export const FatherContext = createContext<Context>({
  schedule: 1,
  info: {} as TempInfo,
  setSchedule: () => {},
  setInfo: () => {},
})

const Purchasing: React.FC = () => {
  const [schedule, setSchedule] = useState(1)
  const [info, setInfo] = useState({} as TempInfo)

  const navigate = useNavigate()
  const { teacherName } = useAppSelector((state) => state.course)

  useEffect(() => {
    if (!teacherName) navigate('/')
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [schedule])

  return (
    <FatherContext.Provider value={{ schedule, info, setSchedule, setInfo }}>
      <Process />
      <div className="flex min-h-[calc(100vh_-_260px)] justify-center bg-black pb-11 xl:pb-[144px] xl:pt-12">
        {schedule === 1 && (
          <div className="flex flex-col items-center xl:flex-row">
            <Info />
            <Registration />
          </div>
        )}
        {schedule === 2 && <Payment />}
        {schedule === 3 && <Result />}
      </div>
    </FatherContext.Provider>
  )
}

export default Purchasing

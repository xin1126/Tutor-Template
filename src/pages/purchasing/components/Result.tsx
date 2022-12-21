import Button from '@/components/Button'
import { FatherContext, Context } from '../index'

const Result: React.FC = () => {
  const { info } = useContext<Context>(FatherContext)

  const navigate = useNavigate()

  return (
    <div className="mx-3 rounded bg-dark p-6 md:max-w-[415px] md:py-12 md:px-8">
      <h2 className="fond-bold mb-12 flex place-content-center text-2xl font-bold text-white">
        <span className="material-icons mr-4 text-3xl text-secondary">
          verified
        </span>
        完成訂購
      </h2>
      <p className="mb-6 font-medium text-white md:mb-8">{`恭喜您已完成「${info.title}」課程報名，請注意郵件訊息，家教老師將與您聯繫！`}</p>
      <div className="flex justify-center">
        <Button
          text="看看其他課程"
          padding="py-2 px-12"
          gradient={true}
          onClick={() => navigate('/courseIntroduction')}
        />
      </div>
    </div>
  )
}

export default Result

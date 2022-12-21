import Button from '@/components/Button'
import Input from '@/components/Input'
import { FatherContext, Context } from '../index'

const Payment: React.FC = () => {
  const { info, setSchedule } = useContext<Context>(FatherContext)

  return (
    <div className="rounded bg-dark p-6 md:py-12 md:px-8">
      <h2 className="fond-bold mb-12 text-center text-2xl font-bold text-white">
        信用卡付款
      </h2>
      <p className="mb-4 font-bold text-white md:mb-6">
        請輸入信用卡資訊進行付款
      </p>
      <div className="mb-4 md:mb-6">
        <Input title="信用卡帳號" placeholder="Xxxx-xxxx-xxxx-xxxx" />
      </div>
      <div className="mb-4 md:mb-6">
        <Input title="安全碼" placeholder="***" type="password" />
      </div>
      <div className="mb-4 md:mb-6">
        <Input title="有效日期" placeholder="(MM-YY)" />
      </div>
      <div className="items-center justify-between md:flex">
        <p className="mb-6 text-lg text-white md:mb-0">{info.price}</p>
        <Button
          text="下一步"
          padding="py-2 px-12"
          gradient={true}
          block={true}
          onClick={() => setSchedule(3)}
        />
      </div>
    </div>
  )
}

export default Payment

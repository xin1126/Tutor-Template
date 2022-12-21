import Button from '@/components/Button'
import Input from '@/components/Input'
import { FatherContext, Context } from '../index'
import { useForm } from 'react-hook-form'

const Payment: React.FC = () => {
  const { info, setSchedule } = useContext<Context>(FatherContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="mx-3 w-full rounded bg-dark p-6 md:w-auto md:py-12 md:px-8">
      <h2 className="fond-bold mb-12 text-center text-2xl font-bold text-white">
        信用卡付款
      </h2>
      <p className="mb-4 font-bold text-white md:mb-6">
        請輸入信用卡資訊進行付款
      </p>
      <form onSubmit={handleSubmit(() => setSchedule(3))}>
        <div className="mb-4 md:mb-6">
          <Input
            title="信用卡帳號"
            placeholder="Xxxx-xxxx-xxxx-xxxx"
            verify={{
              ...register('account', {
                validate: {
                  required: (value) => value !== '',
                  max: (value) => value.length === 12,
                },
              }),
            }}
          />
          {errors.account?.type === 'required' && (
            <p className="text-[red]">信用卡帳號為必填</p>
          )}
          {errors.account?.type === 'max' && (
            <p className="text-[red]">信用卡帳號為十二數</p>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          <Input
            title="安全碼"
            placeholder="***"
            type="password"
            verify={{
              ...register('securityCode', {
                validate: {
                  required: (value) => value !== '',
                  max: (value) => value.length === 3,
                },
              }),
            }}
          />
          {errors.securityCode?.type === 'required' && (
            <p className="text-[red]">安全碼為必填</p>
          )}
          {errors.securityCode?.type === 'max' && (
            <p className="text-[red]">安全碼為三位數</p>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          <Input
            title="有效日期"
            placeholder="(MM-YY)"
            verify={{
              ...register('date', {
                validate: {
                  required: (value) => value !== '',
                  max: (value) => value.length === 4,
                },
              }),
            }}
          />
          {errors.date?.type === 'required' && (
            <p className="text-[red]">有效日期為必填</p>
          )}
          {errors.date?.type === 'max' && (
            <p className="text-[red]">有效日期為四位數</p>
          )}
        </div>
        <div className="items-center justify-between md:flex">
          <p className="mb-6 text-lg text-white md:mb-0">{info.price}</p>
          <Button
            text="下一步"
            padding="py-2 px-12"
            gradient={true}
            block={true}
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default Payment

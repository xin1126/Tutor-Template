import Button from '@/components/Button'
import Input from '@/components/Input'
import courses from '@/lib/courseData'
import { FatherContext, Context } from '../index'
import { useAppSelector } from '@/store/index'
import { Controller, useForm } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import cn from 'date-fns/locale/zh-CN'
registerLocale('cn', cn)

const Registration: React.FC = () => {
  const { customized, teacherName } = useAppSelector((state) => state.course)
  const [price, setPrice] = useState(customized.price)

  const teacherData = courses.filter((item) => item.name === teacherName)[0]

  const { setSchedule, setInfo } = useContext<Context>(FatherContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setSchedule(2)
    setInfo({ price, title: teacherData.title })
  }

  const handlePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value)
  }
  return (
    <div className="mx-3 rounded bg-dark p-6 text-white md:py-12 md:pr-6 xl:pl-[112px]">
      <h2 className="mb-6 text-center text-2xl font-bold md:mb-12">課程報名</h2>
      <h3 className="mb-4 text-center font-bold md:mb-2 md:text-start">
        選擇付款方式
      </h3>
      <div className="mb-8 flex">
        <div className="mr-2 w-full md:m-0 md:flex md:w-auto">
          <div className="mb-2 md:mr-4 md:mb-0">
            <Button
              text="信用卡付款"
              padding="py-4 md:px-8"
              target={true}
              block={true}
            />
          </div>
          <div className="md:mr-4">
            <Button
              text="超商繳款"
              padding="py-4 md:px-8"
              disabled={true}
              block={true}
            />
          </div>
        </div>
        <div className="w-full md:flex md:w-auto">
          <div className="mb-2  md:mr-4 md:mb-0">
            <Button
              text="ATM轉帳"
              padding="py-4 md:px-8"
              disabled={true}
              block={true}
            />
          </div>
          <div className="md:mr-4">
            <Button
              text="12期分期付款"
              padding="py-4 md:px-8"
              disabled={true}
              block={true}
            />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-4 text-center text-lg font-bold md:mb-6 md:text-start">
          訂單資訊
        </h3>
        <div className="mb-4 md:mb-6 md:flex">
          <div className="mb-4 md:mr-12 md:mb-0">
            <Input
              title="姓名"
              placeholder="請輸入姓名"
              id="name"
              verify={{ register, errors }}
            />
          </div>
          <div>
            <Input
              title="手機"
              placeholder="請輸入手機號碼"
              id="phone"
              verify={{ register, errors }}
              limitLength={10}
            />
          </div>
        </div>
        <div className="mb-4 md:mb-6">
          <Input
            title="Email"
            placeholder="請輸入Email"
            id="email"
            type="email"
            width="full"
            verify={{ register, errors }}
          />
        </div>
        <div className="mb-4 md:mb-6 md:flex">
          <div className="mb-4 md:mr-12 md:mb-0">
            <label className=" font-bold text-gray" htmlFor="grid-first-name">
              課程
            </label>
            <select
              onChange={(e) => handlePrice(e)}
              value={price}
              className="mt-2 block w-full rounded border border-gray bg-transparent py-[6px] px-4 text-white md:min-w-[330px]"
            >
              {teacherData?.customized.map((item) => (
                <option key={item.price} value={item.price} className="bg-dark">
                  {item.price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className=" font-bold text-gray" htmlFor="grid-first-name">
              想預約的日期
            </label>
            <Controller
              control={control}
              rules={{ required: true }}
              name="date"
              render={({ field }) => (
                <DatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  locale={'cn'}
                  placeholderText={'請選擇日期'}
                  dateFormat="yyyy/MM/dd"
                  minDate={new Date()}
                  className="mt-2 block w-full appearance-none rounded border border-gray bg-transparent py-2 px-4 leading-tight text-white focus:outline-none"
                />
              )}
            />
            {errors.date && <p className="text-[red]">日期欄位為必填</p>}
          </div>
        </div>
        <div className="mb-6 md:mb-8">
          <Input
            title="上課地點"
            placeholder="請輸入上課地點"
            id="place"
            width="full"
            verify={{ register, errors }}
          />
        </div>
        <div className="justify-between md:flex">
          <p className="mb-6 md:mb-0">{price}</p>
          <Button
            text="前往結帳"
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

export default Registration

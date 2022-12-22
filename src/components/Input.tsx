interface Props {
  title: string
  placeholder: string
  id: string
  verify: any
  limitLength?: number
  width?: string
  type?: string
}

const Input: React.FC<Props> = (props) => {
  const { title, placeholder, id, width, type, limitLength, verify } = props

  const { register, errors } = verify

  const validate: any = {}

  if (id === 'phone') {
    validate.wrong = (value: string) => value.slice(0, 2) === '09'
  }

  if (id === 'email') {
    validate.wrong = (value: string) => {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return emailRegex.test(value)
    }
  }

  const isNum = ['phone', 'account', 'securityCode', 'date']
  if (isNum.includes(id)) {
    validate.number = (value: string) => !isNaN(+value)
  }

  if (limitLength) {
    validate.limitLength = (value: string) => value.length === limitLength
  }

  return (
    <>
      <label className=" font-bold text-gray" htmlFor={id}>
        {title}
      </label>
      <input
        className={`
        mt-2 block w-full appearance-none rounded border border-gray bg-transparent py-2 px-4 leading-tight text-white focus:outline-none
        ${width !== 'full' && 'md:min-w-[330px]'}
        `}
        placeholder={placeholder}
        type={type ? type : 'text'}
        id={id}
        {...register(id, {
          validate,
          required: true,
        })}
      />
      {errors[id]?.type === 'required' && (
        <p className="text-[red]">{title}欄位為必填</p>
      )}
      {errors[id]?.type === 'wrong' && (
        <p className="text-[red]">{title}格式錯誤</p>
      )}
      {errors[id]?.type === 'number' && (
        <p className="text-[red]">{title}需為數值</p>
      )}
      {errors[id]?.type === 'limitLength' && (
        <p className="text-[red]">
          {title}為 {limitLength} 位數
        </p>
      )}
    </>
  )
}
export default Input

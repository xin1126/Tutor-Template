interface Props {
  title: string
  placeholder: string
  verify?: any
  width?: string
  type?: string
}

const Input: React.FC<Props> = (props) => {
  const { title, placeholder, width, type, verify } = props
  return (
    <>
      <label className=" font-bold text-gray" htmlFor={title}>
        {title}
      </label>
      <input
        className={`
        mt-2 block w-full appearance-none rounded border border-gray bg-transparent py-2 px-4 leading-tight text-white focus:outline-none
        ${width !== 'full' && 'md:min-w-[330px]'}
        `}
        placeholder={placeholder}
        type={type ? type : 'text'}
        id={title}
        {...verify}
      />
    </>
  )
}
export default Input

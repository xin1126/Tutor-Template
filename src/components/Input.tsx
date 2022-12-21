interface Props {
  title: string
  placeholder: string
  width?: string
  type?: string
}

const Input: React.FC<Props> = ({ title, placeholder, width, type }) => {
  return (
    <>
      <label className=" font-bold text-gray" htmlFor="grid-first-name">
        {title}
      </label>
      <input
        className={`
        mt-2 block w-full appearance-none rounded border border-gray bg-transparent py-2 px-4 leading-tight text-white focus:outline-none
        ${width !== 'full' && 'md:min-w-[330px]'}
        `}
        placeholder={placeholder}
        type={type ? type : 'text'}
        id="inputItemTitleEn"
        required
      />
    </>
  )
}
export default Input

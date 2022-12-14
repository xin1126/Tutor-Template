interface Props {
  title: string
  subtitle?: string
}

const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="mb-4 pt-12 text-center text-2xl text-white md:text-3xl lg:pt-20">
        {title}
        <br />
        {subtitle}
      </h2>
      <div className="mx-auto mb-6 w-[60px] border-b-4 border-secondary sm:mb-12"></div>
    </>
  )
}
export default Title

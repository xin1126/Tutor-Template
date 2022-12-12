interface Props {
  title: string
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h2 className="mb-4 pt-12 text-center text-3xl text-white lg:pt-20">
        {title}
      </h2>
      <div className="mx-auto mb-12 w-[60px] border-b-4 border-secondary"></div>
    </>
  )
}
export default Title

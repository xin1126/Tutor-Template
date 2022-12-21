import courses from '@/lib/courseData'
import { useAppSelector } from '@/store/index'

const Info: React.FC = () => {
  const { teacherName } = useAppSelector((state) => state.course)

  const teacherData = courses.filter((item) => item.name === teacherName)[0]
  return (
    <div className="relative mx-3 mb-10 flex max-w-[416px] items-center rounded sm:mx-0 xl:left-[70px] xl:mb-0">
      <div className="h-fit bg-primary py-12 px-8">
        <img
          className="mx-auto mb-6 h-[100px] w-[100px] rounded-full border-[3px] border-secondary"
          src={teacherData?.avatar}
          alt="avatar"
        />
        <div className="text-center text-white">
          <h2 className="mb-1">{teacherData?.title}</h2>
          <p className="mb-2 text-secondary">{teacherData?.type}</p>
        </div>
        <p className="text-white">{teacherData?.content}</p>
      </div>
      <div className="absolute right-1/2 bottom-[-10px] h-[20px] w-[20px] rotate-45 rounded bg-primary xl:right-[-10px] xl:top-1/2 "></div>
    </div>
  )
}

export default Info

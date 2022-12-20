import Title from '@/components/Title'
import Button from '@/components/Button'
import courses from '@/lib/courseData'
import { setTeacherName } from '@/store/modules/course'
import { useAppDispatch, useAppSelector } from '@/store/index'

interface Props {
  title: string
}

const PopularCourses: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { teacherName } = useAppSelector((state) => state.course)

  const isPopular = title === '熱門推薦課程'

  const jumpCourseDetail = (name: string) => {
    if (teacherName === name) return

    dispatch(setTeacherName(name))
    navigate('/courseDetail')
  }

  useEffect(() => {
    if (isPopular) {
      dispatch(setTeacherName(''))
    }
  }, [])

  return (
    <div className={`pb-10 sm:pb-20 ${isPopular ? 'bg-dark' : 'bg-black'}`}>
      <Title title={title} />
      <ul className="container grid cursor-default gap-4 text-white sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {courses.map((item, index) => {
          return (
            <li
              className={`
              rounded-xl border border-transparent bg-primary pt-6 pb-4 
              ${
                !isPopular && teacherName === item.name
                  ? 'cursor-not-allowed opacity-60'
                  : 'cursor-pointer hover:border-secondary'
              }
              `}
              key={item.title}
              onClick={() => jumpCourseDetail(item.name)}
            >
              <img
                className="mx-auto mb-2 h-[100px] w-[100px] rounded-full"
                src={item.avatar}
                alt="avatar"
              />
              <div className="px-8 pb-3 sm:px-6 sm:pb-8">
                <p className="mb-6 text-center text-sm">{item.name}</p>
                <p className="mb-4 min-h-[60px] text-xl font-bold">
                  {item.title}
                </p>
                <p className="mb-2 text-secondary">{item.type}</p>
                <p className="text-hidden">{item.content}</p>
              </div>
              <div className="border-t border-white pt-4 text-center">
                <p className="text-3xl">
                  <span className="mr-2 text-sm">{item.time}</span>
                  {item.price}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      {isPopular && (
        <div className="mt-4 text-center sm:mt-7">
          <Button
            text="所有課程列表"
            padding="py-2 px-8"
            gradient={true}
            onClick={() => navigate('/courseIntroduction')}
          />
        </div>
      )}
    </div>
  )
}

export default PopularCourses

import { FatherContext, Context } from '../index'
import courses from '@/lib/courseData'
import Button from '@/components/Button'

const Course: React.FC = () => {
  const { type } = useContext<Context>(FatherContext)

  const newCourse = useMemo(() => {
    if (type === '所有課程') return courses
    return courses.filter((item) => item.type === type)
  }, [type])

  return (
    <ul className="container max-w-[1075px] pb-2 text-white md:pb-4">
      {newCourse.length ? (
        newCourse.map((item) => {
          return (
            <li
              className="mb-8 rounded-xl border border-transparent bg-primary p-6 hover:border-secondary md:flex md:p-12"
              key={item.title}
            >
              <div className="md:mr-12">
                <img
                  className="mx-auto mb-2 h-[100px] min-w-[100px] rounded-full"
                  src={item.avatar}
                  alt="avatar"
                />
                <p className="mb-6 text-center text-sm">{item.name}</p>
              </div>
              <div className="md:mr-12 xl:mr-[88px]">
                <p className="mb-2 text-xl font-bold">{item.title}</p>
                <p className="mb-2 text-secondary">{item.type}</p>
                <p>{item.content}</p>
              </div>
              <div className="mt-12 border-white text-center md:mt-0">
                <div className="mb-4 flex items-end justify-center text-3xl md:block">
                  <p className="mr-2 text-sm">{item.time}</p>
                  <p>{item.price}</p>
                </div>
                <div className="flex justify-center md:block">
                  <div className="mb-2 mr-2 md:mr-0">
                    <Button text="課程介紹" padding="py-2 md:px-12 px-8" />
                  </div>
                  <div>
                    <Button
                      text="立即預約"
                      padding="py-2 md:px-12 px-8"
                      gradient={true}
                    ></Button>
                  </div>
                </div>
              </div>
            </li>
          )
        })
      ) : (
        <h2 className="text-center text-3xl font-bold">尚無資料</h2>
      )}
    </ul>
  )
}

export default Course

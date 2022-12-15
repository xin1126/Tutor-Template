import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Button from '@/components/Button'
import { FatherContext, Context } from '../index'

const CourseCategory: React.FC = () => {
  const { type, setText } = useContext<Context>(FatherContext)

  const category = [
    '所有課程',
    '行動應用開發',
    '資料庫/資料科學',
    '前端語言',
    '後端語言',
    '作業系統與伺服器',
  ]
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={'auto'}
      className="container max-w-[1075px] pb-6 pt-12 lg:pb-12"
    >
      {category.map((item) => {
        return (
          <SwiperSlide key={item} className="w-fit">
            <Button
              padding="px-8 py-4"
              text={item}
              target={type === item}
              onClick={() => setText(item)}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CourseCategory

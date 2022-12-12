import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Title from '@/components/Title'

const CourseCategory: React.FC = () => {
  const category = [
    'JavaScript',
    'HTML/CSS',
    'SQL',
    'Java',
    'Bash/shell',
    'Python',
    'PHP',
    'C#',
    'C++',
    'Angular',
    'Vue',
    'React',
    'jQuery',
    'Android',
    'ios',
    'Go',
    'Flutter',
  ]
  return (
    <div className="bg-primary">
      <Title title={'你想要學習的程式，都在這裡'} />
      <Swiper
        spaceBetween={15}
        slidesPerView={'auto'}
        className="cursor-grabbing select-none pb-10 pl-6 lg:pb-20"
      >
        {category.map((item) => {
          return (
            <SwiperSlide
              key={item}
              className="flex !w-fit justify-center rounded-lg border border-white px-8 py-6"
            >
              <div className="text-white">{item}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CourseCategory

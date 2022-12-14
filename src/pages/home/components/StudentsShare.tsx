import Title from '@/components/Title'
import banner from '@/assets/images/bg_share.jpg'
import images from '@/lib/images'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
SwiperCore.use([Autoplay])

const StudentsShare: React.FC = () => {
  const [slideTarget, setSlideTarget] = useState(2)
  const [page, setPage] = useState(2)
  const swiperRef = useRef<SwiperCore | null>(null)

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper
  }

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop()
  }
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start()
  }

  const handlePage = (status: string) => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop()
    }

    if (status === 'left' && slideTarget > 2) {
      setSlideTarget((slide) => slide - 1)
      setPage(slideTarget - 1)
    }

    if (status === 'left' && slideTarget === 2) {
      setSlideTarget(5)
      setPage(5)
    }

    if (status === 'right' && slideTarget < 5) {
      setSlideTarget((slide) => slide + 1)
      setPage(slideTarget + 1)
    }

    if (status === 'right' && slideTarget === 5) {
      setSlideTarget(2)
      setPage(2)
    }

    setTimeout(() => {
      if (swiperRef.current) swiperRef.current.autoplay.start()
    }, 500)
  }

  const students = [
    {
      avatar: images.student01,
      title: '老師很有耐心',
      share: images.share01,
      content:
        '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！',
    },
    {
      avatar: images.student02,
      title: '給予我很大的幫助',
      share: images.share02,
      content:
        '教法淺顯易懂並有圖形說明，不只是在學習上獲益良多，以淺顯易懂的方式，直接教授業界實用的觀念十分有用。',
    },
    {
      avatar: images.student03,
      title: '手把手的細心教學',
      share: images.share03,
      content:
        '講師教得很仔細，對入門者來說很有幫助，以淺顯易懂的方式，只要跟著學、一邊做，一定能學會！',
    },
    {
      avatar: images.student04,
      title: '學習獲益良多',
      share: images.share04,
      content:
        '手把手的細心教學，用手繪圖，不只是在學習上獲益良多，連實務經驗上都有了小小入門，只能說學院給予我很大的幫助!',
    },
  ]

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full bg-cover lg:h-[735px]"
    >
      <div className="container bg-black sm:bg-transparent">
        <Title
          title={'專屬你的學習課程'}
          subtitle={'超過 3000 位學員得到了程式超能力'}
        />
        <div className="relative mx-auto max-w-[600px] cursor-grabbing select-none lg:h-[430px] lg:max-w-[930px]">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mb-8 lg:mb-0"
          >
            <Swiper
              loop={true}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              onInit={onInit}
              speed={1500}
              key={page}
              slidesPerView={1}
              spaceBetween={30}
              onSlideChange={({ activeIndex }) => setSlideTarget(activeIndex)}
              onSwiper={(swiper) => swiper.slideTo(page, 0, false)}
            >
              {students.map((item) => {
                return (
                  <SwiperSlide
                    key={item.title}
                    className="flex h-full flex-col lg:flex-row"
                  >
                    <div className="mt-2 mb-14 h-fit rounded-xl border border-gray lg:mb-4 lg:min-w-[525px]">
                      <img
                        src={item.share}
                        alt="share"
                        className="relative -right-2 bottom-2 h-[215px] w-full rounded-xl sm:h-[380px]"
                      />
                    </div>
                    <div className="relative mt-auto h-fit rounded-lg rounded-bl-none bg-white p-8 lg:-left-6">
                      <img
                        className="absolute -top-10 right-8 h-[100px] w-[100px] rounded-full"
                        src={item.avatar}
                        alt="avatar"
                      />
                      <h2 className="mb-4 text-lg font-bold">{item.title}</h2>
                      <p>{item.content}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="left-0 bottom-2 z-10 flex cursor-pointer items-center justify-center text-center text-white lg:absolute lg:w-1/2">
            <span
              className="material-icons mr-4 text-secondary"
              onClick={() => handlePage('left')}
            >
              west
            </span>
            {students.map((item, index) => {
              return (
                <div
                  className={`
                    mr-2 h-[8px] w-[8px] rounded-full bg-secondary 
                    ${slideTarget === index + 2 && 'w-[16px]'}`}
                  key={item.title}
                  onClick={() => setPage(index + 2)}
                ></div>
              )
            })}
            <span
              className="material-icons ml-2 text-secondary"
              onClick={() => handlePage('right')}
            >
              east
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsShare

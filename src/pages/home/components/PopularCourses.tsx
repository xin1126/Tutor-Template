import Title from '@/components/Title'
import GradientButton from '@/components/GradientButton'
import images from '@/lib/images'

const PopularCourses: React.FC = () => {
  const courses = [
    {
      avatar: images.teacher01,
      name: 'Belinda',
      title: '基礎前端 - HTML',
      type: '前端語言',
      content:
        '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見...',
      time: '50分鐘',
      price: 'NT$1600',
    },
    {
      avatar: images.teacher02,
      name: 'Guava',
      title: '2022 Python 全攻略｜從入門到實務',
      type: '後端語言',
      content:
        'Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計...',
      time: '50分鐘',
      price: 'NT$2200',
    },
    {
      avatar: images.teacher03,
      name: 'Joe',
      title: '活用 Line Bot ｜APP 開發到上架完整實戰攻略',
      type: '行動應用開發',
      content:
        'Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言...',
      time: '50分鐘',
      price: 'NT$1800',
    },
    {
      avatar: images.teacher04,
      name: 'Lina',
      title: 'Linux 零基礎七天入門｜入門到實務',
      type: '作業系統與伺服器',
      content:
        'Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面...',
      time: '50分鐘',
      price: 'NT$1100',
    },
  ]
  return (
    <div className="bg-dark pb-10 sm:pb-20">
      <Title title={'熱門推薦課程'} />
      <ul className="container grid cursor-default items-center justify-around gap-4 text-white sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {courses.map((item, index) => {
          return (
            <li
              className="cursor-pointer rounded-xl border border-transparent bg-primary pt-6 pb-4 hover:border-secondary"
              key={item.title}
            >
              <img
                className="w-100[px] mx-auto mb-2 h-[100px] rounded-full"
                src={item.avatar}
                alt="avatar"
              />
              <div className="px-8 pb-3 sm:px-6 sm:pb-8">
                <p className="mb-6 text-center text-sm">{item.name}</p>
                <p className="mb-4 min-h-[60px] text-xl font-bold">
                  {item.title}
                </p>
                <p className="mb-2 text-secondary">{item.type}</p>
                <p>{item.content}</p>
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
      <div className="mt-4 text-center sm:mt-7">
        <GradientButton text={'所有課程列表'} px={32} />
      </div>
    </div>
  )
}

export default PopularCourses

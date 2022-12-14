import Title from '@/components/Title'
import device from 'current-device'

const Process: React.FC = () => {
  const info = [
    {
      title: '預約',
      contentFirst: '線上預約指定課程與老師',
      contentLast: '由老師安排專屬課程',
    },
    {
      title: '付款',
      contentFirst: '支援各種支付方式',
      contentLast: '提供12期分期付款',
    },
    {
      title: '上課',
      contentFirst: '地點由您指定',
      contentLast: '密集性一對一教學',
    },
    {
      title: '提供滿意度',
      contentFirst: '提供課程滿意度及回饋',
      contentLast: '讓我們持續成長與進步',
    },
  ]
  return (
    <div className="bg-dark">
      <Title title={'預期上課流程'} />
      <ul className="container grid cursor-default gap-4 py-6 text-white sm:grid-cols-2 lg:flex-row xl:grid-cols-4 xl:gap-6">
        {info.map((item, index) => {
          return (
            <li
              className="relative mb-12 w-full rounded-xl border border-white py-12 px-3 pl-12 text-lg lg:bg-transparent"
              key={item.title}
              data-aos="flip-left"
              data-aos-delay={index * (device.desktop() ? 200 : 100)}
              data-aos-anchor-placement={device.desktop() && 'bottom-bottom'}
            >
              <p className="mb-4 text-2xl font-bold">{item.title}</p>
              <p>{item.contentFirst}</p>
              <p>{item.contentLast}</p>
              <div className="absolute top-[-25px] left-[40px] bg-dark px-2 font-azeret text-5xl font-bold text-secondary">
                0{index + 1}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Process

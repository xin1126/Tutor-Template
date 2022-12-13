import images from '@/lib/images'

const LearningMethod: React.FC = () => {
  const learning = [
    {
      icon: 'question_answer',
      img: images.info01,
      title: '對症下藥，專案製作',
      contentFirst: '除了可以瘋狂提問之外',
      contentLast: '還有機會一起完成專案',
    },
    {
      icon: 'tips_and_updates',
      img: images.info02,
      title: '激發你的學習潛力',
      contentFirst: '進度制課程安排&個人化學習建議',
      contentLast: '有效管理你的學習動力',
    },
    {
      icon: 'thumb_up_alt',
      img: images.info03,
      title: '學習效率',
      contentFirst: '針對學員狀況調整內容與步調',
      contentLast: '學習精準最有效',
    },
    {
      icon: 'supervisor_account',
      img: images.info04,
      title: '一對一指導',
      contentFirst: '針對目的進行客製化課程安排',
      contentLast: '快速的學以致用&個人化學習建議',
    },
  ]
  return (
    <div className="bg-dark">
      <ul className="flex flex-wrap">
        {learning.map((item, index) => {
          return (
            <li
              className="group relative w-full md:w-1/2 xl:w-1/4"
              key={item.title}
            >
              <img
                src={item.img}
                alt="info"
                className="h-[265px] w-full object-cover  md:h-[400px] xl:h-[615px]"
              />
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/80 duration-700 group-hover:bg-black/40 xl:justify-start">
                <div className="text-center xl:ml-12 xl:text-start">
                  <span className=" material-icons mb-2 text-3xl text-gray duration-700 group-hover:text-secondary">
                    {item.icon}
                  </span>
                  <h2 className=" mb-4 text-2xl font-bold text-white">
                    {item.title}
                  </h2>
                  <div className="m-auto mb-6 w-[50px] border-b-4 border-secondary sm:mb-8 xl:mx-0"></div>
                  <div className="text-gray duration-700 group-hover:text-white">
                    <p>{item.contentFirst}</p>
                    <p>{item.contentLast}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LearningMethod

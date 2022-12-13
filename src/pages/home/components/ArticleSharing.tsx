import Title from '@/components/Title'
import images from '@/lib/images'

const ArticleSharing: React.FC = () => {
  const courses = [
    {
      title: '2022 前端開發者學習地圖',
      img: images.article01,
      content:
        '轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考',
    },
    {
      title: '軟體工程師有哪些類別',
      img: images.article02,
      content:
        '軟體工程師領域廣闊，許多人仍然對此相關職務感到陌生，本篇就介紹主流的軟體工程師職務',
    },
    {
      title: 'Node.js 實戰課程',
      img: images.article03,
      content:
        '這篇文章規劃了適合「前端工程師」的Node.js 實戰課程，讓學生了解後端知識',
    },
  ]
  return (
    <div className="bg-dark pb-10 sm:pb-20">
      <Title title={'文章分享'} />
      <ul className="container grid cursor-default gap-4 text-white md:grid-cols-3 xl:gap-6">
        {courses.map((item, index) => {
          return (
            <li
              className="group relative cursor-pointer rounded-xl border border-transparent xl:p-8"
              key={item.title}
            >
              <img
                className="mb-4 h-[210px] w-full object-cover"
                src={item.img}
                alt="article"
              />
              <h2 className="mb-4 text-lg font-bold">{item.title}</h2>
              <p className="mb-4 text-gray">{item.content}</p>
              <p className="text-right text-secondary">MORE</p>
              <div className="hidden xl:group-hover:block">
                <div className="absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-secondary"></div>
                <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-secondary"></div>
                <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-secondary"></div>
                <div className="absolute bottom-0 right-0 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-secondary"></div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ArticleSharing

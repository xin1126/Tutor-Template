const Information: React.FC = () => {
  const info = [
    {
      icon: 'code',
      title: '超過 100 種專業課程',
      contentFirst: '學習標準化的電腦形式語言',
      contentLast: '培養運算思維和邏輯素養',
    },
    {
      icon: 'rocket_launch',
      title: '高效學習',
      contentFirst: '客製化專屬課表',
      contentLast: '讓學習變簡單',
    },
    {
      icon: 'location_on',
      title: '指定地點',
      contentFirst: '專業老師到你指定的地點',
      contentLast: '一對一高效學習',
    },
  ]
  return (
    <div className="bg-primary">
      <ul className="container flex cursor-default flex-col  items-center justify-around py-6 text-gray lg:flex-row lg:py-20">
        <li
          className="w-[305px] pb-6 text-center text-3xl font-medium text-white lg:mt-10 lg:py-12 lg:text-start"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <p>手把手帶你</p>
          <p className="mb-4">親自到家教到會</p>
          <div className="mx-auto w-[60px] border-b-4 border-secondary lg:m-0"></div>
        </li>
        {info.map((item) => {
          return (
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              className="group mb-6 w-full rounded-xl border border-transparent bg-dark py-12 px-3 text-center text-lg hover:border-secondary hover:bg-dark lg:mb-0 lg:w-[305px] lg:bg-transparent"
              key={item.title}
            >
              <span className="material-icons mb-5 text-5xl group-hover:bg-gradient-to-t group-hover:from-secondary group-hover:to-gradual group-hover:bg-clip-text group-hover:text-transparent">
                {item.icon}
              </span>
              <div className="group-hover:text-white">
                <p className="mb-4 font-bold">{item.title}</p>
                <p>{item.contentFirst}</p>
                <p>{item.contentLast}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Information

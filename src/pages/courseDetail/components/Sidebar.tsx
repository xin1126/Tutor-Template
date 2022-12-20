const Sidebar: React.FC = () => {
  const price = [
    {
      money: 'NT$1600',
      time: '1堂50分鐘',
    },
    {
      money: 'NT$1400',
      time: '3堂50分鐘',
    },
    {
      money: 'NT$1600',
      time: '1堂50分鐘',
    },
    {
      money: 'NT$900',
      time: '20堂50分鐘',
    },
    {
      money: '洽談報價',
      time: '客製化課程/專案製作',
    },
  ]
  return (
    <div className="sticky top-[120px] h-fit w-full border border-white bg-primary px-8 py-10 md:mx-3 md:min-w-[415px]">
      <ul>
        {price.map((item, index) => {
          return (
            <li
              key={index}
              className="group mb-4 flex cursor-pointer items-center justify-between border-b border-white pb-4 text-white"
            >
              <div className="group-hover:text-secondary">
                <p className="text-2xl font-medium ">{item.money}</p>
                <p>{item.time}</p>
              </div>
              <span className="material-icons rounded-full bg-gradient-to-t from-secondary to-gradual p-1 group-hover:opacity-70">
                keyboard_arrow_right
              </span>
            </li>
          )
        })}
      </ul>
      <div className="absolute -top-1 -left-1 h-[10px] w-[10px] bg-white"></div>
      <div className="absolute -top-1 -right-1 h-[10px] w-[10px] bg-white"></div>
      <div className="absolute -bottom-1 -left-1 h-[10px] w-[10px] bg-white"></div>
      <div className="absolute -bottom-1 -right-1 h-[10px] w-[10px] bg-white"></div>
    </div>
  )
}

export default Sidebar

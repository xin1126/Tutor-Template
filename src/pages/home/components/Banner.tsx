import banner from '@/assets/images/bg_home.jpg'

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <img className="min-h-[336px]" src={banner} alt="banner" />
      <div className="absolute top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%] bg-dark lg:w-[70%] xl:w-auto">
        <div className="relative mx-3 border border-white py-8 md:px-[85px] md:py-[50px] lg:mx-0">
          <h2 className="mb-2 text-center text-2xl font-bold md:text-5xl">
            <span className="bg-gradient-to-t from-secondary to-gradual bg-clip-text text-transparent">
              全台最豐富的程式家教
            </span>
          </h2>
          <p className="mb-6 text-center text-2xl font-bold text-white md:text-5xl">
            在實踐中化理想為現實
          </p>
          <ul className="flex justify-center text-sm text-white xl:text-lg">
            <li className="mr-2 flex h-[16px] items-center border-r border-white pr-2">
              全台最專業師資
            </li>
            <li className="mr-2 flex h-[16px] items-center border-r border-white pr-2">
              到府程式家教
            </li>
            <li className="flex h-[16px] items-center">客製化課程</li>
          </ul>
          <div className="absolute -top-1 -left-1 h-[10px] w-[10px] bg-white"></div>
          <div className="absolute -top-1 -right-1 h-[10px] w-[10px] bg-white"></div>
          <div className="absolute -bottom-1 -left-1 h-[10px] w-[10px] bg-white"></div>
          <div className="absolute -bottom-1 -right-1 h-[10px] w-[10px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner

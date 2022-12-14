import Button from '@/components/Button'

const JoinTutor: React.FC = () => {
  return (
    <div className="bg-black py-20 md:pt-0">
      <div className="container">
        <div className="mx-auto w-fit items-center rounded-xl bg-dark px-9 py-10 text-center md:flex md:p-12 md:text-start">
          <span className="material-icons text-[100px] text-gray md:mr-12">
            menu_book
          </span>
          <div className="text-center text-white sm:mr-12 md:text-start xl:mr-[100px]">
            <h2 className="mb-6 text-3xl font-bold md:mb-2">
              加入我們成為導師
            </h2>
            <p className="mb-6 text-lg md:m-0">
              歡迎各大程式大神加入我們，用知識在世界留下一點影響力。
            </p>
          </div>
          <Button text="立即預約"></Button>
        </div>
      </div>
    </div>
  )
}
export default JoinTutor

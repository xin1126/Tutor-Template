import { FatherContext, Context } from '../index'

const Process: React.FC = () => {
  const { schedule } = useContext<Context>(FatherContext)

  return (
    <div className="bg-black xl:bg-dark">
      <div className="mx-auto max-w-[830px] px-3 pb-6 pt-8">
        <div className="relative top-[10px] flex">
          <div
            className={`ml-6 w-1/2 border-b-4 ${
              schedule > 1 ? 'border-secondary' : 'border-gray'
            }`}
          ></div>
          <div
            className={`mr-6 w-1/2 border-b-4 ${
              schedule > 2 ? 'border-secondary' : 'border-gray'
            }`}
          ></div>
        </div>
        <ul className="relative z-10 flex justify-between text-white">
          <li className="flex flex-col items-center">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-secondary">
              <span className="material-icons text-xs">check</span>
            </div>
            <p className="pt-2 text-secondary">課程報名</p>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={`flex h-[20px] w-[20px] items-center justify-center rounded-full
              ${
                schedule > 1
                  ? 'bg-secondary'
                  : 'border border-gray bg-black xl:bg-dark'
              }
              `}
            >
              {schedule > 1 ? (
                <span className="material-icons text-xs">check</span>
              ) : (
                <span className="text-xs">2</span>
              )}
            </div>
            <p
              className={`pt-2 ${
                schedule > 1 ? 'text-secondary' : 'text-gray'
              }`}
            >
              信用卡付款
            </p>
          </li>
          <li className="flex flex-col items-center">
            <div
              className={`flex h-[20px] w-[20px] items-center justify-center rounded-full
              ${
                schedule > 2
                  ? 'bg-secondary'
                  : 'border border-gray bg-black xl:bg-dark'
              }
              `}
            >
              {schedule > 2 ? (
                <span className="material-icons text-xs">check</span>
              ) : (
                <span className="text-xs">3</span>
              )}
            </div>
            <p
              className={`pt-2 ${
                schedule > 2 ? 'text-secondary' : 'text-gray'
              }`}
            >
              付款成功
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Process

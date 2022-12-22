import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form'
import fb from '@/assets/images/icon_fb.svg'
import google from '@/assets/images/icon_google.svg'

interface OtherBtn {
  img: string
  text: string
}

const OtherButton: React.FC<OtherBtn> = ({ img, text }) => {
  return (
    <button
      type="button"
      className="relative w-full rounded-lg border border-white py-2 text-white transition duration-700 hover:border-secondary"
    >
      <img
        className={`absolute left-8 ${
          text === 'Facebook 登入' ? 'h-[24px] w-[24px]' : 'h-[20px] w-[20px]'
        }`}
        src={img}
        alt="logo"
      />
      {text}
    </button>
  )
}

interface Props {
  handleModal: (status: boolean) => void
}

const LoginModal: React.FC<Props> = ({ handleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
      <div className="mx-3 mb-12 flex h-fit w-full max-w-[635px] flex-col items-center rounded border border-white bg-primary pt-6 pb-12">
        <h2 className="relative mb-8 w-full text-center text-2xl text-white">
          登入
          <span
            className="material-icons absolute right-6 cursor-pointer"
            onClick={() => {
              handleModal(false)
            }}
          >
            close
          </span>
        </h2>
        <div className="w-full max-w-[330px] px-4 sm:px-0">
          <form onSubmit={handleSubmit(() => {})}>
            <div className="mb-6">
              <Input
                title="信箱"
                placeholder="請輸入信箱"
                id="email"
                type="email"
                bg="bg-black"
                verify={{ register, errors }}
              />
            </div>
            <div className="mb-6">
              <Input
                title="密碼"
                placeholder="請輸入密碼"
                id="password"
                type="password"
                bg="bg-black"
                verify={{ register, errors }}
              />
            </div>
            <div className="mb-6">
              <Button
                text="登入"
                padding="py-2 md:px-[150px]"
                gradient={true}
                block={true}
                type="submit"
              />
            </div>
          </form>
          <div className="relative mb-5 h-6 w-full border-b border-gray">
            <p className="absolute top-[10px] right-1/2 translate-x-1/2 whitespace-nowrap bg-primary px-4 text-gray">
              其他登入方式
            </p>
          </div>
          <div className="mb-6">
            <OtherButton img={fb} text="Facebook 登入" />
          </div>
          <OtherButton img={google} text="Google 登入" />
        </div>
      </div>
    </div>
  )
}
export default LoginModal

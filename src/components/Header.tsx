import { NavLink } from 'react-router-dom'
import pcLogo from '@/assets/images/logo.svg'
import mobileLogo from '@/assets/images/logo2.svg'

const Header: React.FC = () => {
  const [menuStatus, setMenuStatus] = useState(false)

  const handleMenu = () => {
    const newStatus = !menuStatus
    setMenuStatus(newStatus)
  }
  return (
    <div className="relative bg-primary">
      <div className="container flex items-center justify-between">
        <img className="hidden w-40 md:block" src={pcLogo} alt="logo" />
        <img className="w-10 md:hidden" src={mobileLogo} alt="logo" />
        <div className="cursor-pointer py-7 md:hidden" onClick={handleMenu}>
          <div className="mb-1 w-[20px] border-b-2 border-secondary"></div>
          <div className="w-[20px] border-b-2 border-secondary"></div>
        </div>
        <ul
          className={`
        absolute
        left-0 
        -z-10
        w-full 
        justify-end 
        bg-primary 
        py-6
        text-xl 
        font-bold 
        text-white 
        transition-all 
        md:static
        md:z-0
        md:flex
        md:py-8
        ${menuStatus ? 'top-[60px]' : '!top-[-200px]'}
        `}
        >
          <li className="mb-6 text-center md:mr-12 md:mb-0">
            <NavLink to="/" className="hover:text-slate-300">
              首頁
            </NavLink>
          </li>
          <li className="mb-6 text-center md:mr-12 md:mb-0">
            <NavLink to="/" className="hover:text-slate-300">
              課程介紹
            </NavLink>
          </li>
          <li className="mb-6 flex items-center justify-center md:mb-0">
            <NavLink to="/" className="flex items-center hover:text-slate-300">
              <span className="material-icons mr-1">account_circle</span>登入
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 flex w-full">
        <div className="w-1/2 border-b-4 border-secondary"></div>
        <div className="w-1/2 border-b-4 border-gradual"></div>
      </div>
    </div>
  )
}
export default Header

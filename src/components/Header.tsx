import { NavLink } from 'react-router-dom'
import pcLogo from '@/assets/images/logo.svg'
import mobileLogo from '@/assets/images/logo2.svg'

const Header: React.FC = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const navigate = useNavigate()

  const handleMenu = () => {
    const newStatus = !menuStatus
    setMenuStatus(newStatus)
  }
  return (
    <div className="fixed z-20 w-full bg-primary">
      <div className="container relative flex items-center justify-between bg-primary">
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <img className="hidden w-48 md:block" src={pcLogo} alt="logo" />
          <img className="w-10 py-6 md:hidden" src={mobileLogo} alt="logo" />
        </div>
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
        duration-700
        md:static
        md:z-0
        md:flex
        md:py-8
        ${menuStatus ? 'top-[85px]' : '!top-[-200px]'}
        `}
        >
          <li className="mb-6 text-center md:mr-12 md:mb-0">
            <NavLink
              to="/"
              className="hover:text-slate-300"
              onClick={() => setMenuStatus(false)}
            >
              首頁
            </NavLink>
          </li>
          <li className="mb-6 text-center md:mr-12 md:mb-0">
            <NavLink
              to="/courseIntroduction"
              className="hover:text-slate-300"
              onClick={() => setMenuStatus(false)}
            >
              課程介紹
            </NavLink>
          </li>
          <li className="flex items-center justify-center md:mb-0">
            <NavLink
              to="/"
              className="flex items-center hover:text-slate-300"
              onClick={() => setMenuStatus(false)}
            >
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

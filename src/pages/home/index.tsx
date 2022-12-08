import logo from '@/assets/logo.svg'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-5xl">
      <p>首頁</p>
      <img className="w-2/4" src={logo} alt="logo" />
    </div>
  )
}

export default Home

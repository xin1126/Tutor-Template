import courses from '@/lib/courseData'
import { useAppSelector } from '@/store/index'

const Introduce: React.FC = () => {
  const { teacherName } = useAppSelector((state) => state.course)
  const navigate = useNavigate()

  const teacherData = courses.filter((item) => item.name === teacherName)[0]

  useEffect(() => {
    if (!teacherName) navigate('/')
  })
  return (
    <div className="xl:mr-6 xl:ml-[100px]">
      {teacherName && (
        <div>
          <div
            className="mb-8 rounded-xl bg-primary p-6 text-white md:flex md:p-12"
            key={teacherData.title}
          >
            <div className="md:mr-12">
              <img
                className="mx-auto mb-2 h-[100px] min-w-[100px] rounded-full"
                src={teacherData.avatar}
                alt="avatar"
              />
              <p className="mb-6 text-center text-sm">{teacherData.name}</p>
            </div>
            <div>
              <p className="mb-2 text-xl font-bold">{teacherData.title}</p>
              <p className="mb-2 text-secondary">{teacherData.type}</p>
              <p>{teacherData.content}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10 text-white md:mb-0">
        <h2 className="mb-4 text-xl">老師介紹</h2>
        <div className="rounded-xl bg-primary p-6 md:p-8">
          <ul className="mb-8 grid gap-4 border-b border-white pb-8 md:grid-flow-col md:grid-rows-2">
            <li className="flex items-center">
              <span className="material-icons text-secondary">school</span>
              <span className="mx-2 whitespace-nowrap text-gray">學歷</span>
              <span className="text-white">
                國立中央大學 資訊工程 碩士 畢業
              </span>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-secondary">
                business_center
              </span>
              <span className="mx-2 whitespace-nowrap text-gray">經歷</span>
              <span className="text-white">
                2020.08 - 迄今 上市企業 韌體工程師
              </span>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-secondary">translate</span>
              <span className="mx-2 whitespace-nowrap text-gray">語言</span>
              <span className="text-white">中文/英文</span>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-secondary">
                military_tech
              </span>
              <span className="mx-2 whitespace-nowrap text-gray">等級</span>
              <span className="text-white">入門</span>
            </li>
          </ul>
          <p className="mb-6">
            目前任職於上市企業
            韌體工程師，撰寫各種微控制器韌體程式，如作業系統、系統軟體、裝置控制程式、驅動程式、網路應用程式、系統整合程式、數位訊號處理程式等。
          </p>
          <p>
            興趣是幫助他人學習程式語言，我相信，透過清楚的講解與示範，任何人都可以學好編寫程式與電腦科學中的複雜概念
          </p>
        </div>
      </div>
      <div className="text-white">
        <h2 className="mb-4 text-xl">課程簡介</h2>
        <div className="rounded-xl bg-primary p-6 md:p-8">
          <h3 className="mb-4 border-l-2 border-secondary pl-2">
            這堂課你將會學到：
          </h3>
          <ul className="mb-8">
            <li className="flex items-center">
              <span className="mr-2 inline-block h-[5px] w-[5px] bg-secondary"></span>
              網頁設計，基礎知識
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-[5px] w-[5px] bg-secondary"></span>
              HTML 語法，概念實作能力
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-[5px] w-[5px] bg-secondary"></span>
              CSS , Javascript 概念與知識
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-[5px] w-[5px] bg-secondary"></span>
              能做出一個基礎的HTML 網頁
            </li>
          </ul>
          <h3 className="mb-4 border-l-2 border-secondary pl-2">
            什麼是 HTML，為什麼要打造網頁，就一定要先學它？
          </h3>
          <p className="mb-6">
            HTML元素是構建網站的基石。HTML允許嵌入圖像與物件，並且可以用於建立互動式表單，它被用來結構化資訊——例如標題、段落和列表等等，也可用來在一定程度上描述文件的外觀和語意。
          </p>
          <p>當你掌握了HTML，就可以開始規劃並建置你想要的網頁內容 !</p>
        </div>
      </div>
    </div>
  )
}

export default Introduce

import Introduce from './components/Introduce'
import Sidebar from './components/Sidebar'

const CourseDetail: React.FC = () => {
  return (
    <div className="bg-dark">
      <div className="container pt-10 xl:pt-20">
        <div className="lg:flex">
          <Introduce />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

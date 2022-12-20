import Introduce from './components/Introduce'
import Sidebar from './components/Sidebar'
import OtherCourses from '@/pages/home/components/PopularCourses'

const CourseDetail: React.FC = () => {
  return (
    <div className="bg-dark">
      <div className="container py-10 xl:py-20">
        <div className="lg:flex">
          <Introduce />
          <Sidebar />
        </div>
      </div>
      <OtherCourses title="其他人也看了這些課程" />
    </div>
  )
}

export default CourseDetail

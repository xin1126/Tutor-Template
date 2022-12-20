import Banner from './components/Banner'
import Information from './components/Information'
import Process from './components/Process'
import CourseCategory from './components/CourseCategory'
import PopularCourses from './components/PopularCourses'
import LearningMethod from './components/LearningMethod'
import ArticleSharing from './components/ArticleSharing'
import StudentsShare from './components/StudentsShare'
import JoinTutor from './components/JoinTutor'

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Information />
      <Process />
      <CourseCategory />
      <PopularCourses title="熱門推薦課程" />
      <LearningMethod />
      <ArticleSharing />
      <StudentsShare />
      <JoinTutor />
    </>
  )
}

export default Home

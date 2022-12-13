import Banner from './components/Banner'
import Information from './components/Information'
import Process from './components/Process'
import CourseCategory from './components/CourseCategory'
import PopularCourses from './components/PopularCourses'
import LearningMethod from './components/LearningMethod'
import ArticleSharing from './components/ArticleSharing'

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Information />
      <Process />
      <CourseCategory />
      <PopularCourses />
      <LearningMethod />
      <ArticleSharing />
    </>
  )
}

export default Home

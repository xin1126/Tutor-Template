import Banner from './components/Banner'
import Information from './components/Information'
import Process from './components/Process'
import CourseCategory from './components/CourseCategory'

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Information />
      <Process />
      <CourseCategory />
    </>
  )
}

export default Home

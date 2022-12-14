import Type from './components/Type'
import Course from './components/Course'
import { createContext } from 'react'

export interface Context {
  type: string
  setText: (str: string) => void
}

export const FatherContext = createContext<Context>({
  type: '',
  setText: () => {},
})

const CourseIntroduction: React.FC = () => {
  const [type, setText] = useState('所有課程')

  return (
    <>
      <FatherContext.Provider value={{ type, setText }}>
        <div className="min-h-screen bg-dark">
          <Type />
          <Course />
        </div>
      </FatherContext.Provider>
    </>
  )
}

export default CourseIntroduction

import AddCount from './components/AddCount'
import ReduceCount from './components/ReduceCount'

const About: React.FC = () => {
  const count = useSelector((state: Count) => state.count)

  return (
    <>
      <div className="flex justify-center">
        <AddCount />
        <ReduceCount />
      </div>
      <p className="relative -top-32 text-center text-3xl">{count}</p>
    </>
  )
}

export default About

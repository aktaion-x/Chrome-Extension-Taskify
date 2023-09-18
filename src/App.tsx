import './App.css'
import Sites from './components/Sites/Sites'
import Todo from './components/Todo/TodoContainer'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {
  return (
    <div className="App bg-[#202124] text-white h-screen">
      <div className='flex flex-col justify-between h-full items-center w-full overflow-hidden'>
        <Navbar />
        <Title />
        <Todo />
        <Sites />
      </div>
    </div>
  )
}

export default App

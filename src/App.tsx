import './App.css'
import Sites from './components/Sites/Sites'
import Title from './components/Title'
import Todo from './components/Todo/TodoContainer'

function App() {
  return (
    <div className="App bg-[#202124] text-white h-screen">
      <div className='flex flex-col justify-between h-full items-center w-full'>
        <Title />
        <Todo />
        <Sites />
      </div>
    </div>
  )
}

export default App

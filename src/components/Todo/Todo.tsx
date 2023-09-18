import { useState, useEffect } from "react"
import Icons from "../Icons"
import { TasksType } from "../../types/TodoTypes";

function Todo() {
  const [tasks, setTasks] = useState<TasksType>([{
    text: '',
    isCompleted: false
  }]);
  const [title, setTitle] = useState("")
  const [todo, setTodo] = useState({ tasks, title })
  const [focusedInput, setFocusedInput] = useState<number>(tasks.length - 1)
  useEffect(() => {
    if (localStorage.getItem('todo')) {
      const storageTasks = JSON.parse(localStorage.getItem('todo')!).tasks;
      const storageTitle = JSON.parse(localStorage.getItem('todo')!).title;
      if (storageTasks.length > 0) {
        setTasks(storageTasks)
      }
      if (storageTitle) {
        setTitle(storageTitle)
      }
    }
  }, [])
  useEffect(() => {
    setTodo({ title, tasks })
  }, [title, tasks])
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTasks = [...tasks]
    newTasks.join()
    newTasks.splice(focusedInput + 1, 0, {
      text: '',
      isCompleted: false,
    },);
    newTasks.join()
    setTasks(newTasks)

    setTimeout(() => {
      if (document.querySelectorAll('form input')[focusedInput + 1]) {
        const doc = document.querySelectorAll('form input')[focusedInput + 1] as HTMLInputElement
        doc.focus()
      }
    }, 0);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTasks(t => t.map((el, i) => {
      if (i == index) {
        el.text = e.target.value
      }
      return el;
    }))
  }
  const handleComplete = (index: number) => {
    setTasks(t => t.map((el, i) => {

      if (i == index) {
        el.isCompleted = !el.isCompleted
      }
      return el;
    }))
  }
  const handleDelete = (index: number) => {
    setTasks(t => t.filter((_, i) => (i !== index)))
  }
  const handleDeleteTodo = () => {
    setTasks([{
      text: '',
      isCompleted: false
    }]);
    setTitle("")
  }
  return (
    <div className="bg-[#00000024] shadow-sm px-5 py-4 rounded-xl w-7/12">
      <div className="flex justify-between items-start">
        <input className="bg-transparent w-full outline-none border-b-2 border-transparent transition-colors text-2xl focus:border-[#444] mr-2 px-2" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <div onClick={handleDeleteTodo} className="btn rounded-full p-2"><Icons name="TRASH" className="w-4 h-4" /></div>
      </div>
      <form onSubmit={handleSubmit} className="todo-form flex flex-col mt-5 ml-2 max-h-[350px] overflow-y-auto">
        {tasks.map((task, index) => (
          <div key={index} className="hover:bg-[#00000024] flex gap-2 px-3 py-2 items-center rounded-lg">
            <div onClick={() => handleComplete(index)} className={`w-5 h-5 rounded border-2 ${task.isCompleted ? "" : "border-[#222]"} flex justify-center items-center cursor-pointer`}>
              {task.isCompleted && <Icons name="TICK" className="w-3 h-3" />}
            </div>
            <input
              className={`bg-transparent text-md w-full outline-none border-2 border-transparent transition-colors px-2 py-[1px] rounded-lg focus:border-[#444]  ${task?.isCompleted ? "text-gray-500 line-through" : ""}`}
              onFocus={() => setFocusedInput(index)}
              type="text"
              value={task.text}
              onChange={e => handleChange(e, index)}
            />
            <div onClick={() => handleDelete(index)}>
              <Icons name="CLOSE" className="hover:text-red-900 cursor-pointer transition-colors text-gray-500 " />
            </div>
          </div>
        ))}
        <button></button>
      </form>
    </div>
  );
}

export default Todo;

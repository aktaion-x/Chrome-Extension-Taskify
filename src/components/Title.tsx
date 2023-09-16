import { useEffect, useState } from 'react'


function Title() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (localStorage.getItem('page-title')) {
      const storageTitle = (localStorage.getItem('page-title')!);
      setTitle(storageTitle)
    } else {
      const defaultTitle = 'Taskify Tab'
      localStorage.setItem('page-title', defaultTitle)
      setTitle(defaultTitle)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('page-title', title)
  }, [title])

  return (
    <div className='mx-auto w-fit pt-10'>
      <input value={title} onChange={e => setTitle(e.target.value)} className='page-title bg-transparent dark:text-gray-200 text-gray-800 outline-none text-6xl focus:border-b-2 focus:border-[#00000024] text-center' type="text" />
    </div>
  );
}

export default Title;

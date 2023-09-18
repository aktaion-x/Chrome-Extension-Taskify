import { useState } from 'react'
import Icons from "./Icons";

function Navbar() {
  const [openDropDown, setOpenDropDown] = useState(false)
  return (
    <div className="mt-5 flex items-end justify-end w-full px-8">
      <nav className="flex gap-5 items-center">
        <a href="https://mail.google.com/mail/?tab=rm&ogbl">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&tab=ri&ogbl">Images</a>
        <div className="relative">
          <div onClick={() => setOpenDropDown(!openDropDown)}><Icons name="DOTS" className="w-9 fill-gray-100 cursor-pointer btn rounded-full p-1" /></div>
          <div className={`drop-menu absolute bg-[#333] pl-[6px] py-[6px] top-14 ${openDropDown ? "mr-0" : "mr-[-1000%]"} right-0 rounded-2xl w-80 h-96 overflow-hidden`}>
            <div className="bg-[#111] rounded-2xl flex flex-wrap px-8 py-5 content-start  justify-between overflow-y-auto h-full pt-8 pb-14">
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://bard.google.com/">
                <img className="w-10 h-10" src="/navbar/bard.png" alt="" />
                <span className="text-sm">Bard</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://www.google.com/">
                <img className="w-10 h-10" src="/navbar/google.png" alt="" />
                <span className="text-sm">Search</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://maps.google.com/">
                <img className="w-10 h-10" src="/navbar/google-map.png" alt="" />
                <span className="text-sm">Maps</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://www.youtube.com/">
                <img className="w-10 h-10" src="/navbar/youtube.png" alt="" />
                <span className="text-sm">YouTube</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://play.google.com/">
                <img className="w-10 h-10" src="/navbar/google-play.png" alt="" />
                <span className="text-sm">Play</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://news.google.com/">
                <img className="w-10 h-10" src="/navbar/news.png" alt="" />
                <span className="text-sm">News</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://drive.google.com/">
                <img className="w-10 h-10" src="/navbar/drive.png" alt="" />
                <span className="text-sm">Drive</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://www.gmail.com/">
                <img className="w-10 h-10" src="/navbar/gmail.png" alt="" />
                <span className="text-sm">Gmail</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://meet.google.com/">
                <img className="w-10 h-10" src="/navbar/google-meet.png" alt="" />
                <span className="text-sm">Meet</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://chat.google.com/">
                <img className="w-10 h-10" src="/navbar/chat.png" alt="" />
                <span className="text-sm">Chat</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://contacts.gmail.com/">
                <img className="w-10 h-10" src="/navbar/contacts.png" alt="" />
                <span className="text-sm">Contacts</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US">
                <img className="w-10 h-10" src="/navbar/google-auth.png" alt="" />
                <span className="text-sm">Authenticator</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://messages.google.com/">
                <img className="w-10 h-10" src="/navbar/messages.png" alt="" />
                <span className="text-sm">Messages</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://translate.google.com/">
                <img className="w-10 h-10" src="/navbar/google-translator.png" alt="" />
                <span className="text-sm">Translator</span>
              </a>
              <a className="flex items-center gap-1 flex-col hover:bg-[#222] justify-center rounded-md p-2 h-fit w-16 mb-4"
                href="https://calendar.google.com/">
                <img className="w-10 h-10" src="/navbar/calendar.png" alt="" />
                <span className="text-sm">Calendar</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

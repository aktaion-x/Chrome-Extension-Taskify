import { useState } from "react";
import Icons from "../Icons";
import { SitesType } from "../../types/SiteTypes";
export type AddSiteType = {
  setOpenAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSites: React.Dispatch<React.SetStateAction<SitesType>>;
}


function AddSite({ setOpenAddPopup, setSites }: AddSiteType) {
  const [url, setUrl] = useState("https://")
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url || !name) {
      setError("Please fill all required Fields!")
      return
    }

    const domain = new URL(url);

    setSites(sites => [...sites, { url: domain.origin, name, icon: `https://www.google.com/s2/favicons?domain=${domain.hostname}&sz=128` }])
    setOpenAddPopup(false)
  }

  return (
    <div className="w-full h-full top-0 left-0 z-50 bg-[#00000090] absolute shadow-2xl">
      <div className="lg:w-2/6 max-w-[500px] w-4/6 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-[#0a0a0a] rounded px-8 py-5">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="flex justify-between items-start">
            <h2 className="text-xl mb-6">Add Site</h2>
            <span onClick={() => setOpenAddPopup(false)} className="btn rounded-full p-1">
              <Icons name="CLOSE" className="w-5 h-5" />
            </span>
          </div>
          <label className="flex flex-col gap-1 mb-8">
            <span className="text-sm">URL</span>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className="bg-[#202124] px-3 py-1 text-sm border-gray-500 outline-none border rounded" type="text" placeholder="Site URL" autoFocus />
          </label>
          <label className="flex flex-col gap-1 mb-8">
            <span className="text-sm">Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="bg-[#202124] px-3 py-1 text-sm border-gray-500 outline-none border rounded" type="text" placeholder="Site Name" />
          </label>
          {error && (<div className="text-red-100 text-xs">{error}</div>)}
          <button className="btn px-4 py-1 mx-auto block rounded-md mt-16">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSite;

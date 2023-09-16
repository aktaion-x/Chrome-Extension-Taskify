import { SitesType } from "../../types/SiteTypes";
import Icons from "../Icons";

type ViewSitesType = {
  setOpenAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
  sites: SitesType;
  handleDelete: (index: number) => void;
}


function ViewSites({ setOpenAddPopup, sites, handleDelete }: ViewSitesType) {
  /* Alt + siteNumber */

  return (
    <div className="relative rounded-lg mb-8 bg-[#00000024]  max-w-[90%]">
      <div className="flex justify-center gap-10 items-center px-10 ">
        {sites.map((site, index) => {
          if (index < 10) {
            return (
              <div key={index} className="sites relative">
                <a href={site.url} className="flex flex-col relative py-5 items-center gap-2" >
                  <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#121314] rounded-full hover:scale-110 transition">
                    <img className="w-[24px] h-[24px] rounded" src={site.icon} alt="" />
                  </div>
                  <span className="text-xs">{site.name}</span>
                </a>
                <div className="delete-site btn rounded-lg absolute top-3 opacity-0 transition-all -right-2 p-[1px]" onClick={() => handleDelete(index)}><Icons name="CLOSE" /></div>
              </div>
            )
          }
        })}
      </div>
      <div onClick={() => setOpenAddPopup(true)} className="absolute top-0 right-0 rounded-md px-2 py-2 text-xs btn translate-x-1/2 -translate-y-1/2 ">
        Add
      </div>
    </div>
  );
}

export default ViewSites;

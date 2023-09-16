import { useEffect, useState } from "react";
import AddSite from "./AddSite";
import ViewSites from "./ViewSites";
import { SitesType } from "../../types/SiteTypes";


function Sites() {
  const [sites, setSites] = useState<SitesType>([])
  const [openAddPopup, setOpenAddPopup] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('sites') && localStorage.getItem('sites') != "[]") {
      setSites(JSON.parse(localStorage.getItem('sites')!))
    } else {
      const defaultSites = [
        {
          "url": "http://google.com",
          "name": "google",
          "icon": "https://www.google.com/s2/favicons?domain=google.com&sz=128"
        },
        {
          "url": "http://github.com",
          "name": "github",
          "icon": "https://www.google.com/s2/favicons?domain=github.com&sz=128"
        },
        {
          "url": "https://linkedin.com",
          "name": "linkedin",
          "icon": "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128"
        },
        {
          "url": "https://www.youtube.com",
          "name": "Youtube",
          "icon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128"
        }
      ]
      localStorage.setItem('sites', JSON.stringify(defaultSites))
      setSites(defaultSites)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('sites', JSON.stringify(sites))
  }, [sites])

  const handleDelete = (index: number) => {
    setSites((s) => (s.filter((_, i) => i !== index)))
  }

  return (
    <>
      <ViewSites sites={sites} setOpenAddPopup={setOpenAddPopup} handleDelete={handleDelete} />
      {openAddPopup && <AddSite setOpenAddPopup={setOpenAddPopup} setSites={setSites} />}
    </>
  );
}

export default Sites;

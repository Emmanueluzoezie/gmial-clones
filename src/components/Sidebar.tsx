import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { BsFillPencilFill } from "react-icons/bs"
import { GiCancel, GiPerspectiveDiceSixFacesThree } from 'react-icons/gi'
import { useContextState } from '../context/contextProvider'
import { leftSideBarLink } from '../data/data'
import "./sidebar.css"

const Sidebar: React.FC = () => {
  const {sidebar, setSidebar, activeMenu, setActiveMenu, screenSize, setScreenSize} = useContextState()

  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
            <div className='navbar-item '>
                <GiPerspectiveDiceSixFacesThree className=''/>
                <h1 className=''>Mail</h1>
            </div>
            <TooltipComponent position='BottomCenter'>
            <span onClick={() => setSidebar(false)} className='sidebar-cancel'>
              <GiCancel style={{cursor:"pointer", border:"none"}}/>
            </span>
            </TooltipComponent>
        </div>
      <div className='sidebar-items compose'>
        <BsFillPencilFill className='items' />
        {activeMenu && <p className='items'>compose</p>}
      </div>
      <div className='sidebar-links'>
        {leftSideBarLink.map((item, index) => (
          <div className='sidebar-item' key={index}>
            <span className='items icons'>{item.icon}</span>
            <span className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
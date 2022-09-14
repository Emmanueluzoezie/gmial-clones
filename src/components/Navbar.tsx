import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineQuestionCircle, AiOutlineSearch } from 'react-icons/ai'
import { TooltipComponent} from "@syncfusion/ej2-react-popups"
import { GiPerspectiveDiceThree } from "react-icons/gi"
import { BiAbacus } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { SiCarthrottle } from 'react-icons/si'
import { useContextState } from '../context/contextProvider'
import "./navbar.css"

const Navbar = () => {
    const {sidebar, setSidebar, screenSize, setScreenSize, activeMenu, setActiveMenu} = useContextState()

    useEffect(()=> {
        const handleSidebar = () => setScreenSize(window.innerWidth)
    
        window.addEventListener('resize', handleSidebar)
        handleSidebar()
    
        return () => window.removeEventListener('resize', handleSidebar)
      },[])
    
      useEffect(() => {
        if(screenSize !== undefined && screenSize <= 768){
          setSidebar(false)
          setActiveMenu(true)
        } else{
          setSidebar(true)
          setActiveMenu(true)
        }
      },[screenSize])

  return (
    <div style={{padding:"16px"}}>
        <nav className='navbar'>
        <div className='navbar-item logo'>
            <TooltipComponent content="Settings" position='BottomCenter'>
            <span onClick={() => setActiveMenu(prev => !prev)} className='nav-item navbar-icon'>
              <AiOutlineMenu style={{cursor:"pointer", border:"none"}}/>
            </span>
            </TooltipComponent>
            <div className='navbar-item'>
                <GiPerspectiveDiceThree className=' nav-item-mobile'/>
                <h1 className='nav-item-mobile'>Mail</h1>
            </div>
        </div>
        <div className='navbar-items-main'>
            <div className='search-navbar'>
            <AiOutlineMenu className='nav-item menu-mobile' onClick={() => setSidebar(prev => !prev)}/>
                <AiOutlineSearch className=''/>
                <input placeholder='search mail' className='navbar-input'/>
                <BiAbacus className='nav-item-mobile'/>
            </div>
        </div>
        <div className='navbar-item nav-item-mobile' style={{marginLeft:"20px"}}>
            <AiOutlineQuestionCircle className='nav-item'/>
            <FiSettings className='nav-item'/>
            <SiCarthrottle className='nav-item'/>
        </div>
        <div className='avatar'></div>
    </nav>
    </div>
  )
}

export default Navbar


import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface IstateContext {
  sidebar:boolean
  setSidebar: Dispatch<SetStateAction<boolean>>
  screenSize: number | undefined, 
  setScreenSize: Dispatch<SetStateAction<number | undefined>>, activeMenu: boolean, 
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const initialState = {
  sidebar: false,
  setSidebar:  () => false,
  screenSize: 0,
  setScreenSize:  () => 0,
   activeMenu: false, 
   setActiveMenu:  () => false,

}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
  children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({children}) => {
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <StateContext.Provider value={{sidebar, setSidebar, screenSize, setScreenSize, activeMenu, setActiveMenu}}>
      {children}
    </StateContext.Provider>
  )
}

export const useContextState = () => useContext(StateContext)
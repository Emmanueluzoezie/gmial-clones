import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useContextState } from './context/contextProvider';

function App() {
  const {sidebar, setActiveMenu} = useContextState()

  return (
    <div className="App">
      <Navbar />

      {sidebar? (
        <div className=''>
            <Sidebar />
          </div>
        ) : ("") 
      }
      <div>
      <h1>let's start</h1>
      </div>

    </div>
  );
}

export default App;



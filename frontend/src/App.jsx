import React from 'react'
import Home from './components/home/Home'
import { Route, Routes} from "react-router-dom";
import Courses from './components/courses/Courses';
import Signup from './components/Signup';
import Contacts from './components/contacts/Contacts';
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Courses/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Contact" element={<Contacts/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

import './App.css';
import  { Navbar }  from './component/Navbar'
import {Routes,Route} from 'react-router-dom'
import { Login } from './authentication/Login';
import { Signup } from './authentication/Signup';

import { Contact } from './component/Contact';
import { Home } from './component/Home';
import { Question } from './component/Question';
import { Tags } from './component/Tags';
import { QueAns } from './component/QueAns';

// import Home from './component/Home';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  
  return (
    <>
    
      <div className='App'> 
      <Navbar/>
    
  <Routes>

    
    {/* <Route path = "/Navbar" element = {<Navbar/>}></Route> */}
    <Route path = "/Home" element = {<Home/>}></Route>
    
    <Route path = "/Contact" element = {<Contact/>}></Route>
    <Route path = "/Question" element = {<Question/>}></Route>
    <Route path = "/Tags" element = {<Tags/>}></Route>
    <Route path="/queans" element={<QueAns/>}></Route>
    <Route path = "/Login" element = {<Login/>}></Route>
    <Route path = "/Signup" element = {<Signup/>}></Route>
  </Routes>

  </div> 
   </> 

  );
}

export default App;

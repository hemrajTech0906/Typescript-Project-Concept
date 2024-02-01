import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'
import FunComp from './components/FunComp'
import YouTube from './components/YouTube'
import Login from './components/Login'
import UserList from './components/UserList'
//import { Route,Router,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './components/Details'

function App() {
 const [count, setCount] = useState(0)

  return (
    <>

       {/* <Counter/>
       <FunComp  /> 
      <YouTube/>
      <Login/>
      <UserList/>  */}


       {/* <Router>

        <Route exact path="/" element={<Home/>} />
        </Router> */}
{/*         
       <Route path="/" exact component={Home} />
       <Route path="/" exact component={Home} />
       <Route path="/" exact component={Home} />

       <Route path="/" exact component={Home} />
       <Route path="/" exact component={Home} />

       <Route path="/" exact component={Home} /> */}



<Router>
  <Navbar/>
  <Routes>
    <Route  path="/home"  element={<Home/>}/>
    <Route path="/counter" element={<Counter/>}/>
    {/* name={''} title={''} pass as props in funcComp */}
    <Route path="/FunComp" element={<FunComp />}/>
    <Route path="/youtube" element={<YouTube/>}/>
    <Route path="/LOGIN" element={<Login/>}/>
    <Route path="/userlist" element={<UserList/>}/>
    <Route path='/Details/:id' element={<Details/>}/>


  </Routes>
</Router>
{/* <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/books/:id" element={<UpdateCom />} exact />
       
      </Routes>
      <Footer />
    </Router> */}


       
      
    </>
  )
}

export default App

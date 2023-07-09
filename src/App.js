import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

 const[alert,setalert] =useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type 
    }) 
    //5secs
    setTimeout(() => {
      setalert(null) 
      }, 2000);

     
  }


  // Whther dark mode is enabled or not
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light Mode is enabled","success")  
      document.title='TextUtils-Light Mode';
    
    }else{
        setMode("dark")
        document.body.style.backgroundColor='rgb(34,30,30)'
        showAlert("Dark Mode is enabled","success")
        // setInterval(()=>{
        //   document.title='TextUtils is amazing';  
       
        // },2000)
        // setInterval(()=>{
        //   document.title='Install TextUtils Now';  
       
        // },1500)
      };

  }
  return (
    <>
     {/* <Router>    */}
         <Navbar title="TextUtils" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
         <Alert alert={alert}/>
         <div className="container my-3">
                      {/* <Switch>
                        <Route exact path="/about" >
                          <About/>
                        </Route> */}
                        {/* <Route exact path="/"> */}
                            <TextForm
                              showAlert={showAlert}
                              heading="Enter Text to analyze "
                              mode={mode}
                            />
                          
                        {/* </Route> */}
                  {/* </Switch> */}
         </div>
                
      {/* </Router>   */}
    </>
  );
}

export default App;

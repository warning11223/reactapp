import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Friends from "./Components/Friends/Friends";



function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav/>

          <div className="app-wrapper-content">
              <Route path='/content' component={Content}/>
              <Route path='/dialogs' component={Dialogs}/>
              <Route path='/news' component={News}/>
              <Route path='/friends' component={Friends}/>
          </div>
        </div>
        </BrowserRouter>
    )
}

export default App;

import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Friends from "./Components/Friends/Friends";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";



function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Nav/>

          <div className="app-wrapper-content">
              <Route path='/content' render={ () => <Content state={props.state.contentPage}/>}/>
              <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} />}/>
              <Route path='/news' render={ () => <News/>}/>
              <Route path='/friends' render={() => <Friends/>}/>
          </div>
        </div>
        </BrowserRouter>
    )
}

export default App;

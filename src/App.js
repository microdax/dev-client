import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Header from './component/header/header.jsx'

class App extends React.Component{
    // here will be add the user state
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route />
                        {/* 
                        <Route exact path='/' component={HomePage} />
                        there will bee add some navigation and the page 
                        */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
    
}

export default App

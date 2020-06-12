import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Header from './component/headerfooter/header.jsx'
import Footer from './component/headerfooter/footer.jsx'
import HomePage from './pages/nav-homepage/homepage.jsx'
import Blog from './pages/nav-blog/blog.jsx'

import '../src/assets/sass/style.scss'

const Mom = () => (
    <div>
        <h1>Tralalal</h1>
    </div>
)

const Mom2 = () => (
    <div>
        <h1>Tralalal2</h1>
    </div>
)
   

function App () {
    return(
        <div id="wrapper" className="wrapper-with-transparent-header">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/blog' component={Blog}/>
                {/* 
                
                there will bee add some navigation and the page 
                */}
            </Switch>
            <Footer />    
        </div>     
    )
}

export default App

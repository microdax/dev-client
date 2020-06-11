import React from 'react'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Header from './component/headerfooter/header.jsx'
import Footer from './component/headerfooter/footer.jsx'
import HomePage from './pages/nav-homepage/homepage.jsx'
import Blog from './pages/nav-blog/blog.jsx'

// import './assets/css/style.css'
// import './assets/css/bootstrap-grid.css'

class App extends React.Component{
    // here will be add the user state
    render(){
        return(
            <div id="wrapper" className="wrapper-with-transparent-header">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' component={HomePage} />
                        <Route path='/blog' component={Blog}/>
                        {/* 
                        
                        there will bee add some navigation and the page 
                        */}
                    </Switch>
                    <Footer />         
                </BrowserRouter>
            </div>
        )
    }
    
}

export default App

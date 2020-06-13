import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Header from './component/headerfooter/header.jsx'
import Footer from './component/headerfooter/footer.jsx'
import HomePage from './pages/nav-homepage/homepage.jsx'
import ProductNeed from './pages/nav-product.needed/product-needed.jsx'
import ProductSell from './pages/nav-product.sell/product-sell.jsx'
import Blog from './pages/nav-blog/blog.jsx'

import './assets/sass/style.scss'

class App extends React.Component{
    render(){
        return(
            <div id="wrapper" className="wrapper-with-transparent-header">
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/needs' component={ProductNeed}/>
                    <Route exact path='/sells' component={ProductSell}/>
                    <Route path='/blog' component={Blog}/>
                </Switch>
                <Footer />    
            </div>     
        )
    }    
}

export default App

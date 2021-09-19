import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About'
import Error from './components/Error'
import Cart from './components/Cart'
import Auth from './components/Auth'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Collection from './components/Collection'

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route path='/product'>
            <Collection />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  )
}
export default App

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About'
import Error from './components/Error'
import Cart from './components/Cart'
import Auth from './components/Auth'
//navbar
import Navbar from './components/Navbar/Navbar'
//footer
import Footer from './components/Footer/Footer'
//product
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Collection from './components/Collection'
import Product from './components/Product'

// const url = 'https://fakestoreapi.com/products?limit=6'

function App() {
  //   const [loading, setLoading] = useState(true)
  //   const [collection, setCollection] = useState([])

  //   const removeProduct = (id) => {
  //     const newCollection = collection.filter((product) => product.id !== id)
  //     setCollection(newCollection)
  //   }

  //   const fetchcollection = async () => {
  //     setLoading(true)
  //     try {
  //       const response = await fetch(url)
  //       const collection = await response.json()
  //       setLoading(false)
  //       setCollection(collection)
  //     } catch (error) {
  //       setLoading(false)
  //       console.log(error)
  //     }
  //   }
  //   useEffect(() => {
  //     fetchcollection()
  //   }, [])
  //   if (loading) {
  //     return (
  //       <main>
  //         <Loading />
  //       </main>
  //     )
  //   }
  //   if (collection.length === 0) {
  //     return (
  //       <main>
  //         <div>
  //           <h2>no collection left</h2>
  //           <button onClick={() => fetchcollection()}>refresh</button>
  //         </div>
  //       </main>
  //     )
  //   }
  //   return (
  //     <main>
  //       <Collection collection={collection} removeProduct={removeProduct} />
  //     </main>
  //   )
  return (
    <main>
      <h2>Codecademy E-Commerce APP</h2>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/collection'>
            <Collection />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route path='/product/:id' children={<Product />}></Route>
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

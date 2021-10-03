import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import Auth from "./pages/Account/Account";
import Collection from "./pages/Product/Collection";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route path="/product">
            <Collection />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}
export default App;

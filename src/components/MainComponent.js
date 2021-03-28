import React from "react";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";

function Main(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route path="/menu" component={Menu} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Main;

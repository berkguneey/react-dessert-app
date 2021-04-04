import React, { useEffect } from "react";
import Header from "./HeaderComponent";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useParams,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import { fetchDesserts } from "../redux/ActionCreators";
import DessertDetail from "./DessertDetailComponent";

function Main(props) {
  const { desserts, fetchDesserts } = props;
  useEffect(() => {
    fetchDesserts();
  }, [fetchDesserts]);

  const DessertWithId = () => {
    const { dessertId } = useParams();
    return (
      <DessertDetail
        dessert={
          desserts.desserts.filter(
            (dessert) => dessert.id === parseInt(dessertId)
          )[0]
        }
      />
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route
            exact
            path="/menu"
            component={() => <Menu desserts={desserts} />}
          />
          <Route path="/menu/:dessertId" component={DessertWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    desserts: state.desserts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDesserts: () => {
    dispatch(fetchDesserts());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

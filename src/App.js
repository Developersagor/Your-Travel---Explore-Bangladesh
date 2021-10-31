import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageOrders from "./components/ManageAllOrders/ManageOrders";
import AddServices from "./components/AddServices/AddServices";
import Header from "./components/Shared/Header/Header";
import FooterPage from "./components/Shared/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/Login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path="/addService">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <FooterPage></FooterPage>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

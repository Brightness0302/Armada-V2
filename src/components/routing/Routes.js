import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../layout/FourNotFour";
import AlertCard from "../layout/Alert";
import { Col } from "react-bootstrap";

const Routes = () => {
  return (
    <section className="container">
      <Col className="text-center d-flex justify-content-around">
        <AlertCard />
      </Col>
      <Switch>
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

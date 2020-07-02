import React from "react";
import { Toolbar } from "@material-ui/core";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "../components/navBar/navbar";
// import { SummaryUserData } from "../context/summaryData";
import ImageNav from "../components/imgLayout/imgNav/imgNav";

import GeneralImages from './subImageProfile/generalImg';
import FacenbookImages from './subImageProfile/facebookImg';
import TwitterImages from './subImageProfile/twitter';
import LinkedinImages from './subImageProfile/linkedin';
import PinterestImages from './subImageProfile/pinterest';
import InstagramImages from './subImageProfile/instagram'



const ImagesDashboard = (props) => {
  const localData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      <Navbar
        isAuth={localData.email ? true : false}
        email={
          localData.email
            ? localData.email.substring(0, localData.email.indexOf("@"))
            : "login"
        }
      />
      <Toolbar />

      <div>
        <ImageNav/>
      </div>

        <Switch>
          <Route path="/images/facebook" component={FacenbookImages} />
          <Route path="/images/twitter" component={TwitterImages} />
          <Route path="/images/linkedin" component={LinkedinImages} />
          <Route path="/images/pinterest" component={PinterestImages} />
          <Route path="/images/instagram" component={InstagramImages} />
          <Route path={'/images'} component={GeneralImages} exact/>
          <Redirect to="/images"/>
        </Switch>
      </div>
  );
};

export default ImagesDashboard;

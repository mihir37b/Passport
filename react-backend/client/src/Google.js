import clientId from "./secrets";
import GoogleLogin from "react-google-login";
import React, { Component } from "react";

export default class Google extends Component {
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login With Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Login.css';
import { GITHUB_AUTH_URL } from '../../constants';
import { Link, Redirect } from 'react-router-dom';
import githubLogo from '../../img/github-logo.png';

class Login extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      );
    }

    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Login to Lambda Hackathon</h1>
          <SocialLogin />
        </div>
      </div>
    );
  }
}

class SocialLogin extends Component {
  render() {
    return (
      <div className="social-login">
        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
          <img src={githubLogo} alt="Github" /> Log in with Github
        </a>
      </div>
    );
  }
}

export default Login;

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';
import {HashRouter, BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import RouterComponent from '../router/RouterComponent';

const moveTokenCookieToLocalStorage = () => {
  try {
    const token = document.cookie
      .split(';')
      .find((cookie) => cookie.includes('token='))
      .split('=')[1];
    deleteCookie('token');
    localStorage.token = token;
  } catch (e) {
    return undefined;
  }
};

const deleteCookie = function (name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  moveTokenCookieToLocalStorage();
  return (
    <AppStyle>
      {/* <HashRouter> */}
      <Router>
        <RouterComponent />
      </Router>
      {/* </HashRouter> */}
    </AppStyle>
  );
};

export default App;

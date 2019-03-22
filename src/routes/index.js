import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/Header';
import { UseState } from '../containers/';
import list from './list';

const MuiRouter = ({ name, Component }) => (
  <span>
    <Route path={'/' + name} component={Component} />
  </span>
);

export default () => (
  <Router>
    <Fragment>
      <Header list={list} />
      <hr />
      <Route exact path='/' component={UseState} />
      {list.map(item => <MuiRouter {...item} key={item.id} />)}
    </Fragment>
  </Router>
);
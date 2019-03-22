import React, { Fragment } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Header from '../components/Header';
import { UseState, UseEffect, EventLoop, FetchData } from '../containers/';

const list = [
  {
    id: 'state',
    name: 'useState',
    Component: UseState
  },
  {
    id: 'effect',
    name: 'useEffect',
    Component: UseEffect
  },
  {
    id: 'loop',
    name: 'eventLoop',
    Component: EventLoop
  },
  {
    id: 'fetch',
    name: 'fetchData',
    Component: FetchData
  }
];

const MuiRouter = ({ name, id, Component }) => (
    <Route path={'/'+name} component={Component} key={id}/>
);

export default  () => (
  <Router>
    <Fragment>
      <Header list={list}/>
      <hr />
      <Route exact path='/' component={UseState}/>
      {list.map(item =>  <MuiRouter {...item} /> )}
    </Fragment>
  </Router>
);
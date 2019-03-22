import { UseState, UseEffect, EventLoop, FetchData } from '../containers/';

export default [
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

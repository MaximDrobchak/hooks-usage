import React, { Component } from 'react';
import { MainContainer, Button } from '../../components';

export default class extends Component {
    constructor(props){
      super(props);

      this.state = {
        result: 0
      }

      this.onIncrement = this.onIncrement.bind(this);
    }

    componentDidMount() {
      setTimeout(() => {
        console.log(`You clicked ${this.state.result} times`);
      }, 3000);
    }

    componentDidUpdate() {
      setTimeout(() => {
        console.log(`You clicked ${this.state.result} times`);
      }, 3000);
    }

    onIncrement(){
      this.setState({ result: this.state.result + 1 });
    }

    render() {
      return (
      <MainContainer result={this.state.result} title='class'>
        <Button onClick={this.onIncrement} >increment</Button>
      </MainContainer>
      )
    }
}
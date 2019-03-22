import React, { Component } from 'react';
import { MainContainer, Button } from '../../components';

export default class extends Component {
    constructor(props){
      super(props);

      this.state = {
        result: 0
      }

      this.onIncrement = this.onIncrement.bind(this);
      this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(){
      this.setState(state => ({ result: state.result + 1 }) );
    }

    onDecrement(){
      this.setState(state => ({ result: state.result - 1 }) );
    }

    render() {
      return (
      <MainContainer result={this.state.result} title='class'>
        <Button onClick={this.onIncrement} >increment</Button>
        <hr />
        <Button onClick={this.onDecrement}>decrement</Button>
      </MainContainer>
      )
    }
}
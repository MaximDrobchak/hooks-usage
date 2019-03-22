import React, { Component } from 'react';
import { MainContainer, Input } from '../../components';


export default class extends Component {
    constructor(props){
      super(props);

      this.state = {
        result: ''
      }

      this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
      document.title = this.state.result;
    }

    componentDidUpdate(){
      document.title = this.state.result;
    }
    componentWillUnmount(){
      document.title = '';
    }
    onChange(e){
      this.setState({ result: e.target.value });
    }

    render() {
      return (
      <MainContainer result={this.state.result} title='class'>
        <Input onChange={this.onChange} />
      </MainContainer>
      )
    }
}
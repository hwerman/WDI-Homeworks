import React, { Component } from 'react';
import Account from './Account';
import logo from './ga.png';

class App extends Component {
  constructor(){
    super();
    this.state={
      accountOneName: 'C',
      accountOneBalance: 0,
      accountTwoName: 'S',
      accountTwoBalance: 0
      };
    }

  depositMoneyOne(amount){
    this.setState({
      accountOneBalance: this.state.accountOneBalance + amount
    })
  }

  depositMoneyTwo(amt){
    this.setState({
      accountTwoBalance: this.state.accountTwoBalance + amt
    })
  }

  withdrawMoneyOne(value){
    if (value < this.state.accountOneBalance){
    this.setState({
      accountOneBalance: this.state.accountOneBalance - value
    })}
    else{
    this.setState({
      accountOneBalance: 0
    })}
  }

  withdrawMoneyTwo(val){
  if (val < this.state.accountTwoBalance){
    this.setState({
      accountTwoBalance: this.state.accountTwoBalance - val
    })}
    else{
    this.setState({
      accountTwoBalance: 0
    })}
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
          <Account name={'Checking'} balance={this.state.accountOneBalance} num={this.depositMoneyOne.bind(this)} sub={this.withdrawMoneyOne.bind(this)} />
          <Account name={'Savings'} balance={this.state.accountTwoBalance} num={this.depositMoneyTwo.bind(this)} sub={this.withdrawMoneyTwo.bind(this)} />
          <div className="clear"></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Account extends Component {
  constructor(props){
    super(props);
    this.state={
      number: ''
    };
    this.handlePayment =
      this.handlePayment.bind(this);
  }

  handlePayment(event){
    this.setState({
      number: event.target.value})
  }

  //Krystyna Malewski and Joey Pinhas helped with this section:
  handleClass(){
    if (this.props.balance <= 0){
      return 'balance zero'
    }
    else{
      return 'balance'
    }
  }

  render(){
    return (
      <div className="account">
        <h2>TODO: {this.props.name}</h2>
        <div className={this.handleClass()}>${this.props.balance}</div>
        <input type="text" placeholder="enter an amount" onChange={this.handlePayment} />
        <input type="button" value="Deposit" onClick={() => this.props.num(parseInt(this.state.number))}/>
        <input type="button" value="Withdraw" onClick={() => this.props.sub(parseInt(this.state.number))}/>
      </div>
    )
  }
}

export default Account;

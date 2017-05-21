import React, { Component } from 'react';

export default class Account extends Component {

    constructor (props){
      super()
      this.state = {
        balance : 0
      }
    }
    handleDeposit(e){
      e.preventDefault()
      let amount = +this.refs.amount.value
      let newBalance = (this.state.balance + amount);
      console.log(amount)
      this.setState({
        balance:newBalance
        })
        this.refs.amount.value = '';
    }

    handleWithdraw(e){
      e.preventDefault()
      let amount = +this.refs.amount.value
      let newBalance = (this.state.balance - amount);
      if(newBalance < 0){
        alert("insufficient funds");
      }else{
      this.setState({
        balance:newBalance
      })
    }
      this.refs.amount.value = '';
    }

  render() {
     let balanceClass='balance';
    if (this.state.balance === 0) {
      balanceClass+=' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref='amount' required/>
        <input type="button" value="Deposit"  onClick={(e) => this.handleDeposit(e)}/>
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdraw(e)}/>
      </div>
    )
  }
}

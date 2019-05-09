import React, { Component } from 'react';
import './App.css';
import Budget from './components/Budget';
import InputComponent from './components/InputComponent';
import Operations from './components/Operations';
import Transactions from './components/Transactions';

const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      operations: [],
      showTransactions: false
    }
  }


  calculateBugget = () => {
    let result = 0
    for (let T of this.state.transactions)
      result += T.amount
    return result
  }

  withdraw = async (amount, vendor, category) => {
    console.log(amount, vendor, category)
  }

  deposit = async (amount, vendor, category) => {
    let params = {
      amount, vendor, category
    }
    await axios.post("http://localhost:8080/transaction", params)
    await this.reloadTransactions()
  }

  async reloadTransactions() {
    const transactions = await this.getTransactions()
    this.setState({ transactions })
  }

  async componentDidMount() {
    const operations = await this.getOperations()
    const transactions = await this.getTransactions()
    this.setState({ operations, transactions })
  }

  changeShowFlag = () => {
    this.setState({
      showTransactions: !this.state.showTransactions
    })
  }

  getTransactions = async () => {
    let arr = await axios.get("http://localhost:8080/transactions")
    return arr.data
  }

  getOperations = async () => {
    const result = [
      { amount: 1425, vendor: "Zlatan", category: "LifeStyle" },
      { amount: 51, vendor: "R2D2", category: "Movies" },
      { amount: 400, vendor: "somebody", category: "Salary" }
    ]
    return result
  }

  getCategories = () => {
    let arr = this.state.transactions.map(t => t.category)
    let unique = [...new Set(arr)]
    return unique
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.changeShowFlag}>Decide what to show</button>
        <Budget amount={this.calculateBugget()} />
        <InputComponent withdraw={this.withdraw} deposit={this.deposit} categories={this.getCategories()} />

        {this.state.showTransactions ? 
        <Operations operations={this.state.operations} /> 
        : 
        <Transactions transactions={this.state.transactions} />}
        
        {/* <Operations operations={this.state.operations} />
        <hr></hr>
        <Transactions transactions={this.state.transactions} /> */}
      </div>
    );
  }
}

export default App;

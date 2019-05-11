import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Budget from './components/Budget';
import InputComponent from './components/InputComponent';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import 'materialize-css/dist/css/materialize.min.css';

import Chart from 'react-google-charts';


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
    await this.saveTransaction({ amount: -amount, vendor, category })
  }

  deposit = async (amount, vendor, category) => {
    await this.saveTransaction({ amount, vendor, category })
  }
  
  saveTransaction = async params => {
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

  renderContainer = () => {
    return (
      <div class="col s9">
        <ul id="tabs-swipe-demo" class="tabs">
          <li class="tab col s6"><Link to="/">Transactions</Link></li>
          <li class="tab col s6"><Link to="/operations">Operations</Link></li>
        </ul>
        <Route exact path="/" render={() => <Transactions transactions={this.state.transactions} />} />
        <Route exact path="/operations" render={() => <Operations operations={this.state.operations} />} />
      </div>
    )
  }

  getArrayOfCategoryAndAmount = () => {
    let categories = this.getCategories()
    let arrData = []
    arrData.push(['Category Name', 'Amount'])
    for (let category of categories) {
      let curSumAmount = 0
      this.state.transactions.filter(T => (T.category === category) && (T.amount > 0))
        .forEach(T => curSumAmount += T.amount)

      let categoryAndAmount = [
        category,
        curSumAmount
      ]
      arrData.push(categoryAndAmount)
    }
    return arrData
  }

  renderPieChart = () => {
    return (
      <Chart className="chart"
        width={'100%'}
        height={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={this.getArrayOfCategoryAndAmount()}
        legendToggle={"false"}
        options={{
          title: 'Expenses by category',
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    )
  }

  renderInputBudgetChart = () => {
    return (
      <div class="col s3">
        {this.renderPieChart()}
        <Budget amount={this.calculateBugget()} />
        <InputComponent withdraw={this.withdraw} deposit={this.deposit} categories={this.getCategories()} />
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div class="row s12">
            {this.renderInputBudgetChart()}
            {this.renderContainer()}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    getListByCategories = category => {
        let arr = ['cat1', 'cat2', 'cat3']
        arr = this.createListByCategory(category)
        return arr
    }
    createListByCategory = category => {
        let arr = []
        arr = this.props.transactions.filter(T => T.category === category);
        return arr
    }
    render() {
        return (
            <table class="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Vendor</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.transactions.reverse().map(t => <Transaction
                                                                 getListByCategories={this.getListByCategories}
                                                                 transaction={t} />)}
                </tbody>
            </table>
        )
    }
}

export default Transactions;
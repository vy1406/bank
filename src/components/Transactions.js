import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {

    render() {
        return (
            <div className="transactions">
                <table class="highlight centered responsive-table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map(t => <Transaction transaction={t} />)}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Transactions;
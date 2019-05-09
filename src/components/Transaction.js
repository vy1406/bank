import React, { Component } from 'react';

class Transaction extends Component {

    render() {
        return (
            <div className="transaction">
                <div class="card">
                    <span>{this.props.transaction.amount} / </span> <span>{this.props.transaction.vendor}</span> / <span>{this.props.transaction.category}</span>
                </div>
            </div>
        )
    }
}

export default Transaction;
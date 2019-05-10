import React, { Component } from 'react';

class Transaction extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.transaction.amount} </td>
                <td>{this.props.transaction.vendor}</td>
                <td>{this.props.transaction.category}</td>
            </tr>
        )
    }
}

export default Transaction;
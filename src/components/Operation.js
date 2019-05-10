import React, { Component } from 'react';

class Operation extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.operation.amount} </td>
                <td>{this.props.operation.vendor}</td>
                <td>{this.props.operation.category}</td>
            </tr>
        )
    }
}

export default Operation;
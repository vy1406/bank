import React, { Component } from 'react';

class Operation extends Component {

    render() {
        return (
             <div className="operation">
                <span>{this.props.operation.amount}</span>/<span>{this.props.operation.vendor}</span>/<span>{this.props.operation.category}</span>
             </div>
        )
    }
}

export default Operation;
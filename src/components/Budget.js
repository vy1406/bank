import React, { Component } from 'react';

class Budget extends Component {

    render() {
        return (
             <div className="budget">
                <span>Budget: {this.props.amount}</span>
             </div>
        )
    }
}

export default Budget;
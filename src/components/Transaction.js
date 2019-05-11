import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Transaction extends Component {

    getListByCategories = () => {
        let arr = this.props.getListByCategories(this.props.transaction.category)
        return arr
    }
    renderListOfTransactionByCategory = () => {
        let arr = this.getListByCategories()
        let result = []
        for (let i = 0; i < arr.length; i++)
            result.push(arr[i])
        return arr
    }
    renderPopup = () => {
        return (
            <Popup
                trigger={<div className="menu-item"> {this.props.transaction.category}</div>}
                position="left"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
            >
                <div className="menu">
                    {this.renderListOfTransactionByCategory().map(c => <div>{c.amount} {c.vendor}</div>)}
                </div>
            </Popup>
        )
    }
    checkIfDeposit = amount => amount > 0 ? "deposit" : "withdraw" 

    render() {
        return (
            <tr>
                <td className={this.checkIfDeposit(this.props.transaction.amount)}>{this.props.transaction.amount} </td>
                <td>{this.props.transaction.vendor}</td>
                <td>{this.renderPopup()}</td>
            </tr>
        )
    }
}

export default Transaction;
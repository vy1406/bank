import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Transaction extends Component {

    showByCategory = () => {
        console.log(this.props.transaction.category)
        return (
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
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
    render() {
        return (
            <tr>
                <td>{this.props.transaction.amount} </td>
                <td>{this.props.transaction.vendor}</td>
                {/* <td onMouseEnter={this.showByCategory}>{this.props.transaction.category}</td> */}
                <td>{this.renderPopup()}</td>
            </tr>
        )
    }
}

export default Transaction;
import React, { Component } from 'react';

class InputComponent extends Component {
    constructor() {
        super()
        this.state = {
            vendor: "",
            amount: 0,
            category: "",
            isOperationsDisabled: true,
            isAddCategoryDisabled: true,
            isChooseCategoryDisabled: true
        }
    }

    withdraw = () => {
        this.props.withdraw(this.state.amount, this.state.vendor, this.state.category)
    }

    deposit = () => {
        this.props.deposit(this.state.amount, this.state.vendor, this.state.category)
    }

    getOptions = () => {
        const options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }]
        return options
    }

    handleChange = (event) => {
        this.checkIfToDisableOperations(event)
        this.setState({ [event.target.name]: event.target.value });
    }
    createOrChooseCategory = (event) => {
        if (event.target.value === "selected")
            this.setState({
                isChooseCategoryDisabled: false,
                isAddCategoryDisabled: true
            })
        else if ( event.target.value === "new" )
            this.setState({
                isChooseCategoryDisabled: true,
                isAddCategoryDisabled: false
            })
    }
    checkIfToDisableOperations = (event) => {
        if (!([event.target.name] === "category" && event.target.value === "-1"))
            this.setState({
                isOperationsDisabled: false
            })
    }
    createSelectItems = () => {
        let items = []
        items.push(<option value="-1" selected disabled hidden>Choose category</option>)
        for (let i = 0; i < this.props.categories.length; i++) {
            let curCategory = this.props.categories[i]
            let curOption = <option value={curCategory}>{curCategory}</option>
            items.push(curOption)
        }
        return items
    }

    render() {
        return (
            <div className="menu">
                <input type="number" name="amount" id="amount-input" onChange={this.handleChange} placeholder="Input Amount" />
                <input type="text" name="vendor" id="vendor-input" onChange={this.handleChange} placeholder="Input Vendor" />
                <div onChange={this.createOrChooseCategory} >
                    <input type="radio" value="new" name="category-type" />New Category
                    <input type="radio" value="selected" name="category-type" />Select Existing
                </div>
                <input type="text" name="category" id="vendor-input" onChange={this.handleChange} placeholder="Input New Category" disabled={this.state.isAddCategoryDisabled ? true : false} />

                <select id="category" name="category" onChange={this.handleChange}  disabled={this.state.isChooseCategoryDisabled ? true : false}>
                    {this.createSelectItems()}
                </select>
                <button onClick={this.withdraw} disabled={this.state.isOperationsDisabled ? true : false}>Withdraw</button>
                <button onClick={this.deposit} disabled={this.state.isOperationsDisabled ? true : false}>Deposit</button>
            </div>
        )
    }
}

export default InputComponent;
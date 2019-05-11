import React, { Component } from 'react';
import RadioButton from './RadioButton';
import SelectCategories from './SelectCategories';

class InputComponent extends Component {
    constructor() {
        super()
        this.state = {
            vendor: "",
            amount: 0,
            category: "",
            isAddCategoryDisabled: false,
            isChooseCategoryDisabled: false
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

    checkIfToDisableOperations = (event) => {
        if (!([event.target.name] === "category" && event.target.value === "-1"))
            this.setState({
                isOperationsDisabled: false
            })
    }
    createSelectItems = () => {
        let items = []
        for (let i = 0; i < this.props.categories.length; i++)
            items.push(this.props.categories[i])

        return items
    }
    AddCategoryOrChoose = isToChoose => { isToChoose ? this.chooseCategory() : this.addCategory() }
    getSelectedCategory = category => { this.setState({ category }) }

    chooseCategory = () => {
        this.setState({
            isChooseCategoryDisabled: false,
            isAddCategoryDisabled: false
        })
    }
    addCategory = () => {
        this.setState({
            isChooseCategoryDisabled: true,
            isAddCategoryDisabled: true
        })
    }
    render() {
        return (
            <div className="col s12">
                <div className="inputForm">
                    <div class="row">
                        <input type="number" name="amount" id="amount-input" onChange={this.handleChange} placeholder="Input Amount" />
                        <input type="text" name="vendor" id="vendor-input" onChange={this.handleChange} placeholder="Input Vendor" />

                        <input type="text" name="category" id="vendor-input" onChange={this.handleChange} placeholder="Input New Category" disabled={this.state.isAddCategoryDisabled ? false : true} />

                    </div>
                    <div class="row">
                        <div class="col s6 m6">
                            <div class="col-content">
                                <a class="waves-effect waves-light btn" onClick={this.withdraw} disabled={this.state.isOperationsDisabled ? true : false}>Withdraw</a>
                            </div>
                        </div>
                        <div class="col s6 m6">
                            <div class="col-content">
                                <a class="waves-effect waves-light btn" onClick={this.deposit} disabled={this.state.isOperationsDisabled ? true : false}>Deposit</a>
                            </div>
                        </div>
                    </div>
                </div>
                <RadioButton chooseCategory={this.AddCategoryOrChoose} />
                <SelectCategories
                    isDisabled={this.state.isChooseCategoryDisabled}
                    categories={this.createSelectItems()}
                    getSelectedCategory={this.getSelectedCategory}
                />
            </div>
        )
    }
}

export default InputComponent;
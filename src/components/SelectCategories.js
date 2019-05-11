import React, { Component } from 'react';
import Select from 'react-select';

class SelectCategories extends Component {
    constructor() {
        super()

    }
    getCategories = () => {
        let arr = []
        for (let i = 0; i < this.props.categories.length; i++)
            arr.push({
                label: this.props.categories[i],
                value: this.props.categories[i]
            })

        return arr
    }
    handleChange = (event) => { this.props.getSelectedCategory(event.value) }
    render() {
        return (
            <Select isDisabled={this.props.isDisabled} options={this.getCategories()} onChange={this.handleChange} />
        )
    }
}

export default SelectCategories;
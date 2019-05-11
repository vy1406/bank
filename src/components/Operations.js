import React, { Component } from 'react';
import Operation from './Operation'

class Operations extends Component {

    render() {
        return (
                <table class="highlight centered responsive-table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.operations.reverse().map(o => <Operation operation={o} />)}
                    </tbody>
                </table>
        )
    }
}

export default Operations;
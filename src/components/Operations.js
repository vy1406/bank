import React, { Component } from 'react';
import Operation from './Operation'

class Operations extends Component {

    render() {
        return (
             <div className="operations">
             <div>
                 OPERATIONS
             </div>
                {this.props.operations.map(o => <Operation operation={o}/>)}
             </div>
        )
    }
}

export default Operations;
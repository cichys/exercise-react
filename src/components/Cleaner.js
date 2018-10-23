import React, { Component } from 'react';

class Cleaner extends Component {

    render() {
        return (
            <div>
                <textarea onChange={this.props.onChangeJSON} />
                <textarea value={this.props.result} readOnly />
            </div>
        );
    }
}

export default Cleaner;
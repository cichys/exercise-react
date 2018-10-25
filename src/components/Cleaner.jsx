import React, { Component } from 'react';

class Cleaner extends Component {

    render() {
        return (
            <div className="cleaner">
                <textarea onChange={this.props.onChangeJSON} placeholder="Paste JSON here" />
                <textarea value={this.props.result} placeholder="Output" readOnly />
            </div>
        );
    }
}

export default Cleaner;
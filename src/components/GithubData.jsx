import React, { Component } from 'react';

class GithubData extends Component {

    render() {
        if (this.props.data.length === 0) {
            return null;
        }

        return this.props.data.map((el) => {
            return <div key={el.id}>{el.name}</div>;
        });
    }
}

export default GithubData;
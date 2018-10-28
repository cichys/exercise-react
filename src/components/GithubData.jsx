import React, { Component } from 'react';

import Table from '../components/Table';


class GithubData extends Component {

    dataToDisplay = [
        {
            key: 'full_name',
            label: 'Name'
        },
        {
            key: 'description',
            label: 'Description'
        }
    ];


    render() {
        if (this.props.data.length === 0) {
            return null;
        }

        return (
            <Table 
                data={this.props.data} 
                columns={this.dataToDisplay} 
            />
        );
    }
}

export default GithubData;
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


    previousPage = () => {
        this.props.previousPage();
    }


    nextPage = () => {
        this.props.nextPage();
    }


    render() {
        if (!this.props.data || this.props.data.length === 0) {
            return null;
        }

        return (
            <div>
                <Table 
                    data={this.props.data} 
                    columns={this.dataToDisplay} 
                />
                <button type="button" onClick={this.previousPage}>Previous page</button>
                <button type="button" onClick={this.nextPage}>Next page</button>
            </div>
            
        );
    }
}

export default GithubData;
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
                <div className="pagination">
                    <button type="button" onClick={this.previousPage}>&lt; Previous</button>
                    <button type="button" onClick={this.nextPage}>Next &gt;</button>
                </div>
            </div>
        );
    }
}

export default GithubData;
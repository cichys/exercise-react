import React, { Component } from 'react';

class Table extends Component {

    renderRows = () => {
        return this.props.data.map((el) => {
            return (
                <tr key={el.id}>
                    {this.renderCells(el)}
                </tr>
            );
        });
    }


    renderCells = (row) => {
        return this.props.columns.map((el) => {
            return <td key={el.key}>{row[el.key]}</td>
        });
    }


    renderTableHeaders = () => {
        return this.props.columns.map((el) => {
            return <th key={el.key}>{el.label}</th>
        });
    }


    render() {
        if (!this.props.data || this.props.data.length === 0) {
            return null;
        }

        return (
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        {this.renderTableHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

export default Table;
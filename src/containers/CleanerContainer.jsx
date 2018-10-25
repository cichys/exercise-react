import React, { Component } from 'react';
import Cleaner from '../components/Cleaner';
import clean from '../services/cleanerService';


class CleanerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultData: ''
        };
    }


    cleanData = (event) => {
        const data = clean(event.target.value);
        const result = (typeof data === 'object') ? JSON.stringify(data, null, ' ') : data;
        this.setState({resultData: result});
    }


    render() {
        return (
            <div>
                <Cleaner
                    onChangeJSON={this.cleanData}
                    result={this.state.resultData}
                />
            </div>
        );
    }
}

export default CleanerContainer;

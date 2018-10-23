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
        this.setState({resultData: data});
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

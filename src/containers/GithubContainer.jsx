import React, { Component } from 'react';

import getGithubRepos from '../services/githubService';
import GithubData from '../components/GithubData';


class GithubContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        getGithubRepos((response) => {
            this.setState({data: response});
        });
    }


    render() {
        return (
            <div>
                <GithubData data={this.state.data} />
            </div>
        );
    }
}

export default GithubContainer;

import React, { Component } from 'react';

import getGithubRepos from '../services/githubService';
import GithubData from '../components/GithubData';


class GithubContainer extends Component {

    since = 1;
    previousSince = null;


    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        this.getData();
    }


    previousPage = () => {
        this.since = this.previousSince;
        this.getData();
    }


    nextPage = () => {
        if (!this.state.data || this.state.data.length === 0) {
            return;
        }
        this.since = this.state.data[this.state.data.length - 1].id;
        this.getData();
    }


    getData = () => {
        this.previousSince = this.since === 1 || this.state.data.length === 0 ? null : this.state.data[0].id - 1;
        getGithubRepos(this.since, (response) => {
            this.setState({data: response});
        });
    }


    render() {
        return (
            <div>
                <GithubData 
                    data={this.state.data} 
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                />
            </div>
        );
    }
}

export default GithubContainer;

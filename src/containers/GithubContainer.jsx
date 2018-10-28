import React, { Component } from 'react';

import getGithubRepos from '../services/githubService';
import GithubData from '../components/GithubData';


class GithubContainer extends Component {

    since = 1;
    previousSinceByPage = [this.since];
    currentPage = 1;


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
        if (this.currentPage === 1) {
            return;
        }
        this.currentPage--;
        this.since = this.previousSinceByPage[this.currentPage - 1];
        this.getData();
    }


    nextPage = () => {
        if (!this.state.data || this.state.data.length === 0 || this.state.data.length < 100) {
            return;
        }
        this.previousSinceByPage[this.currentPage - 1] = this.since;
        this.currentPage++;
        this.since = this.state.data[this.state.data.length - 1].id;
        this.getData();
    }


    getData = () => {
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

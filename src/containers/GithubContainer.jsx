import React, { Component } from 'react';

import getGithubRepos from '../services/githubService';
import GithubData from '../components/GithubData';

class GithubContainer extends Component {

    since = 1;
    previousSinceByPage = [this.since];
    currentPage = 1;
    currentApiPage = 1;
    responseData = null;
    itemsPerPage = 10;


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
        if (!this.state.data || this.state.data.length === 0) {
            return;
        }
        if (this.currentPage % this.itemsPerPage === 0) {
            this.currentPage = 1;
            this.previousSinceByPage[this.currentApiPage - 1] = this.since;
            this.currentApiPage++;
            this.since = this.responseData[this.responseData.length - 1].id;
            this.getData();
        } else {
            this.currentPage++;
            const sliceFrom = (this.currentPage - 1) * this.itemsPerPage;
            this.setState({
                data: this.responseData.slice(sliceFrom, sliceFrom + this.itemsPerPage)
            });
        }
    }


    getData = () => {
        getGithubRepos(this.since).then(response => {
            this.setState({data: response.data.slice(0, 10)});
            this.responseData = response.data;
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

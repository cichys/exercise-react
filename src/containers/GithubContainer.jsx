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
        if (!this.state.data || this.state.data.length === 0) {
            return;
        }

        if (this.currentPage === 1 && this.currentApiPage > 1) {
            this.currentPage = this.itemsPerPage;
            this.currentApiPage--;
            this.previousSinceByPage[this.currentApiPage] = this.since;
            this.since = this.previousSinceByPage[this.currentApiPage - 1];
            this.getData(false);
        } else if (this.currentPage > 1) {
            this.currentPage--;
            const sliceFrom = (this.currentPage - 1) * this.itemsPerPage;
            this.saveStateData(sliceFrom);
        }
    }


    nextPage = () => {
        if (!this.state.data || this.state.data.length === 0) {
            return;
        }

        if (this.currentPage === this.itemsPerPage) {
            this.currentPage = 1;
            this.previousSinceByPage[this.currentApiPage - 1] = this.since;
            this.currentApiPage++;
            this.since = this.responseData[this.responseData.length - 1].id;
            this.getData();
        } else {
            this.currentPage++;
            const sliceFrom = (this.currentPage - 1) * this.itemsPerPage;
            this.saveStateData(sliceFrom);
        }
    }


    getData = (first = true) => {
        getGithubRepos(this.since).then(response => {
            this.responseData = response.data;

            const sliceFrom = first ? 0 : 90;
            this.saveStateData(sliceFrom);
        });
    }


    saveStateData = (from) => {
        this.setState({
            data: this.responseData.slice(from, from + this.itemsPerPage)
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

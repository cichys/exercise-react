import React, { Component } from 'react';

import CleanerContainer from './CleanerContainer';
import GithubContainer from './GithubContainer';


class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: 'cleaner'
        };
    }


    changePage = (page) => {
        this.setState({pageToDisplay: page});
    }


    renderPage = () => {
        if (this.state.pageToDisplay === 'cleaner') {
            return <CleanerContainer />;
        } else if (this.state.pageToDisplay === 'github') {
            return <GithubContainer />;
        }
    }


    render() {
        return (
            <div>
                <header>
                    <button onClick={() => this.changePage('cleaner')}>Cleaner</button>
                    <button onClick={() => this.changePage('github')}>Github API</button>
                </header>
                {this.renderPage()}
            </div>
            
        );
    }
}

export default PageContainer;
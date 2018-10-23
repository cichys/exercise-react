import React, { Component } from 'react';
import CleanerContainer from '../containers/CleanerContainer';
import '../assets/css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <CleanerContainer />
            </div>
        );
    }
}

export default App;

import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

import GithubContainer from '../containers/GithubContainer';
import response from '../tests/mock/githubResponse';

const mock = new MockAdapter(axios, { delayResponse: 0 });


describe('Github Container component', () => {

    beforeEach(() => {
        mock.onGet('https://api.github.com/repositories?since=1').reply(200, response);
    });


    afterEach(() => {
        mock.reset()
    });


    it('renders without crashing', () => {
        shallow(<GithubContainer />);
    });


    it('renders table', (done) => {
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            expect(wrapper.state('data').length).toEqual(100);
            done();
        }, 100)
    });
});


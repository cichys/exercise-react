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
        mock.onGet('https://api.github.com/repositories?since=370').reply(200, response);
    });


    afterEach(() => {
        mock.reset()
    });


    it('renders without crashing', () => {
        shallow(<GithubContainer />);
    });


    it('save data in state', (done) => {
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            expect(wrapper.state('data').length).toEqual(100);
            done();
        }, 100);
    });


    it('call github api with parameter "since" at 1', () => {
        let spy = jest.spyOn(axios, "get");
        shallow(<GithubContainer />);
        expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=1', expect.anything());
    });


    it('call github api on next page with correct parameter "since"', (done) => {
        let spy = jest.spyOn(axios, "get");
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            wrapper.instance().nextPage();
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=370', expect.anything());
            done();
        }, 100);
    });


    it('call github api on previous page with correct parameter "since"', (done) => {
        let spy = jest.spyOn(axios, "get");
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            wrapper.instance().nextPage();
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=370', expect.anything());
            wrapper.instance().previousPage();
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=1', expect.anything());
            done();
        }, 100);
    });
});


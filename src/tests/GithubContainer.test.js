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
            expect(wrapper.instance().responseData.length).toEqual(100);
            expect(wrapper.state('data').length).toEqual(10);
            done();
        }, 100);
    });


    it('call github api with parameter "since" at 1', (done) => {
        let spy = jest.spyOn(axios, "get");
        shallow(<GithubContainer />);
        setTimeout(o => {
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=1', expect.anything());
            done();
        }, 100);
    });


    it('call github api on 10th page with correct parameter "since"', (done) => {
        let spy = jest.spyOn(axios, "get");
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            paginateNextFor(wrapper, 9);
            expect(spy).not.toHaveBeenCalledWith('https://api.github.com/repositories?since=370', expect.anything());
            paginateNextFor(wrapper, 1);
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=370', expect.anything());
            done();
        }, 100);
    });


    it('call github api on previous page with correct parameter "since"', (done) => {
        let spy = jest.spyOn(axios, "get");
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            paginateNextFor(wrapper, 10);
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=370', expect.anything());
            paginatePrevFor(wrapper, 1);
            expect(spy).toHaveBeenCalledWith('https://api.github.com/repositories?since=1', expect.anything());
            done();
        }, 100);
    });


    it('paginate internally for first 10 pages', (done) => {
        const wrapper = shallow(<GithubContainer />);
        setTimeout(o => {
            expect(wrapper.instance().state.data[0].full_name).toEqual('wycats/merb-core');
            paginateNextFor(wrapper, 1);
            expect(wrapper.instance().state.data.length).toEqual(10);
            expect(wrapper.instance().state.data[0].full_name).toEqual('anotherjesse/s3');
            paginateNextFor(wrapper, 1);
            expect(wrapper.instance().state.data.length).toEqual(10);
            expect(wrapper.instance().state.data[0].full_name).toEqual('jamesgolick/enum_field');
            paginatePrevFor(wrapper, 1);
            expect(wrapper.instance().state.data.length).toEqual(10);
            expect(wrapper.instance().state.data[0].full_name).toEqual('anotherjesse/s3');
            done();
        }, 100);
    })
});


const paginateNextFor = (wrapper, times) => {
    for (let i = 0; i < times; i++) {
        wrapper.instance().nextPage();
    }
}


const paginatePrevFor = (wrapper, times) => {
    for (let i = 0; i < times; i++) {
        wrapper.instance().previousPage();
    }
}

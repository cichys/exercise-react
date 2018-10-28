import React from 'react';
import { shallow, render } from 'enzyme';

import GithubData from '../components/GithubData';
import response from '../tests/mock/githubResponse';


describe('Github Data component', () => {
    it('renders without crashing', () => {
        shallow(<GithubData />);
    });

    it('renders table', () => {
        const wrapper = render(<GithubData data={response} />);
        expect(wrapper.find('table').length).toEqual(1);
        expect(wrapper.find('table thead tr').length).toEqual(1);
        expect(wrapper.find('table tbody tr').length).toEqual(100);
    });

    it('renders cell contents', () => {
        const wrapper = render(<GithubData data={response} />);
        expect(wrapper.find('table').length).toEqual(1);
        expect(wrapper.find('table tbody tr').eq(0).find('td').eq(0).text()).toEqual('wycats/merb-core');
        expect(wrapper.find('table tbody tr').eq(0).find('td').eq(1).text()).toEqual('Merb Core: All you need. None you don\'t.');
    });

});


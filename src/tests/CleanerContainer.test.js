import React from 'react';
import { shallow } from 'enzyme';

import CleanerContainer from '../containers/CleanerContainer';


describe('Cleaner container', () => {
    it('renders without crashing', () => {
        shallow(<CleanerContainer />);
    });

    it('default result state', () => {
        const wrapper = shallow(<CleanerContainer />);
        expect(wrapper.state('resultData')).toEqual('');
    });

    it('default result state', () => {
        const wrapper = shallow(<CleanerContainer />);
        expect(wrapper.state('resultData')).toEqual('');
    });

    it('change state on clean', () => {
        const wrapper = shallow(<CleanerContainer />);
        expect(wrapper.state('resultData')).toEqual('');
        wrapper.instance().cleanData({target:{value: 'new_value'}});
        expect(wrapper.state('resultData')).toEqual('Not a valid JSON');
    });
});

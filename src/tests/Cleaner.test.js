import React from 'react';
import { shallow } from 'enzyme';

import Cleaner from '../components/Cleaner';


describe('Cleaner component', () => {
    it('renders without crashing', () => {
        shallow(<Cleaner />);
    });

    it('renders 2 textareas', () => {
        const wrapper = shallow(<Cleaner />);
        expect(wrapper.find('textarea').length).toEqual(2);
    });

    it('renders output textarea on readonly', () => {
        const wrapper = shallow(<Cleaner />);
        const textareaOutput = wrapper.find('textarea').at(1);
        expect(textareaOutput.props().readOnly).toEqual(true);
    })

    it('renders response in textarea', () => {
        const wrapper = shallow(<Cleaner result={'[{"id":10,"title":"House"}]'} />);
        const textareaOutput = wrapper.find('textarea').at(1);
        expect(textareaOutput.props().value).toEqual("[{\"id\":10,\"title\":\"House\"}]");
    });
});


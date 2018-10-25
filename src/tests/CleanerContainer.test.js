import React from 'react';
import { shallow } from 'enzyme';

import CleanerContainer from '../containers/CleanerContainer';


describe('Cleaner container', () => {
    it('renders without crashing', () => {
        shallow(<CleanerContainer />);
    });
});

import 'react-native';
import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { AppHeaderProps } from '../../interfaces';

import { AppHeader } from '../AppHeader';

const defaultProps: AppHeaderProps = {
    setStories: jest.fn(),
    stories: [],
};

describe('AppHeader component tests', () => {
    it('renders correctly with default props', () => {
        expect(
            render(<AppHeader {...defaultProps} />).toJSON(),
        ).toMatchSnapshot();
    });

    describe('When the sort button is not pressed', () => {
        it('should not invoke the setStories function', () => {
            const setStoriesSpy = jest.fn();
            render(<AppHeader {...defaultProps} setStories={setStoriesSpy} />);
            expect(setStoriesSpy).not.toHaveBeenCalled();
        });
    });

    describe('When the sort button is pressed', () => {
        it('should invoke the setStories function', () => {
            const setStoriesSpy = jest.fn();
            const { getByTestId } = render(
                <AppHeader {...defaultProps} setStories={setStoriesSpy} />,
            );
            const sortButton = getByTestId('sortButton');
            fireEvent(sortButton, 'onPress');
            expect(setStoriesSpy).toHaveBeenCalled();
        });
    });
});

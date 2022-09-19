import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { StoryItemProps } from '../../interfaces';

import { sampleStory } from '../__mocks__/sampleStory';
import { StoryItem } from '../StoryItem';

const defaultProps: StoryItemProps = {
    index: 0,
    showDialog: jest.fn(),
    story: {},
};

describe('StoryItem component tests', () => {
    it('renders correctly with default props', () => {
        expect(
            render(<StoryItem {...defaultProps} />).toJSON(),
        ).toMatchSnapshot();
    });

    describe('When the story item is not pressed', () => {
        it('should not invoke the setStories function', () => {
            const showDialogSpy = jest.fn();
            render(<StoryItem {...defaultProps} showDialog={showDialogSpy} />);
            expect(showDialogSpy).not.toHaveBeenCalled();
        });
    });

    describe('When the story item is pressed', () => {
        it('should invoke the setStories function', () => {
            const showDialogSpy = jest.fn();
            const { getByTestId } = render(
                <StoryItem {...defaultProps} showDialog={showDialogSpy} />,
            );
            const storyItem = getByTestId('storyItem');
            fireEvent(storyItem, 'onPress');
            expect(showDialogSpy).toHaveBeenCalled();
        });
    });
});

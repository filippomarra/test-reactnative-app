import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { StoryScrollViewProps } from '../../interfaces';

import { sampleStory } from '../__mocks__/sampleStory';
import { StoryScrollView } from '../StoryScrollView';

const defaultProps: StoryScrollViewProps = {
    isLoading: true,
    showDialog: jest.fn(),
    stories: [],
};

describe('StoryScrollView component tests', () => {
    it('renders correctly with default props', () => {
        expect(
            render(<StoryScrollView {...defaultProps} />).toJSON(),
        ).toMatchSnapshot();
    });

    describe('When isLoading is set to true', () => {
        it('should render the ActivityIndicator', () => {
            const { queryByTestId } = render(
                <StoryScrollView {...defaultProps} />,
            );
            expect(queryByTestId('loader')).not.toBeNull();
        });

        it('should not render the View', () => {
            const { queryByTestId } = render(
                <StoryScrollView {...defaultProps} />,
            );
            expect(queryByTestId('storyView')).toBeNull();
        });
    });

    describe('When isLoading is set to false', () => {
        it('should render the View', () => {
            const { queryByTestId } = render(
                <StoryScrollView {...defaultProps} isLoading={false} />,
            );
            expect(queryByTestId('storyView')).not.toBeNull();
        });

        it('should not render the ActivityIndicator', () => {
            const { queryByTestId } = render(
                <StoryScrollView {...defaultProps} isLoading={false} />,
            );
            expect(queryByTestId('loader')).toBeNull();
        });

        describe('When stories is empty', () => {
            it('should not render any StoryItem', () => {
                const { queryByTestId } = render(
                    <StoryScrollView {...defaultProps} isLoading={false} />,
                );
                const storyView = queryByTestId('storyView');
                expect(storyView?.children.length).toBe(0);
            });
        });

        describe('When stories is not empty', () => {
            it('should render the same number of StoryItem as the stories', () => {
                const { queryByTestId } = render(
                    <StoryScrollView
                        {...defaultProps}
                        isLoading={false}
                        stories={[sampleStory]}
                    />,
                );
                const storyView = queryByTestId('storyView');
                expect(storyView?.children.length).toBe(1);
            });
        });
    });
});

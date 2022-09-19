import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';

import { ModalProps } from '../../interfaces';

import { sampleStory } from '../__mocks__/sampleStory';
import { Modal } from '../Modal';

const defaultProps: ModalProps = {
    visible: false,
    hideDialog: jest.fn(),
    story: sampleStory,
};

describe('Modal component tests', () => {
    it('renders correctly with default props', () => {
        expect(render(<Modal {...defaultProps} />).toJSON()).toMatchSnapshot();
    });

    describe('When visible is set to false', () => {
        it('should not render the Modal', () => {
            const { queryByTestId } = render(<Modal {...defaultProps} />);
            expect(queryByTestId('modal')).toBeNull();
        });
    });

    describe('When visible is set to true', () => {
        it('should render the Modal', () => {
            const { queryByTestId } = render(
                <Modal {...defaultProps} visible={true} />,
            );
            expect(queryByTestId('modal')).not.toBeNull();
        });

        describe('When story url is undefined', () => {
            it('should not render the storyUrl link in the modal', () => {
                const sampleStoryCopy = { ...sampleStory };
                sampleStoryCopy.url = undefined;
                const { queryByTestId } = render(
                    <Modal
                        {...defaultProps}
                        visible={true}
                        story={sampleStoryCopy}
                    />,
                );
                expect(queryByTestId('storyUrl')).toBeNull();
            });
        });

        describe('When story url is defined', () => {
            it('should render the storyUrl link in the modal', () => {
                const { queryAllByTestId } = render(
                    <Modal {...defaultProps} visible={true} />,
                );
                expect(queryAllByTestId('storyUrl')).not.toBeNull();
            });
        });

        describe('When story type is undefined', () => {
            it('should not render the storyType link in the modal', () => {
                const sampleStoryCopy = { ...sampleStory };
                sampleStoryCopy.story_type = undefined;
                const { queryByTestId } = render(
                    <Modal
                        {...defaultProps}
                        visible={true}
                        story={sampleStoryCopy}
                    />,
                );
                expect(queryByTestId('storyType')).toBeNull();
            });
        });

        describe('When story type is defined', () => {
            it('should render the storyType link in the modal', () => {
                const { queryAllByTestId } = render(
                    <Modal {...defaultProps} visible={true} />,
                );
                expect(queryAllByTestId('storyType')).not.toBeNull();
            });
        });

        describe('When story priority is undefined', () => {
            it('should not render the storyPriority link in the modal', () => {
                const sampleStoryCopy = { ...sampleStory };
                sampleStoryCopy.story_priority = undefined;
                const { queryByTestId } = render(
                    <Modal
                        {...defaultProps}
                        visible={true}
                        story={sampleStoryCopy}
                    />,
                );
                expect(queryByTestId('storyPriority')).toBeNull();
            });
        });

        describe('When story priority is defined', () => {
            it('should render the storyPriority link in the modal', () => {
                const { queryAllByTestId } = render(
                    <Modal {...defaultProps} visible={true} />,
                );
                expect(queryAllByTestId('storyPriority')).not.toBeNull();
            });
        });
    });
});

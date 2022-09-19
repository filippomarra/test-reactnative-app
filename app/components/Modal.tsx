import React from 'react';
import { Linking, Text, View } from 'react-native';
import {
    Button,
    Dialog,
    Paragraph,
    Portal,
    Provider,
} from 'react-native-paper';

import dateformat from 'dateformat';

import { ModalProps } from '../interfaces';
import { styles } from '../styles';

import { DialogProperty } from './DialogProperty';

export const Modal = (props: ModalProps) => {
    const { visible, hideDialog, story } = props;

    return (
        <Provider>
            {visible && (
                <View testID="modal">
                    <Portal>
                        <Dialog
                            visible={visible}
                            onDismiss={hideDialog}
                            style={styles.dialog}>
                            <Dialog.Title>{story.name}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>
                                    <DialogProperty text={'Description:'} />
                                    <Text>{story.description}</Text>
                                </Paragraph>
                                <Paragraph>
                                    <DialogProperty text={'URL:'} />
                                    {story.url && (
                                        <Text
                                            style={styles.url}
                                            onPress={() =>
                                                Linking.openURL(story.url!)
                                            }
                                            testID="storyUrl">
                                            {story.url}
                                        </Text>
                                    )}
                                </Paragraph>
                                <Paragraph>
                                    <DialogProperty text={'Created At:'} />
                                    {story.created_at && (
                                        <Text testID="storyDate">
                                            {dateformat(
                                                story.created_at,
                                                'dd/mm/yyyy HH:MM:ss',
                                            )}
                                        </Text>
                                    )}
                                </Paragraph>
                                <Paragraph>
                                    <DialogProperty text={'Story Type:'} />
                                    {story.story_type && (
                                        <Text testID="storyType">
                                            {story.story_type.toUpperCase()}
                                        </Text>
                                    )}
                                </Paragraph>
                                <Paragraph>
                                    <DialogProperty text={'Story Priority:'} />
                                    {story.story_priority && (
                                        <Text testID="storyPriority">
                                            {story.story_priority.toUpperCase()}
                                        </Text>
                                    )}
                                </Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    onPress={hideDialog}
                                    textColor="#000"
                                    testID="okButton">
                                    OK
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            )}
        </Provider>
    );
};

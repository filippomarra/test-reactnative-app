import React from 'react';
import { View } from 'react-native';
import { Divider, ListItem } from '@rneui/themed';

import { StoryItemProps } from '../interfaces';
import { styles } from '../styles';

export const StoryItem = (props: StoryItemProps) => {
    const { index, showDialog, story } = props;
    return (
        <View>
            <ListItem
                key={index}
                onPress={() => showDialog(story)}
                testID="storyItem">
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>
                        {story.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>
                        {story.description && story.description.length > 70
                            ? story.description.substring(0, 70) + '...' // Truncate long descriptions
                            : story.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron size={30} color="#000" />
            </ListItem>
            <Divider color="#000" />
        </View>
    );
};

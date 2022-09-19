import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { StoryScrollViewProps } from '../interfaces';
import { styles } from '../styles';

import { StoryItem } from './StoryItem';

export const StoryScrollView = (props: StoryScrollViewProps) => {
    const { isLoading, showDialog, stories } = props;

    return (
        <ScrollView>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    style={styles.activityIndicator}
                    testID="loader"
                />
            ) : (
                <View testID="storyView">
                    {stories.map((item, index) => (
                        <StoryItem
                            story={item}
                            showDialog={showDialog}
                            index={index}
                        />
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Header, Icon } from '@rneui/themed';

import { APP_TITLE } from '../constants';
import { AppHeaderProps } from '../interfaces';
import { styles } from '../styles';

import { sortByKey } from './utils';

export const AppHeader = (props: AppHeaderProps) => {
    const { stories, setStories } = props;

    return (
        <Header
            centerComponent={{
                text: APP_TITLE,
                style: styles.header,
            }}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity
                        onPress={() => setStories(sortByKey(stories, 'name'))}
                        testID={'sortButton'}>
                        <Icon name="sort" color="white" size={32} />
                        <Text style={styles.sortText}> SORT</Text>
                    </TouchableOpacity>
                </View>
            }
        />
    );
};

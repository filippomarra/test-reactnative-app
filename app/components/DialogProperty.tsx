import React from 'react';
import { Text } from 'react-native';

import { styles } from '../styles';

export const DialogProperty = ({ text }: { text: string }) => {
    return <Text style={styles.dialogProperty}>{text} </Text>;
};

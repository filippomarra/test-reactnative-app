import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { fetchStories } from '../api';
import { AppHeader, Modal, StoryScrollView } from '../components';
import Story from '../models';

export const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [story, setStory] = useState<Story>({});
    const [stories, setStories] = useState<Story[]>([]);
    const [visible, setVisible] = useState(false);

    const showDialog = (story: Story) => {
        setVisible(true);
        setStory(story);
    };
    const hideDialog = () => setVisible(false);
    const setStoriesExternal = (stories: Story[]) => setStories(stories);
    const setLoadingExternal = (isLoading: boolean) => setLoading(isLoading);

    useEffect(() => {
        fetchStories(setStoriesExternal, setLoadingExternal);
    }, []);

    return (
        <View>
            <AppHeader stories={stories} setStories={setStoriesExternal} />
            <StoryScrollView
                isLoading={isLoading}
                showDialog={showDialog}
                stories={stories}
            />
            <Modal visible={visible} hideDialog={hideDialog} story={story} />
        </View>
    );
};

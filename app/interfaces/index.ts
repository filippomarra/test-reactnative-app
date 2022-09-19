import Story from '../models';

export interface ApiProps {
    setLoading: (loading: boolean) => void;
    setStories: (stories: Story[]) => void;
}

export interface AppHeaderProps {
    stories: Story[];
    setStories: (stories: Story[]) => void;
}

export interface ModalProps {
    visible: boolean;
    hideDialog: () => void;
    story: Story;
}

export interface StoryItemProps {
    index: number;
    showDialog: (story: Story) => void;
    story: Story;
}

export interface StoryScrollViewProps {
    isLoading: boolean;
    showDialog: (story: Story) => void;
    stories: Story[];
}

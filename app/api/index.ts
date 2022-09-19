import { API_ENDPOINT } from '../constants';

export const fetchStories = async (
    setStories: Function,
    setLoading: Function,
) => {
    await fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((json) => setStories(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
};

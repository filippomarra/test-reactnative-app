import Story from '../../models';

export const sampleStory: Story = {
    kind: 'story',
    id: 151723133,
    created_at: new Date('2017-10-05T15:30:45Z'),
    updated_at: new Date('2020-09-09T08:08:04Z'),
    accepted_at: new Date('2017-10-18T14:04:39Z'),
    story_type: 'chore',
    story_priority: 'p3',
    name: 'API Design',
    description:
        'As an engineer, I will produce a RAML file to discuss with the team the entry points and the payloads for the proxy so that we can start thinking how to mock this data in the frontend',
    current_state: 'accepted',
    requested_by_id: 1945893,
    url: 'https://www.pivotaltracker.com/story/show/151723133',
    project_id: 2116794,
    owner_ids: [2958113],
    labels: [
        {
            id: 19223788,
            project_id: 2116794,
            kind: 'label',
            name: 'debito-tecnico',
            created_at: new Date('2017-10-05T15:30:45Z'),
            updated_at: new Date('2020-09-09T08:08:04Z'),
        },
    ],
    owned_by_id: 2958113,
};

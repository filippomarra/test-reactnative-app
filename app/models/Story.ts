import { Label } from './Label';

export interface Story {
    kind?: string;
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    accepted_at?: Date;
    story_type?: string;
    story_priority?: string;
    name?: string;
    description?: string;
    current_state?: string;
    requested_by_id?: number;
    url?: string;
    project_id?: number;
    owner_ids?: number[];
    labels?: Label[];
    owned_by_id?: number;
    estimate?: number;
}

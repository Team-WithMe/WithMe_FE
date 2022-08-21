export type HostGoalType = 'project' | 'study';

export type HostPageNumType = 0 | 1 | 2 | 3 | 4;

export interface CreateTeamAPIBodyType {
	goal: HostGoalType;
	skills: string[];
	name: string;
	description: string;
}

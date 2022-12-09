export type CategoryType = 'project' | 'study';

export type HostPageNumType = 0 | 1 | 2 | 3 | 4;

export interface HostComponentProps {
	onMoveToHostPage: (move: 'prev' | 'next') => () => void;
}

export interface CreateTeamAPIBodyType {
	category: CategoryType;
	skills: string[];
	name: string;
	description: string;
}

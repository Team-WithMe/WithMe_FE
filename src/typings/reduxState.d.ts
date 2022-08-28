import type { SkillNameType } from './common';
import type { HostGoalType, HostPageNumType } from './host';

export interface IHostState {
	hostPageNum: HostPageNumType;
	teamGoal: HostGoalType;
	teamSkills: SkillNameType[];
	teamName: string;
	teamDesc: string;
	createTeamLoading: boolean;
	createTeamDone: boolean;
	createTeamError: string | undefined;
}

//* state 타입 생길 때 마다 추가 해주세요!
export interface IRootState {
	host: IHostState;
}

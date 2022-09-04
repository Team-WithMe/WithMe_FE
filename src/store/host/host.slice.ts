import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IHostState } from '@typings/reduxState';
import type { SkillNameType } from '@typings/common';
import type { HostGoalType } from '@typings/host';
import { createTeamAction } from './host.actions';

const initialState: IHostState = {
	hostPageNum: 0,
	teamGoal: 'project',
	teamSkills: [],
	teamName: '',
	teamDesc: '',
	createTeamLoading: false,
	createTeamDone: false,
	createTeamError: undefined
};

const hostSlice = createSlice({
	name: 'host',
	initialState,
	reducers: {
		prevHostPageAction: (state: IHostState) => {
			state.hostPageNum -= 1;
		},
		nextHostPageAction: (state: IHostState) => {
			state.hostPageNum += 1;
		},
		changeTeamGoalAction: (state: IHostState, action: PayloadAction<HostGoalType>) => {
			state.teamGoal = action.payload;
		},
		changeTeamSkillAction: (state: IHostState, action: PayloadAction<SkillNameType[]>) => {
			state.teamSkills = action.payload;
		},
		changeTeamNameAction: (state: IHostState, action: PayloadAction<string>) => {
			state.teamName = action.payload;
		},
		changeTeamDescAction: (state: IHostState, action: PayloadAction<string>) => {
			state.teamDesc = action.payload;
		}
	},
	extraReducers: ({ addCase }) => {
		addCase(createTeamAction.pending, state => {
			state.createTeamLoading = true;
			state.createTeamDone = false;
			state.createTeamError = undefined;
		});
		addCase(createTeamAction.fulfilled, state => {
			state.createTeamLoading = false;
			state.createTeamDone = true;
		});
		addCase(createTeamAction.rejected, (state, action) => {
			state.createTeamLoading = false;
			state.createTeamError = action.error.message;
		});
	}
});

export const {
	prevHostPageAction,
	nextHostPageAction,
	changeTeamGoalAction,
	changeTeamSkillAction,
	changeTeamNameAction,
	changeTeamDescAction
} = hostSlice.actions;

export default hostSlice.reducer;

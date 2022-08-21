import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HostGoalType } from '@typings/host';
import { IHostState } from '@typings/reduxState';
import { createTeamAction } from './host.actions';

// const [goal, setGoal] = useState<HostGoalType>('project');
// const [skills, setSkills] = useState(['react', 'typescript']);

const initialState: IHostState = {
	hostPageNum: 0,
	teamGoal: 'project',
	teamSkills: ['react', 'typescript', 'javascript'],
	teamName: '',
	teamDescription: '',
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
		onChangeTeamGoal: (state: IHostState, action: PayloadAction<HostGoalType>) => {
			state.teamGoal = action.payload;
		},
		onChangeTeamSkills: (state: IHostState, action: PayloadAction<string>) => {
			console.log(state);
		},
		onChangeTeamName: (state: IHostState, action: PayloadAction<string>) => {
			state.teamName = action.payload;
		},
		onChangeTeamDescription: (state: IHostState, action: PayloadAction<string>) => {
			state.teamDescription = action.payload;
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
	onChangeTeamGoal,
	onChangeTeamSkills,
	onChangeTeamName,
	onChangeTeamDescription
} = hostSlice.actions;
export default hostSlice.reducer;

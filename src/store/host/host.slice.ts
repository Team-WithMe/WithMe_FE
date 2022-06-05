import { createSlice } from '@reduxjs/toolkit';
import { IHostState } from '@typings/reduxState';

const initialState: IHostState = {
	hostPageNum: 0
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
		}
	},
	extraReducers: {}
});

export const { prevHostPageAction, nextHostPageAction } = hostSlice.actions;
export default hostSlice.reducer;

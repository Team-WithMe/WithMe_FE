import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { noticeRegistrationAction } from './team.notice.action';
import { INoticeState } from '../../typings/reduxState';

const initialState: INoticeState = {
	noticeRegistrationLoding: false,
	noticeRegistrationDone: false,
	noticeRegistrationError: undefined,
	noticeTitle: '',
	noticeContent: ''
};

const noticeSlice = createSlice({
	name: 'noticeSlice',
	initialState,
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(noticeRegistrationAction.pending, (state: INoticeState) => {
			state.noticeRegistrationLoding = true;
			state.noticeRegistrationDone = false;
			state.noticeRegistrationError = undefined;
		});
		addCase(noticeRegistrationAction.fulfilled, (state: INoticeState) => {
			state.noticeRegistrationLoding = false;
			state.noticeRegistrationDone = true;
		});
		addCase(noticeRegistrationAction.rejected, (state: INoticeState, action: AnyAction) => {
			state.noticeRegistrationLoding = false;
			state.noticeRegistrationDone = true;
			state.noticeRegistrationError = action.error.message;
		});
	}
});

export default noticeSlice.reducer;

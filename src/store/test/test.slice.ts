import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITestState } from '@typings/reduxState';
import { testFetchDataAction } from './test.actions';

//* 상태 값
//* (각 redux의 state 상태 타입은 typings > reduxState.d.ts에 추가)
const initialState: ITestState = {
	loading: false,
	error: null,
	testNum: 0,
	test: null
};

//* slice 생성
const testSlice = createSlice({
	name: 'test',
	initialState,
	//* 동기 액션
	reducers: {
		testNumAddAction: (state: ITestState) => {
			state.testNum += 1;
		}
	},
	//* 비동기 액션
	//* (pending: 요청 시, fulfilled: 성공 시, rejected: 실패 시)
	extraReducers: build =>
		build
			.addCase(testFetchDataAction.pending, (state: ITestState) => {
				state.loading = true;
			})
			.addCase(testFetchDataAction.fulfilled, (state: ITestState, action: PayloadAction<any>) => {
				state.loading = false;
				state.test = action.payload;
			})
			.addCase(testFetchDataAction.rejected, (state: ITestState, action) => {
				state.loading = false;
				state.error = action.error.message as string;
			})
});

//* 동기 액션 내보내기
export const { testNumAddAction } = testSlice.actions;
export default testSlice.reducer;

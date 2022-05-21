import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@api/APIs';

//* 테스트용 비동기 액션
export const testFetchDataAction = createAsyncThunk('test/fetchData', async () => {
	const data = await api.testAxios();
	return data;
});

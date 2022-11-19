import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTeamAPI } from '@lib/api/host.apis';
import type { CreateTeamAPIBodyType } from '@src/types/host';

export const createTeamAction = createAsyncThunk(
	'team/create',
	async (body: CreateTeamAPIBodyType) => {
		const data = await createTeamAPI(body);
		console.log(data);

		return data;
	}
);

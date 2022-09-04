import { createAsyncThunk } from '@reduxjs/toolkit';
import { noticeRegistrationAPI } from '../../lib/api/notice.apis';
import { NoticeWriteBodyType } from '../../typings/notice';

export const noticeRegistrationAction = createAsyncThunk(
	'team/notice_write',
	async (body: NoticeWriteBodyType) => {
		const data = await noticeRegistrationAPI(body);
		return data;
	}
);

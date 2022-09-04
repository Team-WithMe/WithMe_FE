import { post } from './index';
import { NoticeWriteBodyType } from '@typings/notice';

const { NEXT_PUBLIC_SERVER_URI } = process.env;

export const noticeRegistrationAPI = (body: NoticeWriteBodyType) => {
	if (!NEXT_PUBLIC_SERVER_URI) new Error('SERVER_URI 이 필요합니다!');
	const { teamId, ...rest } = body;
	// const url = `http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089/api/v1/team/${teamId}/notice`;
	const url = `http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089/api/v1/team/8/notice`;
	return post({ url, body: rest });
};

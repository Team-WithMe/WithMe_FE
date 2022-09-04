import type { AxiosPromise } from 'axios';
import type { MyPageResType } from '@typings/mypage';
import * as api from './index';

const { NEXT_PUBLIC_SERVER_URI } = process.env;

/** @param {string} userId 로그인 중인 유저 아이디 */
export const fetchMyTeamDataAPI = (userId: string): AxiosPromise<MyPageResType> => {
	if (!NEXT_PUBLIC_SERVER_URI) new Error('SERVER_URI 이 필요합니다!');
	if (!userId) new Error('userId 값은 필수 입니다!');
	const url = `${NEXT_PUBLIC_SERVER_URI}/api/v1/user/mypage/${userId}`;

	return api.get({ url });
};

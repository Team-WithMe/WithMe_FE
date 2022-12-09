import type { CreateTeamAPIBodyType } from '@src/types/host';
import { post } from './index';

const { NEXT_PUBLIC_SERVER_URI } = process.env;

export const createTeamAPI = (
	body: CreateTeamAPIBodyType
): Promise<{ status: 200 }> | undefined => {
	if (!NEXT_PUBLIC_SERVER_URI) new Error('SERVER_URI 이 필요합니다!');
	const url = `${NEXT_PUBLIC_SERVER_URI}/api/v1/team`;

	return post({ url, body });
};

export interface TeamListType {
	id: string;
	status: 'displayed' | 'hidden';
	teamCategory: 'project' | 'study';
	teamDesc: string;
	teamName: string;
}

export interface MyPageResType {
	nickname: string;
	teamList: TeamListType[];
	userImage: 'default' | string;
}

import { ITestData } from './test';

export interface ITestState {
	loading: boolean;
	error: string | null;
	testNum: number;
	test: ITestData | null;
}

//* state 타입 생길 때 마다 추가 해주세요!
export interface IRootState {
	test: ITestState;
}

import { HostPageNumType } from './host';

export interface IHostState {
	hostPageNum: HostPageNumType;
}

//* state 타입 생길 때 마다 추가 해주세요!
export interface IRootState {
	host: IHostState;
}

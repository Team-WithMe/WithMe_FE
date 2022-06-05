import { get, patch, post } from './index';

const testHost = 'http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089/test';

const testAxios = () => {
	const url = `${testHost}`;
	return get({ url });
};

const APIs = {
	testAxios
};

export default APIs;

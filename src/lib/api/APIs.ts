import { get, patch, post } from './index';

const testHost = 'http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089/api/temp/test';
const socialLoginHost = 'http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089/oauth2/authorization/google';

const testAxios = () => {
	const url = `${testHost}`;

	return get({ url });
};

const socialLogin = () => {
	const url = `${socialLoginHost}`;

	return get({ url });
};

const APIs = {
	testAxios,
	socialLogin
};

export default APIs;

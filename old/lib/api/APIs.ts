import { get, patch, post } from './index';

const host = 'http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089';

const socialLogin = () => {
	const url = `${host}`;

	return get({ url });
};
const signupRequest = (body: object) => {
	const url = `${host}/api/v1/join`;

	return post({ url, body });
};
const loginRequest = (body: object) => {
	const url = `${host}/login`;

	return post({ url, body });
};

const APIs = {
	socialLogin,
	signupRequest,
	loginRequest
};

export default APIs;

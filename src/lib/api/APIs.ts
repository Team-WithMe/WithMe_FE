import { get, patch, post } from './index';

const host = 'http://ec2-3-38-53-163.ap-northeast-2.compute.amazonaws.com:8089';

const socialLogin = () => {
	const url = `${host}`;

	return get({ url });
};

const APIs = {
	socialLogin
};

export default APIs;

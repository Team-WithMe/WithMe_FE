import axios from 'axios';

export const get = async ({ url, params = {}, headers = {} }: { url: string; params?: object; headers?: object }) => {
	try {
		const result = await axios.get(url, {
			...params,
			headers: {
				...headers
			}
		});
		const { data } = result;

		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const post = async ({
	url,
	body = {},
	params = {},
	headers = {}
}: {
	url: string;
	body?: object;
	params?: object;
	headers?: object;
}) => {
	try {
		const result = await axios.post(url, body, {
			...params,
			headers: {
				...headers
			}
		});
		const { data } = result;

		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const patch = async ({
	url,
	body = {},
	params = {},
	headers = {}
}: {
	url: string;
	body?: object;
	params?: object;
	headers?: object;
}) => {
	try {
		const result = await axios.patch(url, body, {
			...params,
			headers: {
				...headers
			}
		});
		const { data } = result;

		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const SuccessOauth = () => {
	const router = useRouter();
	useEffect(() => {
		const accessToken = window.location.search.split('=')[1];
		const token = atob(accessToken);
		console.log(token);
		localStorage.setItem('accessToken', accessToken);
		router.push('/');
	}, [router]);

	return <div></div>;
};

export default SuccessOauth;
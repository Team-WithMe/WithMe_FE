import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { RootState } from '@store/rootReducer';
import { testNumAddAction } from '@store/test/test.slice';
import { testFetchDataAction } from '@store/test/test.actions';

const TestPage = () => {
	const dispatch = useDispatch();
	const { test, testNum, loading, error } = useSelector((state: RootState) => state.test);

	const onAddTestNum = () => dispatch(testNumAddAction());

	const onTestRequest = useCallback(() => dispatch(testFetchDataAction()), [dispatch]);

	useEffect(() => {
		onTestRequest();
	}, [onTestRequest]);

	return (
		<>
			<Link href="/">
				<a style={{ fontSize: '20px' }}>HomePage 이동</a>
			</Link>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
				<h2 style={{ fontSize: '30px' }}>redux testNum</h2>
				<span style={{ fontSize: '20px' }}>{testNum}</span>
				<button onClick={onAddTestNum} style={{ padding: '8px 12px', cursor: 'pointer' }}>
					1+
				</button>
				<br />
				<h2 style={{ fontSize: '30px' }}>비동기 테스트</h2>
				<button onClick={onTestRequest} style={{ padding: '8px 12px', cursor: 'pointer' }}>
					클릭
				</button>
				{loading && loading}
				{test && (
					<>
						<span>{test['1st']}</span>
						<span>{test['2nd']}</span>
						<span>{test.name}</span>
					</>
				)}
				{error && error}
			</div>
		</>
	);
};

export default TestPage;

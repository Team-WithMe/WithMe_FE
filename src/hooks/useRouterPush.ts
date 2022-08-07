import { useRouter } from 'next/router';

const useRouterPush = () => {
	const router = useRouter();

	/**
	 * @author changyuyeo <wry5533@gamil.com>
	 * @description 페이지를 이동하기위한 커스텀 훅
	 * @param to 이동할 페이지
	 * @returns 이벤트 발생 시 파라미터의 입력한 페이지로 이동
	 */
	const onMoveToPage = (to: string) => () => router.push(to);

	return { onMoveToPage };
};

export default useRouterPush;

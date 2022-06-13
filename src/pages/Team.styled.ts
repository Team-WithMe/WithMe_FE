import styled from '@emotion/styled';

export const TeamWrapper = styled.div`
	width: 75%;
	margin: 100px auto;
	img {
		width: 16px;
		height: 10px;
		cursor: pointer;
	}
	.team-title {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 54px;
		color: #222222;
		margin-right: 8px;
	}

	.team-sub-title {
		font-size: 35px;
		line-height: 54px;
		color: #b0b0b0;
	}
	.select-box {
		margin-top: 30px;
		display: flex;
	}

	.select-box p {
		color: #6c5ce7;
		font-weight: 700;
	}

	.select-box div {
		display: flex;
		margin-right: 20px;
		border: 1px solid #ebebeb;
		background-color: white;
		width: 150px;
		height: 40px;
		align-items: center;
		justify-content: space-around;
		border-radius: 5px;
		cursor: pointer;
	}

	.line {
		width: 100%;
		border: 1px solid #ddd;
		margin-top: 30px;
	}

	.search-team {
		margin-top: 30px;
	}

	.total-team {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 22px;
		line-height: 30px;
		/* identical to box height */

		/* gray_22 */

		color: #222222;

		padding: 10px;
	}

	.total-team-desc {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #b0b0b0;
	}
`;

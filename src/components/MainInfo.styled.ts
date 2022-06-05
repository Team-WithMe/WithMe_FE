import styled from '@emotion/styled';

export const MainInfoWrapper = styled.div`
	width: 75%;
	margin: auto;

	.info-title {
		font-size: 30px;
	}

	.info-title-first {
		span {
			font-weight: 700;
		}
		font-size: 20px;
		line-height: 41px;
	}

	.info-title-second {
		font-size: 30px;
		line-height: 41px;
		span {
			color: #6c5ce7;
		}
	}

	.images {
		div {
			text-align: center;
			margin-top: 10px;
		}
		span {
			font-weight: 700;
			font-size: 30px;
		}
		width: 100%;
		display: flex;
		margin: 100px auto;
		justify-content: space-around;
	}
`;

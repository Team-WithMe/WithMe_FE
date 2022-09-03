import React, { useState, FC } from 'react';

import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Card from '@components/Card';
import { TeamWrapper } from '@components/team.styled';
import useModal from '@hooks/useModal';
import { Button } from '@with-me/ui';
import { StackModalWrapper } from '@components/stack.styled';
import { Close } from '@with-me/icons';

const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const [checkedStack, setCheckedStack] = useState<string[]>([]);
	const [stackArray] = useState([
		{ stack: 'react' },
		{ stack: 'nextjs' },
		{ stack: 'kubernetes' },
		{ stack: 'spring' },
		{ stack: 'HTML' },
		{ stack: 'django' },
		{ stack: 'javascript' },
		{ stack: 'typescript' },
		{ stack: 'nodejs' },
		{ stack: 'vue' },
		{ stack: 'java' },
		{ stack: 'sql' },
		{ stack: 'css' }
	]);
	const checkedHandler = (item: string) => {
		if (checkedStack.length >= 10) {
			return;
		}
		switch (item) {
			case 'react':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'nextjs':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'kubernetes':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'spring':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'HTML':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'typescript':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'django':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'javascript':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'nodejs':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'vue':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'java':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'sql':
				setCheckedStack([...checkedStack, item]);
				break;
			case 'css':
				setCheckedStack([...checkedStack, item]);
				break;
			default:
				checkedStack;
		}
	};
	const checkedFilter = (item: string) => {
		const result = checkedStack.find(i => {
			return i === item;
		});

		if (result) {
			const filterdResult = checkedStack.filter(f => {
				return f !== item;
			});
			setCheckedStack(filterdResult);
		} else {
			checkedHandler(item);
		}
	};

	const inputFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = [];
		const value = e.target.value;
		const result = stackArray.filter(item => {
			return value === item.stack;
		});
		if (result) {
			inputText.push(result[0]?.stack);
			setCheckedStack(inputText);
		}
	};

	console.log(checkedStack);
	return (
		<StackModalWrapper>
			<Close className="close-btn" onClick={onCloseModal} />
			<div className="input-wrapper">
				<input
					placeholder="원하는 기술스택을 검색해주세요!"
					className="stack-modal-input"
					onChange={inputFilterHandler}
				/>
			</div>
			<div className="stack-modal-title">다른 기술스택을 추천해 드려요!</div>
			<div className="stack-select-wrapper">
				{stackArray.map((item, idx) => {
					return (
						<div className="stack-select" key={idx}>
							<span
								className={
									checkedStack.find(x => {
										return x === item.stack;
									})
										? 'stack-select-click'
										: 'stack-select-span'
								}
								onClick={e => {
									checkedFilter(item.stack);
								}}
							>
								{item.stack}
								<img
									src={
										checkedStack.find(x => {
											return x === item.stack;
										})
											? './img/check.png'
											: './img/plus.png'
									}
								/>
							</span>
						</div>
					);
				})}
			</div>
			<div className="select-container">
				{checkedStack.map((item, idx) => {
					return (
						<div className="add-stack-wrapper" key={idx}>
							<span className="add-stack-span">
								{item}
								<img
									src={'./img/close.png'}
									onClick={e => {
										checkedFilter(item);
									}}
								/>
							</span>
						</div>
					);
				})}
			</div>
			<div className="team-modal-desc">기술 스택은 최대 10개까지 선택이 가능합니다!</div>
			<div className="btn-wrapper">
				<Button>취소</Button>
				<Button>적용</Button>
			</div>
		</StackModalWrapper>
	);
};

const Team = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal();
	return (
		<>
			<Header />
			<TeamWrapper>
				<div className="container">
					<span className="team-title">검색 필터</span>
					<span className="team-sub-title">| Filter</span>
				</div>
				<div className="select-box">
					<div>
						<p>전체</p>
						<img src="/img/arrow.png" />
					</div>
					<div onClick={onOpenModal}>
						<p>기술스택</p>
						<img src="/img/arrow.png" />
					</div>
				</div>
				<div className="line"></div>
				<div className="search-team">
					<span className="total-team">총 100개의 팀</span>
					<span className="total-team-desc">관심있는 팀에 댓글을 남겨 팀에 참여해보세요!</span>
				</div>
			</TeamWrapper>
			<Card />
			<Footer />
			<ModalPortal>
				<TestModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default Team;

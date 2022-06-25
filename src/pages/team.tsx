import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import React, { useState, FC } from 'react';
import { TeamWrapper } from './Team.styled';
import useModal from '@hooks/useModal';
import Card from '@components/Card';
import { StackModalWrapper } from './Stack.styled';
import { CloseIcon } from '@assets/svg/common';
import Button from '@components/common/Button';

const stactArray = [
	{
		stack: 'react'
	},
	{
		stack: 'nextjs'
	},
	{
		stack: 'kubernetes'
	},
	{
		stack: 'spring'
	},
	{
		stack: 'HTML'
	},

	{
		stack: 'django'
	},
	{
		stack: 'javascript'
	},
	{
		stack: 'typescript'
	},
	{
		stack: 'nodejs'
	},
	{
		stack: 'vue'
	},
	{
		stack: 'java'
	},
	{
		stack: 'sql'
	},
	{
		stack: 'css'
	}
];

const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const [checked, setChecked] = useState<boolean>(false);
	const [checkedStack, setCheckedStack] = useState<string[]>([]);

	// const [state, setState] = useImmer<string[]>([]);
	// const checkedHandler = (item: string) => {
	// 	const result = state.find(x => {
	// 		return x === item;
	// 	});
	// 	if (result) {
	// 		setState(draft => {
	// 			draft = draft.filter(f => {
	// 				console.log(f);
	// 				return f !== item;
	// 			});
	// 		});
	// 	} else {
	// 		setState(draft => {
	// 			draft.push(item);
	// 		});
	// 	}
	// };

	const checkedHandler = (item: string) => {
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
		if (checkedStack.length >= 10) {
			return;
		}
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

	console.log(checkedStack);
	return (
		<StackModalWrapper>
			<CloseIcon className="close-btn" onClick={onCloseModal} />
			<div className="input-wrapper">
				<input placeholder="원하는 기술스택을 검색해주세요!" className="stack-modal-input" />
			</div>
			<div className="stack-modal-title">다른 기술스택을 추천해 드려요!</div>
			<div className="stack-select-wrapper">
				{stactArray.map((item, idx) => {
					return (
						<div className="stack-select" key={idx}>
							<span
								className={
									// item.checked ? 'stack-select-click' : 'stack-select-span'
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
				<Button bgColor="bgColor">취소</Button>
				<Button color="white">적용</Button>
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

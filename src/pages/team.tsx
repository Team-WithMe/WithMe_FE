import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import React, { useState, FC } from 'react';
import { TeamWrapper } from './Team.styled';
import useModal from '@hooks/useModal';
import Card from '@components/Card';
import { StackModalWrapper } from './Stack.styled';
import { CloseIcon } from '@assets/svg/common';
import Button from '@components/common/Button';

// const stactArray = [
// 	{
// 		stack: 'react'
// 	},
// 	{
// 		stack: 'nextjs'
// 	},
// 	{
// 		stack: 'kubernetes'
// 	},
// 	{
// 		stack: 'spring'
// 	},
// 	{
// 		stack: 'HTML'
// 	},

// 	{
// 		stack: 'django'
// 	},
// 	{
// 		stack: 'javascript'
// 	},
// 	{
// 		stack: 'typescript'
// 	},
// 	{
// 		stack: 'nodejs'
// 	},
// 	{
// 		stack: 'vue'
// 	},
// 	{
// 		stack: 'java'
// 	},
// 	{
// 		stack: 'sql'
// 	},
// 	{
// 		stack: 'css'
// 	}
// ];

const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => {
	const [checkedStack, setCheckedStack] = useState<string[]>([]);
	const [stackArray, setStackArray] = useState([
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
			<CloseIcon className="close-btn" onClick={onCloseModal} />
			<div className="input-wrapper">
				<input
					placeholder="????????? ??????????????? ??????????????????!"
					className="stack-modal-input"
					onChange={inputFilterHandler}
				/>
			</div>
			<div className="stack-modal-title">?????? ??????????????? ????????? ?????????!</div>
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
			<div className="team-modal-desc">?????? ????????? ?????? 10????????? ????????? ???????????????!</div>
			<div className="btn-wrapper">
				<Button bgColor="bgColor">??????</Button>
				<Button color="white">??????</Button>
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
					<span className="team-title">?????? ??????</span>
					<span className="team-sub-title">| Filter</span>
				</div>
				<div className="select-box">
					<div>
						<p>??????</p>
						<img src="/img/arrow.png" />
					</div>
					<div onClick={onOpenModal}>
						<p>????????????</p>
						<img src="/img/arrow.png" />
					</div>
				</div>
				<div className="line"></div>
				<div className="search-team">
					<span className="total-team">??? 100?????? ???</span>
					<span className="total-team-desc">???????????? ?????? ????????? ?????? ?????? ??????????????????!</span>
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

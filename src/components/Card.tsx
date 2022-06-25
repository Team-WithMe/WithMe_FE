import React from 'react';
import { CardWrapper } from '@src/Card.styled';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CardProps {
	item: string;
	title: string;
	date: string;
	stack: string[];
	coment: number;
	view: number;
}

const Card = () => {
	const route = useRouter();
	const { id } = route.query;

	const itemCard = [
		{
			id: 1,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-06-22',
			react: true,
			typescript: true,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 2,
			item: '프로젝트',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-11-12',
			react: true,
			typescript: true,
			nodejs: false,
			coment: 10,
			view: 100
		},
		{
			id: 3,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-08-28',
			react: true,
			typescript: false,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 4,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-02-12',
			react: true,
			typescript: true,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 5,
			item: '프로젝트',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-05-05',
			react: false,
			typescript: true,
			nodejs: false,
			coment: 10,
			view: 100
		},
		{
			id: 6,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-01-01',
			react: true,
			typescript: false,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 7,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-10-09',
			react: true,
			typescript: true,
			nodejs: false,
			coment: 10,
			view: 100
		},
		{
			id: 8,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-04-02',
			react: false,
			typescript: true,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 9,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-04-02',
			react: true,
			typescript: false,
			nodejs: true,
			coment: 10,
			view: 100
		},
		{
			id: 10,
			item: '스터디',
			title: '같이 팀프로젝트 하실분 구해요!',
			date: '2022-04-02',
			react: true,
			typescript: true,
			nodejs: true,
			coment: 10,
			view: 100
		}
	];

	return (
		<CardWrapper>
			{itemCard.map(item => {
				return (
					<>
						<div className="card-items" key={item.id}>
							<div className="card-item">{item.item}</div>
							<div className="card-title">{item.title}</div>
							<div className="card-date">{item.date}</div>
							<Link href="/teamdetail/[id]">
								<div className="card-stack">
									{item.react && 'react' ? (
										<div className="card-imgs">
											<div>react</div>
											<img src={'./img/react.png'} />
										</div>
									) : null}
									{item.typescript && 'typescript' ? (
										<div className="card-imgs">
											<div>typescript</div>
											<img src={'./img/typescript.png'} />
										</div>
									) : null}
									{item.nodejs && 'node.js' ? (
										<div className="card-imgs">
											<div>node.js</div>
											<img src={'./img/node.png'} />
										</div>
									) : null}
								</div>
							</Link>
							<div className="card-coment">
								<span>{`댓글 ${item.coment}`}</span>
								<span>{`조회수 ${item.coment}`}</span>
							</div>
						</div>
					</>
				);
			})}
		</CardWrapper>
	);
};

export default Card;

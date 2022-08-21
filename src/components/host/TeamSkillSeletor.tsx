import { Card, Text, Title } from '@with-me/ui';
import { HostTitleSuffix, HostTitleWrapper, SkillPageMoveText } from './host.components.styled';

const TeamSkillSeletor = () => {
	return (
		<Card
			title={
				<HostTitleWrapper>
					<Title size="h5">📗 언어 / 라이브러리 를 선택해주세요!</Title>
					<Text color="guide" size="sm" weight="light">
						복수로 선택할 수 있어요!
					</Text>
					<HostTitleSuffix>
						<SkillPageMoveText color="description">이전</SkillPageMoveText>
						<Text color="description">|</Text>
						<SkillPageMoveText color="description">다음</SkillPageMoveText>
					</HostTitleSuffix>
				</HostTitleWrapper>
			}
			fullSize
			px={20}
			py={20}
		>
			TeamSkillSeletor
		</Card>
	);
};

export default TeamSkillSeletor;

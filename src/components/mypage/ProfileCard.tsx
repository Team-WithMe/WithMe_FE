import { Button, Card, Input, Text } from '@with-me/ui';
import Image from 'next/image';

import { DEFAULT_USER_IMG_URI } from '@lib/constants/image.url';
import { ProfileBtnGroup, ProfileWrapper } from './mypage.styled';
import { colors } from '@styles/theme';
import useInput from '@hooks/useInput';
import { InputClearButton } from '@styles/common.styled';
import { useRef } from 'react';

const ProfileCard = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [nickname, onChangeNickname, setNickname] = useInput('');

	const onClearNicknameValue = () => {
		setNickname('');
		inputRef.current?.focus();
	};

	return (
		<Card px={30} py={40} borderRadius={10} borderColor={colors.gray_ee}>
			<ProfileWrapper>
				<div className="profile__wrapper">
					<Image src={DEFAULT_USER_IMG_URI} width={120} height={120} />
					<div className="profile__text-group">
						<Text size="xl" color="primary" weight="medium">
							Profile Image
						</Text>
						<Text color="description" weight="light">
							<Text color="primary" weight="medium">
								위드미
							</Text>
							사람들에게 사진으로 자신을 알려주세요!
						</Text>
					</div>
					<ProfileBtnGroup>
						<Button>이미지 선택</Button>
						<Button type="gray">이미지 삭제</Button>
					</ProfileBtnGroup>
				</div>
				<div className="profile__wrapper">
					<Text>닉네임</Text>
					<Input
						ref={inputRef}
						size="lg"
						placeholder="변경할 닉네임을 입력해주세요"
						value={nickname}
						onChange={onChangeNickname}
						suffix={<InputClearButton onClick={onClearNicknameValue} />}
					/>
					<ProfileBtnGroup>
						<Button fullSize>변경 완료</Button>
						<Button fullSize type="error">
							회원 탈퇴
						</Button>
					</ProfileBtnGroup>
				</div>
			</ProfileWrapper>
		</Card>
	);
};

export default ProfileCard;

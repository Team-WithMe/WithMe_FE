import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { Button, Card, Input, Text } from '@with-me/ui';

import useInput from '@hooks/useInput';
import { DEFAULT_USER_IMG_URI } from '@src/constants/image.url';
import { ValueClearButton } from '@styles/common.styled';
import { colors } from '@styles/theme';
import { ProfileBtnGroup, ProfileWrapper } from './mypage.styled';

const ProfileCard = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [nickname, onChange, setNickname] = useInput('');
	const [nicknameValid, setNicknameValid] = useState(false);

	const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
		if (nicknameValid) setNicknameValid(false);
		onChange(e);
	};

	const onClearNicknameValue = () => {
		if (nicknameValid) setNicknameValid(false);
		setNickname('');
		inputRef.current?.focus();
	};

	const onSelectImage = () => {
		fileInputRef.current?.click();
	};

	const onDeleteImage = () => {
		console.log('onDeleteImage');
	};

	const onSaveNickname = () => {
		if (nickname.length === 0) setNicknameValid(true);
		else {
			console.log(nickname);
		}
	};

	const onToWithDraw = () => {
		console.log('onToWithDraw');
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
						<Text color="description" weight="light" size="sm">
							<Text color="primary" weight="medium" size="sm">
								위드미
							</Text>
							&nbsp;사람들에게 사진으로 자신을 알려주세요!
						</Text>
					</div>
					<ProfileBtnGroup>
						<input ref={fileInputRef} type="file" hidden />
						<Button onClick={onSelectImage}>이미지 선택</Button>
						<Button onClick={onDeleteImage} type="gray">
							이미지 삭제
						</Button>
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
						suffix={<ValueClearButton onClick={onClearNicknameValue} />}
						error={nicknameValid}
					/>
					<ProfileBtnGroup>
						<Button fullSize onClick={onSaveNickname}>
							변경 완료
						</Button>
						<Button fullSize onClick={onToWithDraw} type="error">
							회원 탈퇴
						</Button>
					</ProfileBtnGroup>
				</div>
			</ProfileWrapper>
		</Card>
	);
};

export default ProfileCard;

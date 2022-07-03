<p align="middle" >
  <img src="https://user-images.githubusercontent.com/80776262/163809264-7887e6f0-34a6-4c17-94ba-146aa371a8dc.png" width="100%" />
</p>
<br />

## 📚 With Me FE

📚 위드미 (With Me) 스터디 매칭 서비스 입니다.

<br />

## member

|                    [LeeBonHoon](https://github.com/LeeBonHoon)                    |                   [changyuyeo](https://github.com/changyuyeo)                    |                   [KimTeaSick](https://github.com/KimTeaSick)                    |
| :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/100823427?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/80776262?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/88377392?v=4" width="100px" /> |

- `Lee-bonhoon`: 메인 페이지, 팀 리스트
- `changyuyeo`: 호스트 페이지, 상세 페이지
- `KimTeaSick`: 마이 페이지

<br />

<details>
<summary>&nbsp;Branches</summary>
<div markdown="1">

## branches

각자 브랜치에서 작업, 작업이 완료 되었다면 master브랜치에 PR 후 merge 요청 <br />
merge가 완료되면 `다른 개발자에게 pull 요청하기` <br />
master 브랜치가 업데이트 되면 항상 pull 받아줘야 충돌이 나지 않습니다!

```
// 새 브랜치 만들기
git checkout -b "새 브랜치 이름"

// 브랜치 이동
git checkout "브랜치 이름"
```

<br />

</div>
</details>

<details>
<summary>&nbsp;Hooks</summary>
<div markdown="1">

### useModal 사용법

```tsx
import { FC } from 'react';
import useModal from '@hooks/useModal';

//* 모달창 안에 들어갈 컨텐츠
const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => (
	<div style={{ background: 'white', width: '568px', height: '400px', borderRadius: '10px', padding: '20px' }}>
		모달 내용... <br /> <button onClick={onCloseModal}>모달창 닫기</button>
	</div>
);

const HostPage = () => {
	//* useModal 사용
	//* ModalPortal: root-modal 이라는 id에 모달 랜더링 (children 으로 모달 컴포넌트 만들어서 넣어주면 됩니다.)
	//* onCloseModal: 모달창 오픈 이벤트
	//* onOpenModal: 모달창 닫는 이벤트
	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

	return (
		<>
			<button onClick={onOpenModal}>모달창 열기</button>
			<ModalPortal>
				<TestModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default HostPage;
```

- `useModal`을 사용해 ModalPortal, onCloseModal, onOpenModal을 사용해서 모달창을 관리하면 됩니다.
- `onOpenModal` 메소드를 사용 시 모달창이 오픈되며 id가 root-modal 이라는 요소에 `ModalPortal` 컴포넌트를 랜더링 하게 됩니다. (react-portal 활용)
- `onCloseModal` 이벤트 발생 시 해당 모달창은 닫히게 됩니다.
- 중복되는 부분을 커스텀 훅으로 만들었으며 react portal 를 활용해 root의 바깥에서 랜더링 하기 때문에 훨씬 편리하게 사용이 가능합니다.

<br />

### portal를 사용해서 구현한 이유

> DOM Tree 상에서의 부모-자식 간의 제약에서 자유로워지기 위해 Portal 기능을 사용하게 되는 것입니다. <br />
> 또한, Portal에 렌더링된 자식요소는 이벤트 버블링이 반영되기 때문에 부모요소와의 통신 측면에서도 유용합니다.

<a href="https://ko.reactjs.org/docs/portals.html" target="_blank" rel="noreferrer noopener">Portals 참고 문서</a>
<br />

</div>
</details>

<details>
<summary>&nbsp;Available URI</summary>
<div markdown="1">

- / : 메인 페이지
- /host : 새로운 팀 만들기 페이지
- /...

</div>
</details>

<details>
<summary>&nbsp;Skeleton</summary>
<div markdown="1">
<br />

```
|-- /src
| |-- /api
| | |-- APIs.ts
| | |-- index.ts
| |-- /assets
| | |-- ...
| |-- /components
| | |-- ...
| |-- /hooks
| | |-- useInput.ts
| | |-- useModal.tsx
| |-- /lib
| | |-- staticData.ts
| |-- /pages
| | |-- \_app.tsx
| | |-- \_document.tsx
| | |-- ...
| |-- /store
| | |-- index.ts
| | |-- rootReducer.ts
| | |-- ...
| |-- /styles
| |-- /typings
| |-- ...
```

<br />

</div>
</details>

<details>
<summary>&nbsp;Conventional Commits</summary>
<div markdown="1">
<br />

[사용 라이브러리 참고](https://www.conventionalcommits.org/ko/v1.0.0/)

<br />

| message  | descripton                                                                                   |
| -------- | -------------------------------------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                                                             |
| fix      | 버그 수정                                                                                    |
| test     | Test 관련한 코드의 추가, 수정                                                                |
| refactor | 코드를 리펙토링                                                                              |
| chore    | (코드의 수정 없이) 설정을 변경                                                               |
| docs     | 문서의 수정                                                                                  |
| style    | (코드의 수정 없이) 스타일(style)만 변경<br />(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우) |

<br />

~~commit example~~

```
git commit -m "feat: 유저 로그인 기능 추가"
```

<br />
Commitizen 라이브러리 사용으로 위 방법보다는 아래방법을 추천합니다.

```
yarn commit
```

`yarn commit` 을 해주시고 커밋의 타입, 제목, 설명 등 가이드대로 입력한 후 각각 브랜치에 push 해주시면 됩니다!

> yarn commit 명령어는 제일 먼저 git add를 해주기 때문에 git add 명령어는 따로 입력안해주셔도 됩니다!

<br />

</div>
</details>

<details>
<summary>&nbsp;⚙ Settings</summary>
<div markdown="1">
<br />

## ⚙ Settings

dev server

```

yarn dev

```

node -v

```

v16.14.2

```

.env

```

NEXT_PUBLIC_API_URL=...

```

etc...

```
// clone 후 git hook이 정상적으로 동작하지 않는다면 다음 명령어 실행
chmod +x .husky/pre-commit
```

<br />

</div>
</details>

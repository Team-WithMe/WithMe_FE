# ๐ With Me FE

## branches

๊ฐ์ ๋ธ๋์น์์ ์์, ์์์ด ์๋ฃ ๋์๋ค๋ฉด master๋ธ๋์น์ PR ํ merge ์์ฒญ <br />
merge๊ฐ ์๋ฃ๋๋ฉด `๋ค๋ฅธ ๊ฐ๋ฐ์์๊ฒ pull ์์ฒญํ๊ธฐ` <br />
master ๋ธ๋์น๊ฐ ์๋ฐ์ดํธ ๋๋ฉด ํญ์ pull ๋ฐ์์ค์ผ ์ถฉ๋์ด ๋์ง ์์ต๋๋ค!

```
// ์ ๋ธ๋์น ๋ง๋ค๊ธฐ
git checkout -b "์ ๋ธ๋์น ์ด๋ฆ"

// ๋ธ๋์น ์ด๋
git checkout "๋ธ๋์น ์ด๋ฆ"
```

<br />

## member

|                    [LeeBonHoon](https://github.com/LeeBonHoon)                    |                   [changyuyeo](https://github.com/changyuyeo)                    |                   [KimTeaSick](https://github.com/KimTeaSick)                    |
| :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/100823427?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/80776262?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/88377392?v=4" width="100px" /> |

- `Lee-bonhoon`: ๋ฉ์ธ ํ์ด์ง, ํ ๋ฆฌ์คํธ, ์์ธ ํ์ด์ง
- `changyuyeo`: ํธ์คํธ ํ์ด์ง, ๋ง์ด ํ์ด์ง
- `KimTeaSick`: ํ ํ์ด์ง ์ ์ฒด

<br />

## hooks

### useModal ์ฌ์ฉ๋ฒ

```typescript
import { FC } from 'react';
import useModal from '@hooks/useModal';

//* ๋ชจ๋ฌ์ฐฝ ์์ ๋ค์ด๊ฐ ์ปจํ์ธ 
const TestModal: FC<{ onCloseModal: () => void }> = ({ onCloseModal }) => (
	<div style={{ background: 'white', width: '568px', height: '400px', borderRadius: '10px', padding: '20px' }}>
		๋ชจ๋ฌ ๋ด์ฉ... <br /> <button onClick={onCloseModal}>๋ชจ๋ฌ์ฐฝ ๋ซ๊ธฐ</button>
	</div>
);

const HostPage = () => {
	//* useModal ์ฌ์ฉ
	//* ModalPortal: root-modal ์ด๋ผ๋ id์ ๋ชจ๋ฌ ๋๋๋ง (children ์ผ๋ก ๋ชจ๋ฌ ์ปดํฌ๋ํธ ๋ง๋ค์ด์ ๋ฃ์ด์ฃผ๋ฉด ๋ฉ๋๋ค.)
	//* onCloseModal: ๋ชจ๋ฌ์ฐฝ ์คํ ์ด๋ฒคํธ
	//* onOpenModal: ๋ชจ๋ฌ์ฐฝ ๋ซ๋ ์ด๋ฒคํธ
	const { ModalPortal, onCloseModal, onOpenModal } = useModal();

	return (
		<>
			<button onClick={onOpenModal}>๋ชจ๋ฌ์ฐฝ ์ด๊ธฐ</button>
			<ModalPortal>
				<TestModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	);
};

export default HostPage;
```

- `useModal`์ ์ฌ์ฉํด ModalPortal, onCloseModal, onOpenModal์ ์ฌ์ฉํด์ ๋ชจ๋ฌ์ฐฝ์ ๊ด๋ฆฌํ๋ฉด ๋ฉ๋๋ค.
- `onOpenModal` ๋ฉ์๋๋ฅผ ์ฌ์ฉ ์ ๋ชจ๋ฌ์ฐฝ์ด ์คํ๋๋ฉฐ id๊ฐ root-modal ์ด๋ผ๋ ์์์ `ModalPortal` ์ปดํฌ๋ํธ๋ฅผ ๋๋๋ง ํ๊ฒ ๋ฉ๋๋ค. (react-portal ํ์ฉ)
- `onCloseModal` ์ด๋ฒคํธ ๋ฐ์ ์ ํด๋น ๋ชจ๋ฌ์ฐฝ์ ๋ซํ๊ฒ ๋ฉ๋๋ค.
- ์ค๋ณต๋๋ ๋ถ๋ถ์ ์ปค์คํ ํ์ผ๋ก ๋ง๋ค์์ผ๋ฉฐ react portal ๋ฅผ ํ์ฉํด root์ ๋ฐ๊นฅ์์ ๋๋๋ง ํ๊ธฐ ๋๋ฌธ์ ํจ์ฌ ํธ๋ฆฌํ๊ฒ ์ฌ์ฉ์ด ๊ฐ๋ฅํฉ๋๋ค.

<br />

### portal๋ฅผ ์ฌ์ฉํด์ ๊ตฌํํ ์ด์ 

> DOM Tree ์์์์ ๋ถ๋ชจ-์์ ๊ฐ์ ์ ์ฝ์์ ์์ ๋ก์์ง๊ธฐ ์ํด Portal ๊ธฐ๋ฅ์ ์ฌ์ฉํ๊ฒ ๋๋ ๊ฒ์๋๋ค. <br />
> ๋ํ, Portal์ ๋ ๋๋ง๋ ์์์์๋ ์ด๋ฒคํธ ๋ฒ๋ธ๋ง์ด ๋ฐ์๋๊ธฐ ๋๋ฌธ์ ๋ถ๋ชจ์์์์ ํต์  ์ธก๋ฉด์์๋ ์ ์ฉํฉ๋๋ค.

<a href="https://ko.reactjs.org/docs/portals.html" target="_blank" rel="noreferrer noopener">Portals ์ฐธ๊ณ  ๋ฌธ์</a>

<br />

## available URI

- / : ๋ฉ์ธ ํ์ด์ง
- /host : ์๋ก์ด ํ ๋ง๋ค๊ธฐ ํ์ด์ง
- /...

<br />

## skeleton

```
|-- /src
|   |-- /api
|   |   |-- APIs.ts
|   |   |-- index.ts
|   |-- /assets
|   |   |-- ...
|   |-- /components
|   |   |-- ...
|   |-- /hooks
|   |   |-- useInput.ts
|   |   |-- useModal.tsx
|   |-- /lib
|   |   |-- staticData.ts
|   |-- /pages
|   |   |-- _app.tsx
|   |   |-- _document.tsx
|   |   |-- ...
|   |-- /store
|   |   |-- index.ts
|   |   |-- rootReducer.ts
|   |   |-- ...
|   |-- /styles
|   |-- /typings
|   |-- ...
```

<br />

## commit message style

| message  | descripton                                                                                   |
| -------- | -------------------------------------------------------------------------------------------- |
| feat     | ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ                                                                             |
| fix      | ๋ฒ๊ทธ ์์                                                                                     |
| test     | Test ๊ด๋ จํ ์ฝ๋์ ์ถ๊ฐ, ์์                                                                 |
| refactor | ์ฝ๋๋ฅผ ๋ฆฌํํ ๋ง                                                                              |
| chore    | (์ฝ๋์ ์์  ์์ด) ์ค์ ์ ๋ณ๊ฒฝ                                                               |
| docs     | ๋ฌธ์์ ์์                                                                                   |
| style    | (์ฝ๋์ ์์  ์์ด) ์คํ์ผ(style)๋ง ๋ณ๊ฒฝ<br />(๋ค์ฌ์ฐ๊ธฐ ๊ฐ์ ํฌ๋งท์ด๋ ์ธ๋ฏธ์ฝ๋ก ์ ๋นผ๋จน์ ๊ฒฝ์ฐ) |

<br />

commit example

```
git commit -m "feat: ์ ์  ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ์ถ๊ฐ"
```

<br />

## โ settings

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

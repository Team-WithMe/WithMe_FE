# 📚 With Me FE

## branches

각자 브랜치에서 작업, 작업이 완료 되었다면 master브랜치에 PR 후 다른 개발자에게 pull 요청하기

```
// 새 브랜치 만들기
git checkout -b "새 브랜치 이름"

// 브랜치 이동
git checkout "브랜치 이름"
```

<br />

## member

|                    [LeeBonHoon](https://github.com/LeeBonHoon)                    |                   [changyuyeo](https://github.com/changyuyeo)                    |                   [KimTeaSick](https://github.com/KimTeaSick)                    |
| :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/100823427?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/80776262?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/88377392?v=4" width="100px" /> |

- Lee-bonhoon: 메인 페이지, 팀 리스트, 상세 페이지
- changyuyeo: 호스트 페이지, 마이 페이지
- KimTeaSick: 팀 페이지 전체

<br />

## Available URI

- / : 메인 페이지
- /host : 새로운 팀 만들기 페이지
- ...

<br />

## Skeleton

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
| feat     | 새로운 기능 추가                                                                             |
| fix      | 버그 수정                                                                                    |
| test     | Test 관련한 코드의 추가, 수정                                                                |
| refactor | 코드를 리펙토링                                                                              |
| chore    | (코드의 수정 없이) 설정을 변경                                                               |
| docs     | 문서의 수정                                                                                  |
| style    | (코드의 수정 없이) 스타일(style)만 변경<br />(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우) |

<br />

commit example

```
git commit -m "feat: 유저 로그인 기능 추가"
```

<br />

## ⚙ settings

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
// client
NEXT_PUBLIC_API_URL=...
```

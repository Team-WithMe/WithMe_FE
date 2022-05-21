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

## commit message style

| message  | descripton                    |
| -------- | ----------------------------- |
| feat     | 새로운 기능 추가 관련         |
| fix      | 버그 수정                     |
| test     | 테스트 코드 추가              |
| refactor | 코드 리팩토링                 |
| chore    | 빌드 업무, 패키지 매니저 수정 |
| docs     | 문서 수정                     |
| style    | 코드 formatting               |

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

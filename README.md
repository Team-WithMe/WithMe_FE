# 📚 With Me FE

## branches

각자 브랜치에서 작업, 작업이 완료 되었다면 master브랜치에 PR 후 다른 개발자에게 pull 요청하기

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
v16.13.1
```

.env

```
// client
NEXT_PUBLIC_API_URL=...
```

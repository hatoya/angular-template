# Angular Template

## 環境構築

### Firebase Tools

```shell
$ npm i -g firebase-tools
```

### node_modules

```shell
$ npm ci
```

## 開発環境

### Angular

```shell
$ npm run start
```

### Firebase Emulator

```shell
$ npm run start:emulator
```

## テスト環境

```shell
$ npm run test
```

## 開発フロー

1. Branch「master」から Branch「feature/issue\*\*\*」を切る
2. 作業が完了したら Brach「master」に向けてプルリクを作成

## インストール方法

1. `npm ci` を実行
2. `index.html` の title タグを修正
3. `environment.ts` 、`environment.dev.ts` 、 `environment.prod.ts` に firebaseConfig をセット
4. `.firebaserc` を修正
5. `angular-template` を新しいプロジェクトコードに置換

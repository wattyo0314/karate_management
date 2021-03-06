道場生管理アプリ
====

## Overview
このアプリは道場生の登録閲覧ができるアプリです。

## Description
道場生の登録を行い管理していきます。

## set up
①URLをクリックすると道場生の一覧が表示されます。
②右側に生徒を追加するボタンがありますのでそこをクリックすると登録画面に移ります。
③初期では、ボタンは非活性となっており各項目を入力するとボタンが押せるようになるので全項目を入力後ボタンをクリックし送信します。
④追加すると一覧に表示がされるようになります。

## イメージ図
- インデックスページです(右上のボタンを押すと道場生の追加ができるようになります。)
[![Image from Gyazo](https://i.gyazo.com/1b7ae94dec70ac2dcdde0be38b006214.png)](https://gyazo.com/1b7ae94dec70ac2dcdde0be38b006214)
- 道場生追加画面です(初期ではボタンは非活性となっており押すことができません)
[![Image from Gyazo](https://i.gyazo.com/32f9e3114c1b6c1d3100a0a90914a26f.png)](https://gyazo.com/32f9e3114c1b6c1d3100a0a90914a26f)
[![Image from Gyazo](https://i.gyazo.com/7e1764d7a4dbb7b100b0116dd3b6438b.png)](https://gyazo.com/7e1764d7a4dbb7b100b0116dd3b6438b)
- 必須項目を全て入力するようになるとボタンが押せるようになります
[![Image from Gyazo](https://i.gyazo.com/30b08a9ab505de2c324f0937a92ccc59.png)](https://gyazo.com/30b08a9ab505de2c324f0937a92ccc59)
- バリデーションにも対応しており、郵便番号を入力すると自動で住所が表示されます。
[![Image from Gyazo](https://i.gyazo.com/5098d7ba7da7c1553a1906a596aa346c.png)](https://gyazo.com/5098d7ba7da7c1553a1906a596aa346c)
- 詳細画面です。
[![Image from Gyazo](https://i.gyazo.com/e458e380089efad4a60cc3d882124987.png)](https://gyazo.com/e458e380089efad4a60cc3d882124987)

## 接続先URL
https://karatemanagement-e9371.web.app/

## 開発環境　
- 言語：Javascript　
- ツール:Visual Studio Code/ Nuxt.js/Vuetify 　
- DB:firebase
- サーバー：firebasehosting
## 実装機能　
- 道場生作成・編集・削除機能、
## 実装予定機能
- 一覧表示で生年月日から年齢を表示できるようにしたい
- ログイン機能
- 現在の保持級をセレクト表示できるようにしたい

## 企画背景　
- 道場の経営をしている弟の手助けができるようなアプリを作りたかったからです。

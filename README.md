# TDD勉強会のリポジトリ

日時: 2022/06/25

参考書籍

[Reactハンズオンラーニング](https://www.oreilly.co.jp/books/9784873119380/)

## テストを先に書く理由は？？

実装する関数のインターフェースをシンプルにするため。
テストが書きづらいものと書きやすいものがあるが、書きにくいものはインターフェースの設計が悪くて、  
使いにくくなっている。  
それをテストを先に書くことでインターフェースの強制が出来るので対策ができる。
  
そこに想定値の検証のテストも追加すれば、使いやすく仕様を満たしている関数が出来る。

## どうやる？

- 先にテストコードを書く。  
  テストを起動させると、関数がありませんなどのエラーが出るはず。
- 関数を実装する。
- テストが成功するまで実装を修正する。
- テストが全て通れば完了！！
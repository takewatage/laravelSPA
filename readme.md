<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Laravel + Vue + vagrant

laravelとvue.jsを使ってSPAでなんか作る

# ~環境構築~
## VirtualBoxインストール
``` https://www.virtualbox.org/wiki/Downloads```
## Vagrantのインストール
``` https://www.vagrantup.com/downloads.html```

## Homestead vagrant box のダウンロード
```
vagrant box add laravel/homestead 

//確認
>vagrant box list
laravel/homestead (virtualbox, 6.3.0)
```

任意のディレクトリ作成今回はD:にそのままいれたんご
```
>cd D: 
>git clone https://github.com/laravel/homestead.git Homestead
```

10年後。。。HomesteadにいどうしてHomestead.yaml（設定ファイル的な奴） を作成。
```
cd .\Homestead
bash init.sh
```
このコマンド打っても無反応だったので、エクスプローラーからinit.shをだぶるクリックしたらつくられた★<br>
Homestead.yamlを編集

```
ip: "192.168.10.10"  //任意
memory: 2048
cpus: 1
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub  //公開鍵の場所

keys:
    - ~/.ssh/id_rsa  //秘密鍵の場所

folders:
    - map: D:/Homestead/code/   //
      to: /home/vagrant/code/

sites:
    - map: homestead.test
      to: /home/vagrant/code/laravelSPA/public

databases:
    - homestead
```
編集したら"vagrant up"して構築完了
sshしていろいろインストール

```
vagrant ssh
cd /home/vagrant/code/laravelSPA
composer up
npm install
```

```http://192.168.10.10```でlaravelの画面がでればおわり


# vagrant 使用方法
### 起動

``
vagrant up
``

### 止める

``
vagrant halt
``

### 再起動

``
vagrant reload
``

### ssh接続

``
vagrant ssh
``

### yamlを更新

``
vagrant provision
``



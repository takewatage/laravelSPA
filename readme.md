<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Laravel + Vue + vagrant

laravelとvue.jsを使ってSPAでなんか作る

# 環境構築
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
ip: "192.168.10.10"
memory: 2048
cpus: 1
provider: virtualbox

#秘密鍵の場所
authorize: ~/.ssh/id_rsa.pub

#秘密鍵の場所
keys:
    - ~/.ssh/id_rsa

#ローカルとvagrantのディレクトリをマウントする設定
folders:
    - map: D:/Homestead/code/
      to: /home/vagrant/code/

#hostの設定
sites:
    - map: dev.laravelspa.com 
      to: /home/vagrant/code/laravelSPA/public
    - map: dev.phpmyadmin
　　  to: /usr/share/phpmyadmin/

databases:
    - homestead
```
編集したら"vagrant up"

sshしてクローンしていろいろインストール。
ローカルに/codeっていうディレクトリ作っといた方がいいかも？
例：D:/Homestead/code/

```
vagrant ssh
cd /home/vagrant/code
git clone https://github.com/topopopo/laravelSPA.git
cd /laravelSPA
composer up
npm install
```

yamlのipで設定した[http://192.168.10.10]()でlaravelの画面がでればおｋ

# phpMyadmin設定
phpMyAdminは、MySQLデータベースを使うためのインターフェースが備わったWebアプリケーション。便利

```
sudo apt-get update
sudo apt-get install phpmyadmin
```
``Do you want to continue? [Y/n]``
と聞かれるので　ｙで続ける
その後使用サーバーを聞かれるのでapache2を選択

Homestead.yamlの修正
```
# sites:の後に以下の文を追記
　　
　　　　 -map: dev.phpmyadmin
　　　　　to: /usr/share/phpmyadmin/
```
``vagrant provison``で更新

vagrant up で立ち上げた後
[dev.phpmyadmin](dev.phpmyadmin)にブラウザから接続するとphpmyadminが使用可能になっている
デフォルトユーザー名　homestead
デフォルトパスワード　secret



# vagrant コマンド
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




# 环境准备
[NodeJS](https://nodejs.org/en) 官网自行找TLS长期支持版下载

## 验证是否安装成功
终端运行

```bash
$ node -v
$ npm -v
```

当出现 npm&node版本时代表安装成功

## 安装

``` bash
$ npm install @nestjs/cli -g
$ nest -v
```
当出现nest版本号时安装成功

## 新建一个Nest项目并启动它
``` bash
$ nest new project
$ cd project
$ npm run start
```
运行成功后访问
``` bash
127.0.0.1:3000
```
当出现 hello world! 字样时，node服务已经启动！:clap: :clap: :clap:

# 安装 Rust

参考 => [Rust 官网](https://www.rust-lang.org/zh-CN/)

## Mac OS

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

复制终端执行～

安装完成后执行

```bash
rustc --version
```

安装完成后会正确输出 rust 的版本 commit 时间

## 升级

```bash

rustup update
```

## 卸载

```bash
rustup self uninstall
```

# 工具

- cargo : rust 中的包管理工具/rust 工程 cli，安装 rust 会自动安装,类似 node 中的 npm。
- rustc : rust 中的代码编译器。类似 tsc 工具。

# 快速开始

## 创建 rust 工程

```bash
cargo new hello_world
```

```rust

fn main(){
    println!("Hello world!")
}

```

- fn 定义函数，此处`main`函数是个特殊函数，类似`Java`中的`main`函数
- println!() 输出语句，其中`println`后面衔接 `!`代表这是个函数宏（后面会细说）

## 运行 rust 项目

```bash
cargo run
```

## 构建编译 rust

```bash
cargo build
```

加参数 `--release` 代表构建生产环境下的 rust 产物，`cargo` 会对代码进行优化，产物会在 `target/release` 文件夹中。不加 release 参数产物在 `target/debug` 文件夹下。
rust 构建产物的类型是二进制文件。

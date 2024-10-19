# 猜数游戏

## 本文目标

利用`cargo`生成项目，根据项目了解相关 rust 语法, `crates` 依赖包 [crates.io 官网](https://crates.io/)

## 新建项目

```bash
cargo new guess_game
```

## 代码

```rust
use rand::Rng;
use std::io;
use std::cmp::Ordering;

fn main() {
    println!("猜数字");
    // 生成随机数
    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("生成的随机数字是： {}", secret_number);
    println!("猜测一个数字");
    loop {
        let mut guess = String::new();
        // 读取字符输入
        io::stdin().read_line(&mut guess).expect("无法读取行");
        // 将字符输入的string类型转换为number类型
        let guess:u32 = guess.trim().parse().expect("请输入一个数字");
        println!("你猜测的数字是：{}",guess);
        // 将guess 与secret_number 比较
        match guess.cmp(&secret_number) {
            // guess < secret_number
            Ordering::Less => println!("猜测的数字小了"),
            // guess > secret_number
            Ordering::Greater=> println!("猜测的数字大了"),
            // guess = secret_number
            Ordering::Equal => {
                println!("猜对了");
                // 跳出循环
                break;
            },
        }
    }
}
```

- use 代表使用某个库（暂时只了解这么多）
- rand 代表一个 crate, 别人开发的程序包
- std 是 rust 自己实现的标准库，可以直接调用
- fn main main 函数,上章节有讲
- println!() 宏函数
- let 定义变量名 mut 代表这个变量可以修改
- loop 循环 break 退出循环
- xxx().expect xxx 方法执行后返回的`Results`, 一般会有两种，Ok 以及 error 这个是出现错误时执行的，可以对外抛出错误。

复制代码，进入项目目录运行 `cargo run` 即可！快来试试吧 🤩

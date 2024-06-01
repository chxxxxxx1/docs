# 控制器

控制器负责处理传入的请求和向客户端返回响应。控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们使用类和装饰器。装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。

## 路由

对于前端来说路由一词很容易理解，在前端中当我们有个链接
http://api.service.com/api/user/list 中，/api/user/list 就是当前路由，在 nestjs 的世界里路由是个什么样子呢？接下来我举个例子～

```typescript
import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class CatsController {
  @Get()
  findAll(): string {
    return "";
  }
}
```

可以看出有个 Controller 装饰器，还有一个 Get 装饰器，其中 Controller 装饰器声明此 class 是一个路由控制器，其中 Get 装饰器声明的是对应的路由及请求方式，是不是很容易理解。上面例子中 @Controller 中填入了/api 这是申明当前的 class 模块的 api 前缀，当浏览器访问 domain/api 时 此时进入的是 finAll 方法，其中还有 POST/DELETE/PUT 等常见的装饰器用于定义 api 方法及路径。

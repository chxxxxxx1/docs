# 资源（Resources）

如何声明一个 Post Api?

```typescript
import { Controller, Get, Post } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  @Post()
  getAll() {
    return "POST";
  }
}
```

如上代码所示，创建 POST 请求方式就是如此简单～ Nest 为所有标准的 HTTP 方法提供了相应的装饰器：@Put()、@Delete()、@Patch()、@Options()、以及 @Head()。此外，@All() 则用于定义一个用于处理所有 HTTP 请求方法的处理程序。

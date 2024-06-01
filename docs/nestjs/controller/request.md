# Request

处理接口请求时有时候需要处理来自客户端的请求细节，Nest 提供了访问 api 底层信息（默认 express）的请求对象（request）的访问方式。我们可以在处理函数中使用@Req()装饰器，指示 Nest 将请求对象注入处理程序

```typescript
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("cats")
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return "This action returns all cats";
  }
}
```

::: tip
为了在 express 中使用 Typescript （如 request: Request 上面的参数示例所示），请安装 @types/express
:::

Request 对象代表 HTTP 请求，并具有查询字符串(query)，请求参数(params)，http 标头（headers） 和请求体(body)的属性，在多数情况下，不必手动获取它们。 我们可以使用专用的装饰器，比如开箱即用的 @Body() 或 @Query() 。 下面是 Nest 提供的装饰器及其代表的底层平台特定对象的对照列表。
|装饰器| 描述 |
|:--|--:|
| @Request, @Req |获取 Request 实体|
| @Response, @Res |获取 Response 实体|
| @Next |获取 Next 实体|
| @Session |获取 req.session 实体|
| @Param(key?: string) |获取 Params 中的 key 属性，不填 key 获取全部 param|
| @Body(key?:string)|获取 Body 中的 key 的 value，不填返回全部 body|
| @Query(key?:string)|获取 Query 中的 Key 字段的 value,不指定返回全部 body|
| @Headers(name?: string)|获取 headers 中的 name 属性，不填返回全部请求头|
| @Ip()| 获取发起请求客户端的 IP|
| @HostParam()|获取发起请求的 hosts |

为了与底层 HTTP 平台（例如，Express 和 Fastify）之间的类型兼容， Nest 提供了 @Res()和 @Response() 装饰器。@Res() 只是 @Response() 的别名。两者都直接暴露了底层平台的 response 对象接口。在使用它们时，您还应该导入底层库的类型声明（如：@types/express）以充分利用它们。需要注意的是，在请求处理函数中注入 @Res()或 @Response() 时，会将 Nest 置于该处理函数的特定于库（Library-specific mode）的模式下，并负责管理响应。这样做时，必须通过调用 response 对象（例如，res.json(…) 或 res.send(…)）发出某种响应，否则 HTTP 服务器将挂起。
如需要继续使用 Nest 的 return 返回数据，可以在 Response 中填入参数@Response({passthrough:true})

```typescript
import { Controller, Get, Response } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Response({ passthrough: true }) res): string {
    return this.appService.getHello();
  }
}
```

# 请求头 （Headers）

有时候我们需要设置响应头信息，Nest 提供了@Header() 装饰器进行快速的配置。

```typescript
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}

```

如上代码，给这个 Post 接口设置了 key 为 Cache-Control，value 为 none 的响应头信息
::: tip
@Header()需要从 @nestjs/common 包导入
:::

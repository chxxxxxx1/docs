# 路由状态码 Status Code

NestJS 提供了一个 @HttpCode 装饰器用来自定义状态码～ 例如:

```typescript
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}

```

其中有一个 POST 接口，使用@HttpCode 装饰器修改其返回 http 状态码为 204
::: tip
HttpCode 装饰器需要从 @nestjs/common 包导入
:::

# 动态路由

当需要获取动态路由中的参数时可以使用@Param 参数装饰器，例如：

```typescript
@Get('/goods/:id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} good`;
}

```

当访问/goods/1 时，此时 findOne 程序中拿到的 params 为一个对象

```json
{
  "id": 1
}
```

同事@Param 控制器也可以提供传入的 Key，当 Key 传入后将获得指定的 param，例如：

```typescript
@Get('/goods/:id')
findOne(@Param('id') id): string {
  return `This action returns a #${id} good`;
}

```

此时指定获得 id 值
::: tip
Param 需要从 @nestjs/common 包导入。
:::

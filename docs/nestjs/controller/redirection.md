# 重定向

要将响应重定向到特定的 URL，可以使用 @Redirect() 装饰器或特定于库的响应对象（并直接调用 res.redirect()）。

@Redirect() 装饰器有两个可选参数，url 和 statusCode。 如果省略，则 statusCode 默认为 302。

```typescript
@Get()
@Redirect('https://nestjs.com', 301)

```

有时候可能也需要动态的去设置其重定向，可以将 controll 处理程序中返回 url 和 statusCode 字段，例如

```typescript
@Post()
getRedirect(){
    return {
        "url": 'https://nestjs.com',
        "statusCode": 301
    }
}
```

返回的值将覆盖传递给 @Redirect()装饰器的所有参数。 例如:

```typescript
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}

```

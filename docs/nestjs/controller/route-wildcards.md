# 路由通配符

定义 API 路径支持正则匹配方式，例如：

```typescript
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

路由路径 'ab*cd' 将匹配 abcd 、ab_cd 、abecd 等。字符 ? 、+ 、 * 以及 () 是它们的正则表达式对应项的子集。连字符（-） 和点（.）按字符串路径逐字解析。

# 归纳一下Http有几种请求方式

## Get 请求

```TypeScript
const request = async () => {
   const result = await fetch('http://api.service.com/api/v1/apps?page=1&pageSize=10').then(res=>res.json)
   console.log(result)
}
```
Get请求使用的最多，从在浏览器输入网址开始就是使用的Get请求，上图请求api.service.com，接口路径（路由）为/api/v1/apps,请求参数为page以及pageSize
### 特点
 1. Get请求参数放置在请求链接上。
 2. URL链接参数明文

## POST 请求
```TypeScript
const request = async () => {
   const result = await fetch('http://api.service.com/api/v1/apps',{method:"POST",body:JSON.stringfly({app:'ABC'})}).then(res=>res.json)
   console.log(result)
}
```
Post请求常见于各种创建类或者需要携带大量数据上传的时候使用，文件上传使用FormData格式进行上传文件，讲FormData放置到body中。以下示例：
```typescript
const request = async (file:Blob) => {
    const formData = new FormData()
    formData.append('utils.ts',file)
   const result = await fetch('http://api.service.com/api/v1/apps',{method:"POST",body: formData}).then(res=>res.json)
   console.log(result)
}
```
## DELETE 请求

## PUT 请求

## PATCH 请求
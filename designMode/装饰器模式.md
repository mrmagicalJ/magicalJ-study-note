# 装饰器模式

为对象添加新功能
不改变其原有的结构和功能

例如手机壳，不影响手机本身的功能，增加新的功能

## 场景

ES7 装饰器

```javascript
@annotation
class MyClass { }

function annotation(target) {
   target.annotated = true;
}
```

## [core-decorators](https://github.com/jayphelps/core-decorators)

第三方开源的 lib，提供常用的**装饰器**

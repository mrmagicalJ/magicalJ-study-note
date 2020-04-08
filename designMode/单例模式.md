# 单例模式

系统中唯一被使用
一个类只有一个实例

## 示例

登录框
购物车
vuex 和 redux 中的 store

## 场景

jquery只有一个 $

```javascript
if (window.jQuery != null) {
  return window.jQuery
} else {
  // 初始化
}
```

模拟登陆框

## 代码

```javascript
class SingleObject {
  login() {
    console.log(`login`)
  }
}

SingleObject.getInstance = (() => {
  let instance

  return () => {
    if (!instance) {
      instance = new SingleObject()
    }

    return instance
  }
})()

const obj1 = SingleObject.getInstance()
obj1.login()
const obj2 = SingleObject.getInstance()
console.log(obj1 === obj2) // true
```

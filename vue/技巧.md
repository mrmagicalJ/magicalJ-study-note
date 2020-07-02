# 技巧

## 将事件的创建和销毁写在一起

在 Vue 中，可以用`$on`和`$once`去监听所有的生命周期钩子函数，如监听组件的updated钩子函数可以写成`this.$on('hook:updated', () => {})`

```javascript
mounted(){
  window.addEventListener('resize', xxx)
  // 通过hook监听组件销毁钩子函数，并取消监听事件
  this.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', xxx)
  })
}
```

## 监听子组件的生命周期

需要监听第三方组件数据的变化，但是组件又没有提供change事件

```javascript
<child @hook:updated="childUpdated" />
```

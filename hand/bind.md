# bind

```javascript
Function.prototype.myBind = function(context, ...oldArgs) {
  const This = this
  return function(...args) {
    return This.apply(context,oldArgs.concat(args))
  }
}
```

```javascript
Function.prototype.myBind = function(context, ...oldArgs) {
  const This = this
  return function(...args) {
    context.fn = This
    const result = context.fn(...oldArgs.concat(args))
    delete context.fn
    return result
  }
}
```

## 多次 bind 的结果

```javascript
const obj = {
  name: 'obj',
  say(){
    console.log(this.name)
  }
}

const a = {name: 'a'}
const b = {name: 'b'}


const f1 = obj.say.myBind(a)
const f2 = obj.say.myBind(b)
const f3 = f1.myBind(b)

f1() // a
f2() // b
f3() // a
```

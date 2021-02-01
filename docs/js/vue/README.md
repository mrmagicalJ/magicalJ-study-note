# Vue

## new Vue 发生了什么

### 1. `mergeOptions`

合并options

### 2. `initLifecycle(vm)`

初始化生命周期

### 3. `initEvents(vm)`

初始化事件

### 4. `initRender(vm)`：初始化render

初始化渲染

### 5. `callHook(vm, 'beforeCreate')`：触发 beforeCreate 钩子

触发 beforeCreate 钩子

### 6. `initInjections(vm)` // resolve injections before data/props

### 7. `initState(vm)`：初始化 props、data、computed、methods和watch

```javascript
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

### 8. `initProvide(vm)` // resolve provide after data/props

### 9. `callHook(vm, 'created')`：触发 created 钩子

触发 created 钩子

## vue3架构

vue

- compiler-dom
  - compiler-core
- reactivity
- runtime-dom
  - runtime-core

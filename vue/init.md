# init

```javascript
function Vue(options) {
  this._init(options)
}

initMixin(Vue)

function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this
    // 一个防止观察自身的标志
    vm._isVue = true
    vm.$options = options
  }

  initState(vm)

  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}

const inBrowser = typeof window !== 'undefined'
Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
function mountComponent(vm, el, hydrating) {
  vm.$el = el

  let updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }
}
// 缓存之前的$mount
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function(el, hydrating) {
  el = el && query(el)

  const options = this.$options
  if (!options.render) {
    let template = options.template
    if (template) {
      // .
    } else {
      template = getOuterHTML(el)
    }
  }

  return mount.call(this, el, hydrating)
}

function query (el) {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      // process.env.NODE_ENV !== 'production' && warn(
      //   'Cannot find element: ' + el
      // )
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    const container = document.createElement('div')
    container.appendChild(el.cloneNode(true))
    return container.innerHTML
  }
}

function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data =  typeof data === 'function'
  ? getData(data, vm)
  : data || {}

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    proxy(vm, `_data`, key)
  }

  observe(data, true /* asRootData */)
}

function getData(data, vm) {
  return data.call(vm, vm)
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

// 等待，无操作
function noop() {}

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function observe(value, asRootData) {

}
```

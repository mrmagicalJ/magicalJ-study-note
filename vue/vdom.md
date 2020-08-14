# vdom

[snabbdom](https://github.com/snabbdom/snabbdom)

用js对象描述真实dom

## 为什么使用vdom

手动操作dom比较麻烦，还要考虑兼容性问题，虽然有jquery等库简化操作，但随着项目增大，复杂度不断提升

为了简化操作dom，可以使用模板引擎，但是模板引擎没有解决**跟踪状态变化**的问题，于是vdom出现了

- 开销更小
- 可以合并更改
- 可以跟踪上一次的状态，并且用作diff

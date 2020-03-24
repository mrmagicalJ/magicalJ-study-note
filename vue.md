# vue相关

## 有一个 A 页面，通过`vue-router`跳转到 B 页面，生命周期是怎么样的，如果 A 页面有定时器，跳转过后还会执行吗

生命周期如下:

1. B beforeCreate；
2. B created；
3. B beforeMount；
4. A beforeDestroy；
5. A destroyed；
6. B mounted。

依然会执行

**原理**：

## vue3今年发布了，与 vue2 相比在响应式的实现上有什么区别

vue2 采用的是 defineProperty 去定义 get 和 set，而 vue3 改用了 proxy，也代表着 vue 放弃了兼容 ie。

## vue-router、vuex 都是作为vue插件，他们分别都是如何在vue中生效的

通过vue的插件系统，用vue.mixin混入到全局，在每个组件的生命周期的某个阶段注入组件实例。

## vue的设计架构

vue2采用的是典型的混入式架构，类似于express和jquery，各部分分模块开发，再通过一个mixin去混入到最终暴露到全局的类上。

## 如果你有能力阅读源码，最好多阅读一些，比如koa、loadsh等等。因为这些源码会让面试官刮目相看

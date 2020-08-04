# React

React的首要思想是通过组件（Component）来开发应用，基于组件的应用开发是广泛使用的软件开发模式，用**分而治之**的方法，把一个大的应用分解成若干小的组件，每个组件只关注于某个小范围的特定功能，但是把组件组合起来，就能够构成一个功能庞大的应用。

## 为什么没有使用React却必须要引入

我们的组件都会引入 React，但是却没有使用，为什么还要引入呢？因为 JSX 最终会被转译成依赖于 React 的表达式

## 在 JSX 中添加的事件处理函数，与原生 HTML 的事件有什么区别呢

- 原生的事件处理函数都是在全局作用域下执行的，污染了全局环境，而 JSX 挂载的每个函数都可以控制在组件范围内
- 给很多 DOM 元素添加事件可能会影响网页的性能，而在 JSX 中使用了事件委托（event dlegation）的方式处理，最后只在 DOM 树上添加了一个事件处理函数，挂在最顶层的 DOM 节点上，所有的事件都被这个事件处理函数捕获，然后根据具体组件分配给特定函数，性能要高
- 对于绑定了事件的 DOM 元素，如果要动态地从 DOM 树中删掉的话，需要把对应的事件处理器注销。如果忘了注销，就可能造成内存泄露，这样的bug很难被发现。因为 React 控制了组件的生命周期，在 unmount 的时候自然能够清除相关的所有事件处理函数，内存泄露也不再是一个问题。

## 直接修改 state 会怎么样

React 改变状态必需要使用 setState，直接修改 state，state 的值是改变了，但是界面不会有任何变化，因为直接修改 state 不会驱动组件重新渲染，而 setState 所做的就是先更改 state，然后驱动组件更新

## 纯函数

纯函数，指的是没有任何副作用，输出完全依赖于输入的函数，两次函数调用如果输入相同，得到的结果也绝对相同。

## 生命周期

### 挂载过程

1. 挂载（mount），第一次把组件在 DOM 树中渲染
   1. constructor
   2. getInitialState
   3. getDefaultProps
   4. componentWillMount
   5. render
   6. componentDidMount
2. 更新（update），组件重新渲染
3. 卸载（unmount），组件从 DOM 树中删除

render 函数本身并不往 DOM 树上渲染内容，它只是返回一个 JSX 表示的对象，然后由 React 来根据返回对象决定如何渲染。而 React 肯定是要把所有组件返回的结果综合起来，才能知道该如何产生对应的 DOM 修改。所以，只有 React 调用所有组件的 render 函数之后，才有可能完成挂载，这时候才会依次调用各个组件的 componentDidMount 函数作为挂载过程的收尾。

> componentDidMount 只在浏览器端执行

### 更新过程

1. componentWillReactiveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate

#### componentWillReactiveProps

只要父组件的 render 方法被调用，在 render 函数里面被渲染的子组件就会经历更新过程，不管父组件传给子组件的 props 有没有变化，都会触发子组件的 componentWillReactiveProps

> 通过 this.setState 方法触发的更新过程不会调用这个函数，这是因为这个函数适合新的 props 值（也就是参数是 nextProps）来计算是不是要更新内部状态 state，如果 this.setState 的调用导致 componentWillReactiveProps，那就是一个死循环了

#### shouldComponentUpdate

render 和 shouldComponentUpdate 函数，也是 React 生命周期函数中唯二两个要求有返回结果的函数。render 函数的返回结果将用于构造 DOM 对象，而 shouldComponentUpdate 函数返回一个布尔值，告诉 React 这个组件在这次更新过程中是否要继续。

通过 setState 引发的更新过程，并不是立刻更新组件的 state 值，在执行到到函数 shouldComponentUpdate 时，this.state 依然是 this.setState 执行前的值，所以我们要做的实际上就是在 nextProps、nextState、this.props 和 this. state 中互相比对。

#### componentDidUpdate

componentDidUpdate 可以在服务器端被执行，但在做服务器端渲染时，基本不会历更新过程，因为服务器端只需要产出 HTML 字符串，一个装载过程就足够产出 HTML 了，所以正常情况下服务器端不会调用 componentDidUpdate，如果调用了，说明我们的程序有错误，需要改进。

### 卸载过程

**componentWillUnmount**：componentWillUnmount 中的工作往往和 componentDidMount 有关。比如，在 componentDidMount 中用非 React 的方法创造了一些 DOM 元素，如果撒手不管可能会造成内存泄露，那就需要在 componentWillUnmount 中把这些创造的DOM元素清理掉。

## state和prop的局限

父组件维护了一份自己的状态，子组件一样，重复的数据的带来的问题：如何保持一致？如果不一致，很难决定到底使用哪个

祖父级组件与最底层组件通讯需要父级组件做中转，即使父级组件用不到

## flux

- Dispather：用来派发action
- Store
- Action：
- View

### React 组件通信

#### props校验

自 React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替。

```javascript
import PropTypes from "prop-types";
```

## setState可能是异步的

出于性能考虑，合并更新

- 在**合成事件**和**声明周期**中是异步的
- 在`setTimeout`中和**原生事件**中是同步的

如何实现链式调用呢，使用函数，setState可以接受一个对象或者**一个函数**，参数是处理到当前步骤的state

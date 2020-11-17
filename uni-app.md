# uni-app

1、 全局安装

```bash
npm i -g @vue/cli
```

2、 创建项目

```bash
vue create -p dcloudio/uni-preset-vue your-project
```

3、启动项目（微信小程序）

```bash
npm run dev:mp-weixin
```

4、使用微信小程序开发者工具导入项目

项目地址为`your-project/dist/dev/mp-weixin`

## 生命周期

- 全局的APP中使用`onLaunch`表示启动
- 页面中使用`onLoad`和`onShow`分别表示 页面加载完毕 和 页面显示
- 组件中使用`mounted`表示组件挂载完成
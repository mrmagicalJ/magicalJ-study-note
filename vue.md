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

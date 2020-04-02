# prettier

[prittier官网](https://prettier.io/)

## 为什么使用prettier

1. 无休止的关于代码格式的问题，
2. 希望有一套统一的编码格式，但执行起来却不容易，还需要花费额外的时间去处理这个问题

## 安装

npm i prettier -D

## 配合eslint

使用 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) ，将其作为 ESLint 的一个插件

```javascript
npm i eslint-plugin-prettier -D
// eslintrc.json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

如果eslint的规则和prettier的规则发生冲突的时候（主要是不必要的冲突），这个时候就会由[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)这个插件来关闭掉额外的报错

```javascript
npm i eslint-config-prettier -D
// eslintrc.json
{
  "plugins": ["prettier", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

prettier的配置放在`.prettierrc`中

## git工具链

### [husky](https://github.com/typicode/husky)

让git的钩子(hooks)更加好用,可以阻止不好的`commit`和`push`等

```javascript
npm install husky --save-dev
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

### [lint-staged](https://github.com/okonet/lint-staged)

针对暂存的git文件运行linters并且不要让💩进入你的代码库

```javascript
npm install husky --save-dev
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

### [Commitizen](https://github.com/commitizen/cz-cli)

提交更好地commit，使用git-cz替代git commit

### [conventional-changelog-cli](https://github.com/conventional-changelog-archived-repos/conventional-changelog-cli)

生成change log

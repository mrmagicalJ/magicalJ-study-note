# vscode

## 设置中文

打开vscode后，按control + shift + p，输入 configure language / configure display language，将locale 改为  zh-CN，点击扩展，或者按control + shift + x，输入chinese，选择中文简体，install，重启即可。

## 扩展

### html

- html snippets（h5标签提示）
- Auto Rename Tag（自动更改闭合标签）
- 启用 emmet（使用 html 的语法糖）
    1. 按control + shift + p；
    2. 输入 open Settings(JSON)；
    3. 在配置中加入"emmet.triggerExpansionOnTab": true。
- Class autocomplete for HTML（自动补全class）

### css

- Sass
- CSS Peek

### js

- JavaScript (ES6) code snippets es6代码片段

### vue

- Vetur
- Vue VSCode Snippets（快速建立vue模板）

### 其它

- Path Intellisense
- Bracket Pair Colorizer（每一对括号用不同颜色区别）
- filesize（在底部状态栏显示当前文件大小，点击后还可以看到详细创建、修改时间）
- Output Colorizer（输出提示的文字颜色有一些变化，方便获取关键信息）
- Bookmarks（特定行标记）
- Image Preview（图片预览）
- editorconfig for vscode

## 快捷键

### 光标移动

- 针对单词：Option（Windows 上是Ctrl键）和方向键
- 行首行末：Cmd+方向键（Windows上是home和end键）
- 代码块：光标放在花括号上时，只需按下Cmd+Shift+\（Windows 上是Ctrl+Shift+\）
- 文档第一行和末尾行：Cmd 和上下方向键即可（Windows上是Ctrl+home/end）

> 掌握了上面的快捷键之后，你还可以非常轻松地掌握文本选择的操作。因为对于基于单词、行和整个文档的光标操作，你只需要多按一个Shift键，就可以在移动光标的同时选中其中的文本。

### 删除

删除当前行：Cmd+Shift+K”（Windows 上是“Ctrl+Shift+K”），如果你只是想要剪切这行代码，那么你直接按下“Cmd+x”（Windows上是“Ctrl+x”）即可。

### 注释

如果你要将一行代码注释掉，你只需按下“Cmd+/”（Windows上是“Ctrl+/”）。如果你需要把一整段代码注释掉，按下“Option+Shift+A”（Windows上是“Alt+Shift+A”）即可。

### 光标

- “Cmd+Option+下方向键”（Windows上是“Ctrl+Alt+下方向键”），在当前光标的下面创建一个光标；
- 跟代码行批量处理有关，首先你选择多行代码，然后按下“Option+Shift+i”（Windows上是Alt+Shit+i），这样操作的结果是：每一行的最后都会创建一个新的光标；

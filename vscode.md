# vscode

## 设置中文

打开vscode后，按control + shift + p，输入 configure language / configure display language，将locale 改为  zh-CN，点击扩展，或者按control + shift + x，输入chinese，选择中文简体，install，重启即可。

## 扩展

## 代码补全

- TabNine 一款基于深度学习的代码自动补全神器

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
- 有的时候你移动完光标之后，又希望把光标回退到上一个位置，这时你只需按下“Cmd+U”（Windows上是“Ctrl+U”），就可以撤销这一次光标的移动。

当你想在当前行的下面新开始一行时，你只需按下“Cmd+Enter”（Windows上是“Ctrl+Enter”）；而当你想在当前行的上面新开始一行时，你只要按下“Cmd+Shift+Enter”（Windows上是“Ctrl+Shit+Enter”）。

当你想移动一段代码时，可以按住“Option+上下方向键”（Windows中就是“Alt+上下方向键”），将当前行，或者当前选中的几行代码，在编辑器里上下移动。如果你同时按住“Shift”键的话，也就是“Option+Shift+上下方向键”（Windows中就是“Alt+shift+上下方向键”），那就可以复制这几行，然后粘贴到当前行的上面或者下面。

###　文件跳转

- 按下“Ctrl+Tab，然后继续按着“Ctr”键但是松开pab键，这样你就可以打开一个文件列表，这个列表罗列了当前打开的所有文件。接下来，你可以通过按下“Tab”键在这个列表里跳转，选择你想要打开的文件。最后选到你想打开的文件后，松开“Ctr”键，这个文件就被打开了）
- 不过，使用这个方式切换文件，最大的问题在于，文件一旦多了，你就得不停地按“Tab”键，没完没了地上下跳转和挑选，这会是一个恼人的耗费时间和眼力的操作。还好，VS Code在命令面板里提供了一种支持搜索的文件跳转方式。当你按下“Cmd+P”（Windows上是Ctrl+P）时，就会跳出一个最近打开文件的列表，同时在列表的顶部还有一个搜索框。看到这里想必你应该明白了，你可以使用这个搜索框来快速地找到你想要的文件，然后按下“Enter”键直接打开，这整个过程简单而目顺畅。 在这里，我再分享给你一个小技巧，当你找到目标文件后，可以按下“Cmd+Enter”（Windows 上是Ctrl+Enter）组合键。你会发现与上面不一样的是，这个文件在一个新的编辑器窗口中打开了

### 行跳转

- “Ctrl+g”，输入框输入行号
- 定义（Definition）和实现（implementation）跳转
  - 这个功能也需要语言本身的支持。比如说当你在使用TypeScript时，按下F12，就可以跳转到函数的定义处。也可以按下“Cmd+F12”（Windows上是Ctrl+F12），跳转到函数的实现的位置。
- 引用（Reference）跳转
  - 很多时候，除了要知道一个函数或者类的定义和实现以外，你可能还希望知道它们被谁引用了，以及在哪里被引用了。这时你只需要将光标移动到函数或者类上面，然后按下“Shift+F12”，VS Code 就会打开一个引用列表和一个内嵌的编辑器。在这个引用列表里，你选中某个引用，VS Code就会把这个引用附近的代码展示在这个内嵌的编辑器里。

### 重构

当我们想修改一个函数或者变量的名字时候，我们只需把光标放到函数或者变量名上，然后按下F2，这样这个函数或者变量出现的地方就都会被修改

如果我使用的函数是来自某个 npm 模块，也就是说这是别人写的代码，VS Code 还能知 道这个函数的参数类型吗?

- TypeScript 的一大特点就是静态类型，一般一个 TypeScript 项目，发布的 时候会编译成 JavaScript，同时也会发布一个d.ts文件，这个文件记录了发布的这个 JavaScript 文件里的对象类型。
- 首先，就是看看这个 npm 包本身有没有自带 d.ts 文件，如果有的话就直接使用。使用 TypeScript 书写的项目一般都会有d.ts 文件，而很多知名的 JavaScript 框架，虽然并不是使用 TyepScript 来维护的，也提供了 d.ts 文件。
- 其次，VS Code 还会看当前项目文件夹下是否有 d.ts 文件。如果你使用的某个 npm 包自己没有 d.ts 文件的话，你可以自 行书写。关于如何书写 d.ts 文件，可以参考TypeScript 的文档。
- 最后，还有很多 JavaScript 项目，它们自己没有 d.ts 文件，但是社区为它们书写了d.ts文件，并且发布到 npm @types 下 供大家使用。而VS Code 会自动到 npm @types 里进行搜索，看看是不是有合适的类型 d.ts 可以使用。

为了能够让 JavaScript 社区渐进地使用 TypeScript 的工具链，他们为 JavaScript 提 供了一个新的功能，叫做ts-check，也就是在 JavaScript 代码中，手动地申明开启更强的代码审核。添加下面这段注释: // @ts-check，有了 ts-check后，我们就可以一个文件一个文件地给代码添加类型信息，然后为这个文件单独开启错误检查了。这样既不用担心全部迁移 TypeScript 带来的工作量和各种阻力，也能享受到类型系统所带来的好处了

### 主题

one dark pro

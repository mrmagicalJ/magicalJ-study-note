# you don't know javascript

## 编译原理

分词/词法分析（Tokenizing/Lexing）
解析/语法分析（Parsing）
  构建抽象语法树（Abstract Syntax Tree, AST）
代码生成
  根将ST树转换为可执行代码

引擎
  从头到尾负责整个JavaScript程序的编译及执行过程。
编译器
  就是干上面那活的兄弟
作用域
  负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。

## LHS 与 RHS

LHS：获取变量本身的位置
RHS：获取变量存储的值
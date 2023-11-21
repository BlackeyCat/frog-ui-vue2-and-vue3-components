# HydrationUi Cli

组件库开发脚手架

## add

新增组件，可选是否需要生成doc文档（类似checkbox-group组件需要选否）

```bash
1. yarn cli add
2. 输入组件名list，并回车生成文档

|-- components
  |     |-- list
  |     |     |-- doc
  |     |     |     |-- list.md (组件readme文档)
  |     |     |-- test
  |     |     |     |-- vue2.spec.js
  |     |     |     |-- vue3.spec.js
  |     |     |-- index.ts (组件入口文件)
  |     |     |-- list.js (组件业务文件)
  |     |     |-- list.vue (组件模板文件)
|-- styles
  |     |-- list.less (组件样式文件)

```

### 文件介绍

## release

发布版本，包含更新version、git tag、build、publish操作

```bash
yarn cli release
```

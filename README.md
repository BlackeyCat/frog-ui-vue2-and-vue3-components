# 组件库脚手架

## 目录结构

```
.
├── docs 组件库文档站
├── lib  打包后的组件
│   └── v2 Vue2 版本的组件包
│   └── v3 Vue3 版本的组件包
├── scripts 组件库脚本
│   └── postinstall 组件库安装后自动匹配环境脚本
├── vue2-playground 组件库Vue2调试环境
├── vue3-playground 组件库Vue3调试环境
└── ...

```

## 初始化仓库

```bash

# root
> yarn # 初始化

# 组件库文档站
> cd ./docs
> yarn # 初始化
> yarn dev # 预览组件库文档站
> yarn build # 构建组件库文档站

# 组件库 Vue2 调试环境
> cd ./packages/vue2-playground
> yarn # 初始化
> yarn dev # 运行 Vue2 调试环境
> yarn build   # 构建 Vue2 版本的组件包

# 组件库 Vue3 调试环境
> cd ./packages/vue3-playground
> yarn # 初始化
> yarn dev # 运行 Vue3 调试环境
> yarn build # 构建 Vue3 版本的组件包

# 新建组件模板 CLI
> cd ./packages/frog-ui-cli
> yarn # 初始化
> yarn cli add # 新建组件
```

## 发布组件库新版本

```bash
# 先构建 Vue3/Vue2 版本的组件包, 再执行
> yarn build
>
> yarn publish # 发布正式版
>
> yarn publish --tag beta # 发布测试版，例如 0.0.1-beta.1
```

## 安装组件库

> yarn add @frog-components

## 备注

### 组件库对宿主环境的依赖

```sh
"lodash": "^4.17.21"
"@vue/composition-api": "^1.0.0-rc.1",
"vue": "^2.0.0 || >=3.0.0"
```


### 一套版本控制标准 latest@x.y.z

| 类目 | 描述                               |
| ---- | ---------------------------------- |
| 补丁 | 修复 bug,小改动，增加 z            |
| 小改 | 增加了新特性，但能向后兼容，增加 y |
| 大改 | 有很大的改动，无法向后兼容，增加 x |

### 一批改变版本指令

| 类目 | 描述                   |
| ---- | ---------------------- |
| 大改 | `yarn version --major` |
| 小改 | `yarn version --minor` |
| 补丁 | `yarn version --patch` |

### 包信息查询

-   查看远程某包信息 `yarn info <package> [<field>] yarn info react`
-   列出当前项目的依赖 `yarn list [--depth] [--pattern] yarn list`
-   列出某包安装的原因 `yarn why <query>`
-   列出某包所属的人员 `yarn owner list <package>`
-   查看哪些依赖过时了 `yarn outdated yarn outdated [package...]`
-   列出依赖的颁发执照 `yarn licenses list`

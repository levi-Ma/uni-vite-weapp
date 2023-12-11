# uni-vite-weapp

## 描述

UniApp + Vite4 + Vue3 + TypeScript 小程序开发模板

## 包说明
[`uni-app`](https://uniapp.dcloud.net.cn/)

[`vite`](https://v4.vitejs.dev/)

[`vue`](https://vuejs.org/)

[`pinia`](https://pinia.vuejs.org/)

[`@antfu/eslint-config`](https://github.com/antfu/eslint-config): Anthony's ESLint config preset

[`unocss`](https://unocss.dev/): The instant on-demand atomic CSS engine.

[`unocss-preset-weapp`](https://github.com/MellowCo/unocss-preset-weapp): unocss 小程序预设 (配合 UnoCSS 插件使用)

[`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import): Vite、Webpack和Rollup按需自动导入Api

[`@hugh-ma`](https://github.com/levi-Ma/hugh-lib): 包含一些工具方法的库

## 开发环境

+ 推荐使用 Visual Studio Code 开发
+ Node.js 18/20+
+ 推荐使用 pnpm 包管理工具

## 配套插件

+ ESLint
+ EditorConfig for VS Code
+ uni-helper
+ UnoCSS
+ Vue Language Features (Volar)
+ TypeScript Vue Plugin (Volar)

## 开发规范

### CSS 预编辑器规范

- 避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于 20 行的嵌套规则出现。
- 少用#，少用\*，少用标签选择器
- 尽量避免使用 !important

### CSS 属性书写顺序

建议遵循以下顺序

1. 局方式、位置，相关属性：`position / top / right / bottom / left / z-index / display / float /`
2. 盒模型：`width / height / padding / margin / border / overflow /`
3. 文本排版：`font / line-height / text-align / word-wrap /`
4. 视觉外观：`color / background / list-style / transform / animation / transition /`
5. 其他属性：`...`

### class 标签命名

- 尽量采用-分开关键字命名
- 英文单词尽量不要缩写

### js 规范

- 采用模块化编程，通过`ES6`语法暴露 `-> export`
- 重复代码进行封装为方法，减少代码臃肿，让代码清晰明了
- 减少代码圈复杂度，减少代码嵌套，善于`return`，少用`else`
- 函数与变量命名采用驼峰命名法 `-> userInfo or getUserInfo`
- 常量(不会再次进行修改)命名采用大写加下划线命名 `-> USER_STATUS`
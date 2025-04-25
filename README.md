# vite-vue3-ts monorepo

## scripts

```bash
# 安装
pnpm i

# landing-page dev server
pnpm dev-landing

# landing-page build
pnpm build-landing
```

## 技术栈

vite + vue3 + typescript 基于 pnpm 的多包项目框架，项目使用技术栈见下表：

<!-- prettier-ignore-start -->

| 类别 | 包/工具 | 备注 |
| --- | ------ | ---- |
|IDE|[VS Code](https://code.visualstudio.com/)| 推荐使用vscode + [Vue-Official插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)的组合。`.vscode/settings.json`中配置了vscode相关的eslint和stylelint配置; `.vscode/extensions.json`中列出了项目推荐使用的几个插件。 |
|包管理器|[pnpm](https://pnpm.io/zh/)| [pnpm vs npm vs yarn](https://zhuanlan.zhihu.com/p/542738352) |
|构建|[vite](https://cn.vitejs.dev/)| -- |
|框架|[vue 3](https://cn.vuejs.org/)| -- |
|语言|[typescript](https://www.typescriptlang.org/zh/)| -- |
|css预处理器|[sass(scss)](https://sass-lang.com/)| -- |
|语法检查|[eslint](https://eslint.org/)| -- |
|格式化|[prettier](https://prettier.io/)| -- |
|样式语法检查|[stylelint](https://stylelint.io/)| -- |
|git提交预检|[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) + [lint-staged](https://github.com/okonet/lint-staged)| -- |
|UI库|[element-plus](https://element-plus.gitee.io/zh-CN/)| 根据项目具体情况，如不需要UI库可以不用 |
|状态管理|[pinia](https://pinia.vuejs.org/zh/)| -- |
|路由|[vue-router](https://router.vuejs.org/zh/index.html)| -- |
|css框架|[unocss](https://github.com/unocss/unocss)| unocss兼容windicss和tailwind，同时附带iconify等比较方便的功能; 推荐vscode的unocss插件(antfu.unocss) |

<!-- prettier-ignore-end -->

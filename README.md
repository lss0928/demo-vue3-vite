#Vue 封装组件并发布到 npm 仓库

#https://juejin.cn/post/7054752084079411236?utm_source=gold_browser_extension

#打包命令解释：

#--target lib 关键字 指定打包的目录
#--name 打包后的文件名字
#--dest 打包后的文件夹的名称

#npm config get
#npm config set registry = "https://registry.npm.taobao.org/"
#npm config set registry=https://registry.npmjs.org

# Eslint 代码语法检查

npx eslint --init
npx eslint --fix 文件相对路径

    "babel-eslint": "^10.1.0",
    "eslint": "^7.32.0",
    "eslint-plugin-html": "^6.2.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-vue": "^7.15.1",
    "vue-eslint-parser": "^7.10.0"

    eslint: ESLint的核心代码
    babel-eslint: eslint 与 babel 整合包
    eslint-plugin-vue: eslint 与 vue 整合包

/\*\*

-   每个规则有【3】个错误级别。
-   off 或 0: 关闭该规则；
-   warn 或 1: 开启规则，使用警告级别的错误，不会导致程序退出；
-   error 或 2: 开启规则，使用错误级别的错误，当被触发的时候，程序会退出。
    \*/

# prettier 代码格式化

    prettier：prettier插件的核心代码
    eslint-plugin-prettier：将prettier作为ESLint规范来使用
    eslint-config-prettier：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
    prettier-eslint-cli: 允许你对多个文件用prettier-eslint进行格式化

# 配置 husky + lint-staged + commitlint, 给 commit 操作添加前置钩子，实现 commit 提交代码前自动执行 代码检查 和 代码格式化 操作

# husky 是一个为 git 客户端增加 hook 的工具

## "husky install"

    该命令会创建.husky/目录并指定该目录为git hooks所在的目录。

## npx husky add .husky/pre-commit "npm run lint"

    .husky/目录下新增了一个名为pre-commit的shell脚本。也就是说在在执行git commit命令时会先执行pre-commit这个脚本

## npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

    .husky/目录下新增了一个名为commit-msg的shell脚本。commitlint可以对commit massage进行格式规范校验，

# lint-staged 一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具

# commitlint 定制提交规范 当我们运行 git commmit -m 'xxx' 时，用来检查 xxx 是否满足固定格式的工具。

    @commitlint/config-conventional
    @commitlint/cli
    代码提交基本格式为：<type>(scope?): <subject>

        type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
            feta/fix/...
        scope: 一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
        Subject: 一句话描述此次提交的主要内容，做到言简意赅

## @commitlint/cli 是 commitlint 提供的命令行工具，安装后会将 cli 脚本放置在./node_modules/.bin/目录下

## @commitlint/config-conventional 是社区中一些共享的配置，我们可以扩展这些配置，也可以不安装这个包自定义配置

# cypress

Fixture 又称之为 测试夹具 ，通常配合 cy.fixture 命令使用，主要用于 存储测试用例的外部静态数据 。
Fixture 的应用场景通常为，当测试需要对某些外部接口进行访问并依赖于其返回值时，可以使用 fixture 而无需访问这些接口。

1、运行器和生命周期
describe it
before beforeEach
2、元素查找和操作
get
3、断言/测试
should expect assert

# 进销存管理后台

    ## 登陆
        账号，密码，角色，权限
    ## 产品
    1、可添加产品 库存，定义单位， 图片上传 自定义字段
    2、产品列表 增删改

    ## 订单
    1、用户名（唯一），创建时间，更新时间，发货时间，数量， 单位，自定义字段，回款状态
    2、订单列表 增删改

    ## 员工
    1、姓名，考勤，请假，产品/日 产品/月

    indexDB

# 需求描述

# 页面菜单

# 接口设计

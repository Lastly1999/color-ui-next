![输入图片说明](https://images.gitee.com/uploads/images/2021/0415/115111_c20a241e_5335988.jpeg "hero.jpg")

_一个基于ColorUI CSS库二次开发的uni-app组件库 在原先的基础上扩展了如表单验证 属性切换 遵守dataCom开发规则_
感谢[@文晓港](https://github.com/weilanwl) 大神开发的uni-app平台中最符合我审美的一款css库

 :exclamation: 组件库现在还在开发中 后续还会加入更多内容 请勿在生产环境中使用

[打开预览地址](http://47.94.249.191)


# :zap: 快速使用

##  :zap: npm 安装
```shell
npm install uni-next-colorui -S
```

###  :oncoming_automobile: 项目中使用 -> uni-app 最新版本 main.js入口
```javascript
import colorui from 'uni-next-colorui'
import 'uni-next-colorui/style/index.css'
Vue.use(colorui)
```

##  :zap: 按需引入
```javascript
import {cuButton} from 'uni-next-colorui'
import 'uni-next-colorui/style/index.css'
Vue.component('cuButton',cuButton)
```

### 已实现组件 :white_check_mark:
 :white_check_mark: Tag标签<br/>
 :white_check_mark: Progress进度条<br/>
 :white_check_mark: Icon图标<br/>
 :white_check_mark: Layout布局<br/>
 :white_check_mark: Banner轮播图<br/>
 :white_check_mark: List列表<br/>
 :white_check_mark: MsgList消息列表<br/>
 :white_check_mark: GridList宫格菜单<br/>
 :white_check_mark: TimeLine时间轴<br/>

### 表单组件  :white_check_mark:
 :white_check_mark: Button按钮 <br/>
 :white_check_mark: Switch开关<br/>
 :white_check_mark: Input输入框<br/>
 :white_check_mark: Select选择器<br/>
 :white_check_mark: Radio单项选择器<br/>
 :white_check_mark: Checkbox多项选择器<br/>
 :white_check_mark: Upload上传组件<br/>
 :white_check_mark: Avatar头像<br/>
 :white_check_mark: textarea文本域组件


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


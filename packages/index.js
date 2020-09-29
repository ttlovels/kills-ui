// 1.引入插件
import CountButton from './count-button'
import Button from './button'
import ButtonGroup from './button-group'
import Link from './link'
import Switch from './switch'
import Icon from './icon'

//引入图标资源
import '../examples/assets/font/iconfont.js'
import '../examples/assets/font/iconfont.css'

//2.放到数组便于统一注册
const components = [
  CountButton,
  Button,
  ButtonGroup,
  Link,
  Switch,
  Icon
]
//3.注册所有的插件
const install = function (Vue) {
  components.map( component => {
    Vue.component(component.name, component)
  })
}
// 4. 配置支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 5.导出插件
export default {
  install, // 导出的对象必须具有 install, 才能被 Vue.use()方法调用
  CountButton,
  Button,
  ButtonGroup,
  Link,
  Switch,
  Icon
}
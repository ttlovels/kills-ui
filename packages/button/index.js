import Component from './src'

Component.install = Vue => {
  Vue.component(Component.name, Component)
}

export default Component
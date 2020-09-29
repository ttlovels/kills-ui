<template>
  <a :class="setClass()" 
    ref="myLink" 
    :href="href" 
    :target="target" 
  ><slot></slot></a>
</template>

<script>
export default {
  name: 'LsLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    underline: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setClass(){
      return `${this.type} ls-link ${this.underline ? 'underline' : ''}`
    }
  },
}
</script>

<style lang="scss" scoped>
.ls-link{
  display: inline-block;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  padding: 5px 3px;
  &:hover{
    color: rgba(3, 3, 3, .7);
  }
}
/**按钮颜色样式 */
.primary { // 深竹月
  color: #2578b5;
  &:hover{
    color: rgba(37, 120, 181, .7);
  }
}
.success { // 巴黎绿
  color: #00b483;
  &:hover{
    color:rgba(0, 180, 131, .7);
  }
}
.warning { // 石黄
  color: #f2c04d;
  &:hover{
    color: rgba(242, 192, 77, .7);
  }
}
.danger { // 牡丹红
  color: #b80233;
  &:hover{
    color: rgba(184, 2, 51, .7);
  }
}

/**下划线 */
.underline{
  border-bottom: 1px solid;
  padding-bottom: 2px;
}

</style>
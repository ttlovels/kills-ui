<template>
  <div :class="setClass()" ref="myBtn">
    <ls-icon
      v-if="icon" 
      :icon="typeof icon === 'string' ? icon : icon.icon"
      :isSvg="icon.isSvg ? icon.isSvg : false"
      :size="size"
    />
    <span><slot></slot></span>
  </div>
</template>

<script>

export default {
  name: 'LsButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    },
    round: {
      type: String,
      default: '0'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: [String, Object]
  },
  mounted() {
    // 设置圆角
    this.setRound()
  },
  methods: {
    setRound() { // 设置圆角
      this.$refs.myBtn.style.borderRadius = this.round
    },
    setClass() {
      return `${this.size} ${this.type} ${this.disabled ? 'disabled' : ''} ls-button`
    }
  },
}
</script>

<style lang="scss" scoped>
.ls-button{
  padding: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  cursor: pointer;
  &:hover{
    opacity: .7;
  }
  span {
    margin-left: 5px;
  }
}
/**按钮颜色样式 */
.primary { // 深竹月
  background: #2578b5;
  color: #fff;
  border: 0;
}
.success { // 巴黎绿
  background: #00b483;
  color: #fff;
  border: 0;
}
.warning { // 石黄
  background: #f2c04d;
  color: #fff;
  border: 0;
}
.danger { // 牡丹红
  background: #b80233;
  color: #fff;
  border: 0;
}
/**按钮大小样式 */
.mini {
  width: 45px;
  height: 15px;
  font-size: 12px;
}
.small {
  width: 70px;
  height: 25px;
  font-size: 14px;
}
.medium {
  width: 95px;
  height: 30px;
  font-size: 16px;
}
.big {
  width: 120px;
  height: 35px;
  font-size: 18px;
}
/**禁用样式 */
.disabled {
  opacity: .5;
  cursor:not-allowed;
  &:hover{
    opacity: .5;
  }
}
</style>
<template>
  <div class="ls-switch-container">
    <template v-if="leftText">
     <span ref="left">{{leftText}}</span>
    </template>
    <div :class="setClass()" ref="switch" @click="changeState">
      <div class="slider" ref="slider"></div>
    </div>
    <template v-if="rightText">
      <span ref="right">{{rightText}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LsSwitch',
  props: {
    switchProps: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data(){
    return {
      value: this.switchProps.value || 0,
      round: this.switchProps.round === false ? false : true,
      activeColor: this.switchProps.activeColor || '#fff',
      switchColor: this.switchProps.switchColor || '#00b483',
      leftText: this.switchProps.leftText || '',
      rightText: this.switchProps.rightText ||  '',
      size: this.switchProps.size || 'small'
    }
  },
  mounted() {
    // 设置颜色
    this.setColor()
    // 初始开关状态
    this.move()
  },
  methods: {
    setColor() { // 设置颜色
      this.$refs.switch.style.background = this.switchColor
      this.$refs.slider.style.background = this.activeColor
    },
    setClass() {
      return `${this.size} ${this.round ? 'round' : ''} ls-switch`
    },
    move() { // 样式切换
      if (this.value === 0) {
        if (this.leftText) {
          this.$refs.left.style.color = '#409eff'
        }
        if (this.rightText) {
          this.$refs.right.style.color = ''
        }
        this.$refs.slider.style.transform = 'translate(0)'
      } else if (this.value === 1) {
        let distance = this.size === 'big' ? '26px' : '20px'
        // 文字
        if (this.leftText) {
          this.$refs.left.style.color = ''
        }
        if (this.rightText) {
          this.$refs.right.style.color = '#409eff'
        }
        // 移动
        this.$refs.slider.style.transform = `translate(${distance})`
      }
      this.$emit('getState', this.value)
    },
    changeState() { //切换开关状态
      if (this.value === 0) {
        this.value = 1
      } else if (this.value === 1) {
        this.value = 0
      }
      this.move()
    }
  },
}
</script>

<style lang="scss" scoped>
.ls-switch-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10 auto;
  span{
    font-size: 14px;
    font-weight: 500;
  }
}

.ls-switch {
  width: 38px;
  height: 18px;
  border: 1px solid #ccc;
  margin: 10px;
  background: cadetblue;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  .slider {
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    transition: .5s;
  }
}
/**开关大小 */
.big {
  width: 54px;
  height: 28px;
  .slider {
    width: 26px;
    height: 26px;
  }
}
/**设置圆角 */
.round {
  border-radius: 50px;
  .slider {
    border-radius: 50%;
  }
}
</style>
<template>
  <div :class="size + ' ls-count-btn'" ref="countBtn">
    <span @click="decrement">-</span>
    <span>{{value}}</span>
    <span @click="increment">+</span>
  </div>
</template>

<script>
export default {
  name: 'LsCountButton',
  props: {
    countProps: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      value: this.countProps.value || 1, 
      min: this.countProps.min || 1, 
      max: this.countProps.max || 10, 
      size: this.countProps.size || 'small',
      num: this.countProps.num || 1,
    }
  },
  watch: {
    value() { // 监听value的变化修改禁用样式
      this.disabledState()
    }
  },
  mounted() {
    // 刚进入页面时禁用状态判断
    this.disabledState()
  },
  methods: {
    increment() { // 按钮加
      this.value+=this.num
      if(this.value > this.max) {
        this.value-=this.num
        return
      }
      this.$emit('handleIncrement',this.value)
    },
    decrement() { // 按钮减
      this.value-=this.num
      if(this.value < this.min) {
        this.value+=this.num
        return
      }
      this.$emit('handleDecrement',this.value)
    },
    disabledState(){ // 禁用状态判断
      if (this.value - this.num < this.min) {
        this.$refs.countBtn.children[0].style.cursor = 'not-allowed'
      } else {
        this.$refs.countBtn.children[0].style.cursor = 'pointer'
      }
      if (this.value + this.num > this.max) {
        this.$refs.countBtn.children[2].style.cursor = 'not-allowed'
      } else {
        this.$refs.countBtn.children[2].style.cursor = 'pointer'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ls-count-btn{
  display: flex;
  justify-content: center;
  width: 180px;
  align-items: center;
  padding: 5px 0;
  margin: 10px auto;
  span{
    text-align: center;
    background: #f5f7fa;
    font-size: 20px;
    color: #333;
    border:1px solid #ccc;
    box-sizing: border-box;
    cursor: pointer;
    &:nth-child(1){
      border-radius: 5px 0 0 5px;
    }
    &:nth-child(2){
      width: 60px;
      background: #fff;
      font-size: 16px;
      border: 1px solid #ccc;
    }
    &:nth-child(3){
      border-radius: 0 5px 5px 0;
    }
  }
}

.small{
  span{
    width: 35px;
    height: 30px;
    line-height: 28px;
  }
}

.medium{
  span{
    width: 45px;
    height: 35px;
    line-height: 33px;
  }
}

.big{
  span{
    width: 55px;
    height: 40px;
    line-height: 38px;
  }
}
</style>
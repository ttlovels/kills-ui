<template>
  <div class="ls-button-group">
    <ls-button 
      v-for="(item,index) in btnGroupProps" 
      :key="index" 
      :size="item.size"
      :type="item.type"
      :round="item.round"
      :disabled="item.disabled"
    >{{item.text}}</ls-button>
  </div>
</template>

<script>

export default {
  name: 'LsButtonGroup',
  props:{
    btnGroupProps: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.ls-button-group{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  div{
    margin: 5px;
  }
}
</style>
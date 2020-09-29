<template>
  <svg v-if="isSvg" :class="size + ' icon'" aria-hidden="true">
    <use :xlink:href="'#icon-' + icon"></use>
  </svg>
  <i v-else :class="size+ ' iconfont icon-' + icon"></i>
</template>

<script>

export default {
  name: 'LsIcon',
  props: {
    icon: {
      type: String,
      require: true
    },
    isSvg: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    }
  }
}
</script>

<style lang="scss">
/**font大小 */
i.iconfont {
  text-align: center;
}
i.mini {
  width: 12px !important;
  height: 12px !important;
  line-height: 12px;
  font-size: 12px;
}
i.small {
  width: 16px !important;
  height: 16px !important;
  line-height: 16px;
  font-size: 16px;
}
i.medium {
  width: 20px !important;
  height: 20px !important;
  line-height: 20px;
  font-size: 20px;
}
i.big {
  width: 24px !important;
  height: 24px !important;
  line-height: 24px;
  font-size: 24px;
}
/**svg大小 */
svg.mini {
  width: 14px !important;
  height: 14px;
}
svg.small {
  width: 18px !important;
  height: 18px;
}
svg.medium {
  width: 22px !important;
  height: 22px;
}
svg.big {
  width: 26px !important;
  height: 26px;
}
</style>
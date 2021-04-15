<template>
  <view :class="[layoutType? layoutType+'-'+span:'' ,margin ? 'margin-'+margin:'',padding ? 'padding-'+padding:'']"
        :style="{'text-align':center ? 'center':''}">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "cu-span",
  inject: ['row'],
  data() {
    return {
      layoutType: ''
    }
  },
  props: {
    /**
     * flex 布局宽度
     */
    span: {
      type: String,
      default: () => 'df'
    },
    /**
     * span的外边距
     * @param 边距的css名称 位置 + 大小
     * 比如 top-sm bottom-xl
     */
    margin: {
      type: String,
      default: () => ''
    },
    /**
     * span的内边距
     * @param 边距的css名称 位置 + 大小
     * 比如 top-sm bottom-xl
     */
    padding: {
      type: String,
      default: () => ''
    },
    /**
     * span的内部剧中情况
     * 有center时为居中 没有为默认
     */
    center: {
      type: Boolean,
      default: () => false
    }
  },
  created() {
    if (this.row.type) {
      this.layoutType = this.row.type
    }
  }
}
</script>
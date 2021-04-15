<template>
  <view
      :class="['flex',flexWrap ? 'flexWrap':'',margin ? 'margin-'+margin:'', padding ? 'padding-'+padding:'','justify-'+justify,'align-'+align]">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "cu-row",
  provide() {
    return {
      'row': this
    }
  },
  props: {
    flexWrap: {
      type: Boolean,
      default: () => false
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
     * 布局属性
     * basis 固定和 flex
     */
    type: {
      type: String,
      default: () => 'basis'
    },
    /**
     * 水平对齐方式
     * @param start center end between around
     */
    justify: {
      type: String,
      default: () => 'start'
    },
    /**
     * 垂直对齐方式
     * @param start center end between around
     */
    align: {
      type: String,
      default: () => 'start'
    }
  }
}
</script>

<style scoped>

</style>
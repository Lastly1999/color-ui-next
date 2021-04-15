<template>
  <view
      :class="['cu-progress',radius?'radius':'',round?'round':'',size ? size:'',striped?'striped':'',striped?'active':'']">
    <view :class="['bg-'+bg]" :style="[{ width:loading ? width:''}]">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: "cu-progress",
  props: {
    /**
     * 扁平形状进度条
     */
    radius: {
      type: Boolean,
      default: () => false
    },
    /**
     * 椭圆形状进度条
     */
    round: {
      type: Boolean,
      default: () => false
    },
    /**
     * 进度条背景颜色
     */
    bg: {
      type: String,
      default: () => 'blue'
    },
    /**
     * 是否加载进度条
     */
    loading: {
      type: Boolean,
      default: () => true
    },
    /**
     * 进度
     */
    width: {
      type: String,
      default: () => '0%'
    },
    /**
     * 进度条尺寸
     */
    size: {
      type: String,
      default: () => ''
    },
    /**
     * 是否条纹进度条
     */
    striped: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
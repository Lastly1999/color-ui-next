<template>
  <view
      :class="['cu-tag',size ? size:'',type ? type:'',bg ? line? 'line-'+ bg : 'bg-'+ bg:'',color ? 'text-'+color:'',badge?'badge':'',icon?'cuIcon-'+icon:'']">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "u-tag",
  props: {
    /**
     * tags尺寸
     * @param 默认尺寸为空 sm小尺寸
     */
    size: {
      type: String,
      default: () => ""
    },
    /**
     * 标签形状
     * @param 默认为正常长方形 round为椭圆 radius为圆角
     */
    type: {
      type: String,
      default: () => ""
    },
    /**
     * 标签颜色
     * @param 颜色参考colorui颜色表
     */
    bg: {
      type: String,
      default: () => "blue"
    },
    /**
     * 标签是否镂空
     * @param true为镂空 false为不镂空
     */
    line: {
      type: Boolean,
      default: () => false
    },
    /**
     * 标签文字颜色
     * @param 文字颜色参考color-ui文字颜色
     */
    color: {
      type: String,
      default: () => ""
    },
    /**
     * 标签是否为头像标签
     */
    badge: {
      type: Boolean,
      default: () => false
    },
    /**
     * tag图标
     */
    icon: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<template>
  <view :class="['cu-avatar',round?'round':'',radius?'radius':'',size,'bg-'+bg]"
        :style="{backgroundImage:'url('+url+')'}">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: "cu-avatar",
  props: {
    url: {
      type: String,
      defualt: () => ''
    },
    round: {
      type: Boolean,
      default: () => false
    },
    radius: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: String,
      default: () => 'sm'
    },
    bg: {
      type: String,
      default: () => ''
    }
  }
}
</script>
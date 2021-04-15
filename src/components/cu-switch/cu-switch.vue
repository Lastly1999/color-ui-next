<template>
  <switch @change="changeSwitch" :class="[checked?'checked':'',color,icon ? 'switch-'+icon:'',radius?'radius':'']"
          :checked="checked?true:false"></switch>
</template>

<script>
export default {
  name: "cu-switch",
  props: {
    /**
     * 按钮启用状态
     * @param checked true 启用 false未启用
     */
    checked: {
      type: Boolean,
      default: () => false
    },
    /**
     * 启用时的颜色
     */
    color: {
      type: String,
      default: () => 'green'
    },
    /**
     * 选择器图标
     */
    icon: {
      type: String,
      default: () => ''
    },
    /**
     * 按钮形状
     */
    radius: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    changeSwitch(e) {
      this.$emit('change', e)
    }
  }
}
</script>
<template>
  <checkbox-group @change="checkboxChange" style="display: flex">
    <label v-for="item in data" :key="item.value">
      <checkbox :class="[round?'round':'',color?color:'']" :value="item.value" :checked="item.checked"/>
      <text style="margin:0 10rpx" class="text-black">{{ item.name }}</text>
    </label>
  </checkbox-group>
</template>

<script>
export default {
  name: "cu-checkbox-group",
  props: {
    /**
     * 选择器组数据源
     * @param data
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * checkbox 颜色定义
     * @param color
     */
    color: {
      type: String,
      default: () => '#007aff'
    },
    /**
     * chebox形状
     * @param round
     */
    round: {
      type: Boolean,
      default: () => false
    },
    /**
     * 绑定数值
     * @param val
     */
    value: {}
  },
  created() {
    this.defaultSetChecked()
  },
  methods: {
    defaultSetChecked() {
      for (let key in this.value) {
        for (let item of this.data) {
          if (item.value === this.value[key]) {
            this.$set(item, 'checked', true)
          }
        }
      }
    },
    checkboxChange(e) {
      let items = this.data,
          values = e.detail.value;
      for (let i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value === values[j]) {
            items[i].checked = true;
            break
          }
        }
      }
      this.$emit('input', e.detail.value)
      this.$emit('change', e.detail.value)
    },
  }
}
</script>
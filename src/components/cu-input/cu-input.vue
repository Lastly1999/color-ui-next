<template>
  <input :disabled="readonly" :placeholder="placeholder" :value="value" @input="input"></input>
</template>

<script>
import {formMixins} from "../cu-form/formMixins";

export default {
  name: "u-input",
  mixins: [formMixins],
  props: {
    /**
     * 输入框提示语
     * @param 提示语内容
     */
    placeholder: {
      type: String,
      default: () => ""
    },
    /**
     * 输入框值
     * @param 输入框内容
     */
    value: {
      type: String,
      default: () => ""
    },
    /**
     * 是否无效
     * @param disabled 为true按钮无效
     */
    readonly: {
      type: Boolean,
      default: () => false
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.detail.value)
      // 数据变了，定向通知 FormItem 校验
      this.dispatch('cuFormItem', 'validate', e.detail.value);
    }
  }
}
</script>

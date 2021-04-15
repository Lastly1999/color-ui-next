<template>
  <view :class="['formBorder','bg-white']">
    <view :class="['cu-form-group']">
      <view class="title" ref="tl">{{ label }}</view>
      <slot></slot>
    </view>
    <view v-if="validMessage" :style="{color: '#fa3534',paddingLeft:validErrorPadding}">{{ validMessage }}</view>
  </view>
</template>

<script>
// 导入字段验证规则插件
import AsyncValidator from 'async-validator'
import {formMixins} from "../cu-form/formMixins";

export default {
  name: "cuFormItem",
  // 接收Form组件的数据
  inject: ['cuForm'],
  mixins: [formMixins],
  props: {
    /**
     * item label名称
     */
    label: {
      type: String,
      default: () => ''
    },
    /**
     * item 绑定prop名
     */
    prop: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      validMessage: '',
      validState: '',
      validErrorPadding: ''
    }
  },
  methods: {
    /**
     * 规则验证
     */
    validate() {
      return new Promise((resolve) => {
        const descriptor = {}
        descriptor[this.prop] = this.cuForm.rules[this.prop];
        // 获取要验证的rules内的验证规则
        const validator = new AsyncValidator(descriptor);
        // 获取要验证的字段内容
        const modal = {}
        modal[this.prop] = this.cuForm.modal[this.prop]
        validator.validate(modal, errors => {
          if (errors) {
            this.validMessage = this.cuForm.rules[this.prop][0].message
            resolve(false)
          } else {
            this.validMessage = ''
            resolve(true)
          }
        })

      })
    },
    /**
     * 动态计算label的宽度 赋值错误信息的padding处 定位错误信息的位置
     */
    changeLabelChange() {
      // this.validErrorPadding = ((this.$refs.tl.$el.offsetWidth + 15) * 2) + 'rpx'
    }
  },
  mounted() {
    this.changeLabelChange()
    if (this.prop) {
      this.dispatch('cuForm', 'addFiled', this);
    }
  },
  created() {
    this.$on("validate", this.validate);
  }
}
</script>
<style>
.formBorder {
  border-bottom: 1px solid #dcdfe6;
}

.errBorder {
  border-bottom: 1px solid #f56c6c;
}
</style>
<template>
  <radio-group @change="change" style="display: flex">
    <view v-for="(item, index) in data" :key="item[config.code]">
      <label>
        <radio :class="[line?'radio':'']" :value="item[config.key]" :checked="item[config.key] === value"/>
        <text style="margin:0 10rpx" class="text-black">{{ item.name }}</text>
      </label>
    </view>
  </radio-group>
</template>

<script>
export default {
  name: "cu-radio-group",
  props: {
    /**
     * 默认选择项 必须配置 config中的key 并设置为数据源设置项的code
     * @param defaultVal:string
     */
    value: {
      type: String,
      default: () => '0'
    },
    /**
     * 单选框组数据源
     * @param data:[]
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 单选框组的配置源
     * @param config:{key:stirng,value:string}
     */
    config: {
      default: () => {
        return {
          key: 'code',
          value: 'name'
        }
      }
    },
    /**
     * 是否为镂空单项选择器
     * @param line:boolean
     */
    line: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    /**
     * 利用选中的value值来查找被选中的选择器对象
     * @param value 被选中的value值
     */
    useCodeForObj(value) {
      let selectObj;
      this.data.map(item => {
        if (item[this.config.key] === value) {
          selectObj = item
        }
      })
      return selectObj
    },
    change(e) {
      this.$emit('input', e.detail.value)
      this.$emit('change', this.useCodeForObj(e.detail.value))
    }
  },
}
</script>
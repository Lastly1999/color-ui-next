<template>
  <picker @change="PickerChange" @columnchange="MultiColumnChange" :mode="type" :value="index" :range="data"
          :start="startTime" :end="endTime">
    <!-- 级联选择器 -->
    <view class="picker" v-if="type === 'multiSelector'">
      {{ data[0][index[0]] }}，{{ data[1][index[1]] }}，{{ data[2][index[2]] }}
    </view>
    <!-- 事件选择器 -->
    <view class="picker" v-else-if="type === 'time'">
      {{ index || placeholder }}
    </view>
    <view class="picker" v-else-if="type === 'date'">
      {{ index || placeholder }}
    </view>
    <view class="picker" v-else>
      {{ index > -1 ? data[index] : placeholder }}
    </view>
  </picker>
</template>

<script>
export default {
  name: "cu-select",
  props: {
    /**
     * 表示有效日期范围的开始
     * @param startTime 字符串格式为"YYYY-MM-DD" 或MM-DD
     */
    startTime: {
      type: String,
      default: () => ''
    },
    /**
     * 表示有效日期范围的结束
     * @param startTime 字符串格式为"YYYY-MM-DD" 或MM-DD
     */
    endTime: {
      type: String,
      default: () => ''
    },
    /**
     * 选择器的模式
     * @param multiSelector 多列选择
     */
    type: {
      type: String,
      default: () => 'selector'
    },
    /**
     * 选择器数据源
     * @param data
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 当前选中的索引项
     * @param index
     */
    index: {},
    /**
     * 选择器的未选择提示信息
     * @param placeholder
     */
    placeholder: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    /**
     * confirm 确认事件
     * @param event
     */
    PickerChange(e) {
      this.$emit('confirm', e.detail.value)
    },
    /**
     * select 滑动change事件
     * @param e
     * @constructor
     */
    MultiColumnChange(e) {
      this.$emit('change', e.detail)
    }
  }
}
</script>
<template>
  <view class="cu-list menu" :class="[card?'card-menu margin-top':'']">
    <template v-for="item in data">
      <view class="cu-item" :class="item.arrow?'arrow':''" @click="colClick">
        <view class="content">
          <!-- src图片地址存在时 图标隐藏 -->
          <text :class="['cuIcon-'+item.icon,'text-'+item.color]" v-if="!item.src"></text>
          <!-- src不为空 显示图片 -->
          <image :src="item.src" class="png" mode="aspectFit" v-else/>
          <text :class="['text-'+item.color]">{{ item.name }}</text>
        </view>
        <view class="action">
          {{ item.action }}
        </view>
      </view>
    </template>
  </view>
</template>

<script>
export default {
  name: "cu-list",
  props: {
    /**
     * 数据源
     * @param data{
     *   icon:string 头部图标
     *   arrow:string 尾部箭头是否显示
     *   color:string 头部文字颜色
     *   src:string 头部图片地址
     *   name:string 头部文字颜色
     *   action:string 箭头前文字内容
     * }
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * 卡片式列表
     * @param card
     */
    card: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    colClick(item) {
      this.$emit('click', item)
    }
  }
}
</script>
<template>
  <swiper v-if="type === 'screen' || type === 'card'" :class="[type+'-swiper',dotStyle?'square-dot':'round-dot']"
          :indicator-dots="true" :circular="true" :autoplay="autoPlay" interval="5000" duration="500"
          @change="cardSwiper"
          @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">

    <swiper-item v-for="(item,index) in data" :key="index" :class="cardCur==index?'cur':''">
      <image :src="item[config.url]" mode="aspectFill" v-if="item[config.key] === 'image'"></image>
      <video :src="item.url" :autoplay="autoPlay" loop muted :show-play-btn="false" :controls="false"
             objectFit="cover" v-if="item[config.key] === 'video'"></video>
    </swiper-item>
  </swiper>
  <view v-else>
    <view class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
      <view class="tower-item" :class="itemTower.zIndex==1?'none':''" v-for="(itemTower,index) in data"
            :key="index" :style="{'--index': itemTower.zIndex,'--left':itemTower.mLeft}"
            :data-direction="direction">
        <view class="swiper-item">
          <span v-if='false'>{{ JSON.stringify (itemTower) }}</span>
          <image :src="itemTower.url" mode="aspectFill" v-if="itemTower.type=='image'"></image>
          <video :src="itemTower.url" autoplay loop muted :show-play-btn="false" :controls="false"
                 objectFit="cover" v-if="itemTower.type == 'video'"/>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "cu-banner",
  props: {
    /**
     * 轮播图数据源
     * @param {
     *   config
     * }
     */
    data: {
      type: Array,
      default: () => []
    },
    /* 轮播图样式
     * @param dotStyle
     */
    dotStyle: {
      type: Boolean,
      default: () => false
    },
    /**
     * 轮播图配置
     * @param config
     */
    config: {
      type: Object,
      default: () => {
        return {
          url: 'url',
          key: 'type'
        }
      }
    },
    /**
     * 轮播图的类型
     * @param type 'screen' | 'card' | 'tower'
     */
    type: {
      type: String,
      default: () => 'screen'
    },
    /**
     * 是否自动轮播
     * @param autoPlay
     */
    autoPlay: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      cardCur: 0,
      direction: '',
      towerStart: 0
    }
  },
  created () {
    this.TowerSwiper ()
  },
  methods: {
    cardSwiper (e) {
      this.cardCur = e.detail.current
    },
    // 初始化towerSwiper
    TowerSwiper () {
      let list = this.data
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex = parseInt (list.length / 2) + 1 - Math.abs (i - parseInt (list.length / 2))
        list[i].mLeft = i - parseInt (list.length / 2)
        this.$set (list[i], 'zIndex', parseInt (list.length / 2) + 1 - Math.abs (i - parseInt (list.length / 2)))
        this.$set (list[i], 'mLeft', i - parseInt (list.length / 2))
      }
    },
    // towerSwiper触摸开始
    TowerStart (e) {
      this.towerStart = e.touches[0].pageX
      // this.$emit('touch-start', e)
    },

    // towerSwiper计算方向
    TowerMove (e) {
      this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
    },

    // towerSwiper计算滚动
    TowerEnd (e) {
      let direction = this.direction;
      let list = this.data;
      if (direction == 'right') {
        let mLeft = list[0].mLeft;
        let zIndex = list[0].zIndex;
        for (let i = 1; i < this.data.length; i++) {
          this.data[i - 1].mLeft = this.data[i].mLeft
          this.data[i - 1].zIndex = this.data[i].zIndex
        }
        this.data[list.length - 1].mLeft = mLeft;
        this.data[list.length - 1].zIndex = zIndex;
      } else {
        let mLeft = list[list.length - 1].mLeft;
        let zIndex = list[list.length - 1].zIndex;
        for (let i = this.data.length - 1; i > 0; i--) {
          this.data[i].mLeft = this.data[i - 1].mLeft
          this.data[i].zIndex = this.data[i - 1].zIndex
        }
        this.data[0].mLeft = mLeft;
        this.data[0].zIndex = zIndex;
      }
      this.direction = ""
      this.data = this.data
      // this.$emit('touch-end', e)
    }
  }
}
</script>
<style>
.tower-swiper .tower-item {
  transform: scale(calc(0.5 + var(--index) / 10));
  margin-left: calc(var(--left) * 100upx - 150upx);
  z-index: var(--index);
}
</style>

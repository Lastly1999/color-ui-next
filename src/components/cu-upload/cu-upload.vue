<template>
  <view class="grid col-4 grid-square flex-sub" style="justify-content: flex-end">
    <view class="bg-img" v-for="(item,index) in imgs" :key="index" @tap="ViewImage" :data-url="imgs[index]">
      <image :src="imgs[index]" mode="aspectFill"></image>
      <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
        <text class='cuIcon-close'></text>
      </view>
    </view>
    <view class="solids" @tap="ChooseImage" v-if="imgs.length<max">
      <text class='cuIcon-cameraadd'></text>
    </view>
  </view>
</template>

<script>
export default {
  name: "cu-upload",
  props: {
    /**
     * 绑定的上传图片数组 每一个都为URL地址 需要自行转换
     * @param v-model
     */
    value: {
      type: Array,
      default: () => []
    },
    /**
     * 最大上传数量
     * @param max
     */
    max: {
      type: Number,
      default: () => 2
    }
  },
  data () {
    return {
      imgs: this.value,
    }
  },
  watch: {
    imgs: {
      handler: function (nv) {
        this.$emit ('input', nv)
      }
    }
  },
  methods: {
    ViewImage (e) {
      console.log (e)
    },
    DelImg (e) {
      this.imgs.splice (e.currentTarget.dataset.index, 1)
      this.$emit ('delete', e)
    },
    ChooseImage () {
      uni.chooseImage ({
        count: 4, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: (res) => {
          this.imgs.push (res.tempFilePaths[0])
          this.$emit ('change', this.imgs)
        }
      });
    }
  }
}
</script>
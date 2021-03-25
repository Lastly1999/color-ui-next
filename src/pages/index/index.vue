<template>
	<view class="content">
    <view>
      <p class="center">按钮</p>
      <u-button shadow type="blue" @click="btn">按钮</u-button>
      <u-button color="white" shadow type="yellow" @click="btn">按钮</u-button>
      <u-button round shadow type="red" @click="btn">圆形按钮</u-button>
      <u-button line shadow type="pink" @click="btn">按钮</u-button>
    </view>
    <view>
      <p class="center">徽章</p>
      <u-tag bg="blue">默认</u-tag>
      <u-tag bg="cyan" type="radius">普通尺寸</u-tag>
      <u-tag bg="red" size="sm" type="round">椭圆小尺寸</u-tag>
      <u-tag line bg="cyan" type="radius">镂空普通尺寸</u-tag>
      <u-tag line bg="blue" type="radius">普通尺寸</u-tag>
      <u-tag color="blue" bg="green" type="radius">自定义文字颜色</u-tag>
      <u-tag class='cu-tag bg-red'>
        <text class='cuIcon-likefill'></text>
      </u-tag>

      <view class="cu-capsule">
        <view class='cu-tag bg-red'>
          <text class='cuIcon-likefill'></text>
        </view>
        <view class="cu-tag line-red">
          12
        </view>
      </view>
    </view>
	</view>
</template>

<script>
  import UTag from "../../components/u-tag/u-tag";
  export default {
    components: {UTag},
    data() {
			return {
				title: 'Hello'
			}
		},
    methods:{
      btn(){
        console.log('1234')
      }
    }
	}
</script>

<style>
page{
  padding: 10rpx;
}
.center{
  text-align: center;
  margin-bottom: 50rpx;
}
</style>
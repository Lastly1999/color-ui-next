<template>
	<view class="content">
    <u-button shadow type="blue" @click="btn">按钮</u-button>
	</view>
</template>

<script>
	export default {
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
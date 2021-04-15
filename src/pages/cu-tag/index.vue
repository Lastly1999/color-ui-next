<template>
    <view class="tagPage">
        <cu-navbar shadow bgColor="gradual-blue" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">按钮组件</block>
        </cu-navbar>
        <view class="defaultTag margin">
            <h3 class="margin">普通徽章</h3>
            <cu-tag bg="blue">默认</cu-tag>
            <cu-tag bg="yellow" color="white">默认</cu-tag>
            <cu-tag bg="green">默认</cu-tag>
            <cu-tag bg="red">默认</cu-tag>
        </view>
        <view class="radiusTag">
            <h3 class="margin">椭圆徽章</h3>
            <cu-tag type="round" bg="blue">椭圆</cu-tag>
            <cu-tag type="round" bg="yellow" color="white">椭圆</cu-tag>
            <cu-tag type="round" bg="green">椭圆</cu-tag>
            <cu-tag type="round" bg="red">椭圆</cu-tag>
        </view>
        <view class="lineTag">
            <h3 class="margin">镂空徽章</h3>
            <cu-tag line type="round" bg="blue">镂空</cu-tag>
            <cu-tag line type="round" bg="yellow">镂空</cu-tag>
            <cu-tag line type="round" bg="green">镂空</cu-tag>
            <cu-tag line type="round" bg="red">镂空</cu-tag>
        </view>
        <view class="sizeTag">
            <h3 class="margin">徽章尺寸</h3>
            <cu-tag bg="blue" size="sm" type="round">小尺寸</cu-tag>
            <cu-tag bg="yellow" type="round" color="white">默认尺寸</cu-tag>
            <cu-tag bg="green" size="lg" type="round">大尺寸</cu-tag>
        </view>
        <view class="sizeTag">
            <h3 class="margin">图标徽章</h3>
            <cu-tag bg="green" size="lg" type="round">
                <cu-icon name="search"></cu-icon>
                <text>搜索</text>
            </cu-tag>
            <cu-tag bg="blue" size="lg" type="round">
                <cu-icon name="check"></cu-icon>
                <text>get</text>
            </cu-tag>
            <cu-tag bg="red" size="lg" type="round">
                <cu-icon name="edit"></cu-icon>
                <text>修改</text>
            </cu-tag>
            <cu-tag bg="yellow" size="lg" type="round" color="white">
                <cu-icon name="emoji"></cu-icon>
                <text>哈哈</text>
            </cu-tag>
        </view>
    </view>
</template>

<script>
export default {
    name: "tag"
}
</script>

<style scoped>
.tagPage {
    padding: 20 rpx;
    text-align: center;
}
</style>
<template>
    <view>
        <cu-navbar shadow bgColor="gradual-green" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">进度条组件</block>
        </cu-navbar>
        <view class="progressPage">
            <h3 class="title margin">进度条形状</h3>
            <cu-progress bg="red" width="70%">
                default
            </cu-progress>
            <cu-progress bg="red" width="60%" radius>
                radius
            </cu-progress>
            <cu-progress bg="red" width="80%" round>
                round
            </cu-progress>

            <h3 class="title margin">进度条尺寸</h3>
            <cu-progress bg="red" width="70%"/>
            <cu-progress bg="red" width="60%" size="sm"/>
            <cu-progress bg="red" width="80%" size="xs"/>

            <h3 class="title margin">进度条条纹</h3>
            <cu-progress round bg="green" width="80%" striped/>
            <cu-progress round bg="green" width="80%" striped/>
            <cu-progress round bg="green" width="80%" striped/>
        </view>
    </view>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
page{
    background: #fff;
}
.progressPage {
    padding: 20rpx;
    background-color: #fff
}

.title {
    text-align: center;
}
</style>
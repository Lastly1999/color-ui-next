<template>
    <view class="buttonPage">
        <cu-navbar shadow bgColor="gradual-blue" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">按钮组件</block>
        </cu-navbar>
        <view class="defaultBtn">
            <h3 class="margin">普通按钮</h3>
            <cu-button type="blue" class="margin-right-sm">按钮</cu-button>
            <cu-button type="red" class="margin-right-sm">按钮</cu-button>
            <cu-button type="yellow" class="margin-right-sm" color="white">按钮</cu-button>
            <cu-button type="green" class="margin-right-sm" color="white">按钮</cu-button>
        </view>
        <view class="shadowBtn margin-bottom-sm">
            <h3 class="margin">带阴影按钮</h3>
            <cu-button shadow type="blue" class="margin-right-sm">阴影</cu-button>
            <cu-button shadow type="red" class="margin-right-sm">阴影</cu-button>
            <cu-button shadow type="yellow" class="margin-right-sm" color="white">阴影</cu-button>
            <cu-button shadow type="green" class="margin-right-sm" color="white">阴影</cu-button>
        </view>
        <view class="shadowBtn margin-bottom-sm">
            <h3 class="margin">镂空按钮</h3>
            <cu-button shadow line type="blue" class="margin-right-sm">镂空</cu-button>
            <cu-button shadow line type="red" class="margin-right-sm">镂空</cu-button>
            <cu-button shadow line type="yellow" class="margin-right-sm">镂空</cu-button>
            <cu-button shadow line type="green" class="margin-right-sm">镂空</cu-button>
        </view>
        <view class="shadowBtn margin-bottom-sm">
            <h3 class="margin">圆形按钮</h3>
            <cu-button round shadow type="blue" class="margin-right-sm">圆形</cu-button>
            <cu-button round shadow type="red" class="margin-right-sm">圆形</cu-button>
            <cu-button round shadow type="yellow" class="margin-right-sm" color="white">圆形</cu-button>
            <cu-button round shadow type="green" class="margin-right-sm">圆形</cu-button>
        </view>
    </view>
</template>

<script>
export default {
    name: "buton"
}
</script>
<style>
page {
    background: #fff;
}

.buttonPage {
    padding: 20 rpx;
    text-align: center;
}
</style>
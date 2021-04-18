<template>
    <view>
        <view>
            <cu-navbar shadow isBack bgColor="gradual-pink">
                <template #backText>
                    返回
                </template>
                <template #content>
                    导航栏
                </template>
            </cu-navbar>
        </view>
    </view>
</template>

<script>
export default {
    name: "cunavbar"
}
</script>
<style>
page{
    background: #fff;
}
</style>
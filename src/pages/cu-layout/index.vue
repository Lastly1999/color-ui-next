<template>
    <view>
        <cu-navbar shadow bgColor="gradual-red" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">常用布局</block>
        </cu-navbar>
        <view class="layoutPage">
            <view class="defaultLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">默认布局</h3>
                <cu-row>
                    <cu-span class="bg-grey" span="df" center>
                        span="df"
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="df" center>
                        span="df"
                    </cu-span>
                </cu-row>
            </view>
            <view class="sizeLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">不同大小布局</h3>
                <cu-row>
                    <cu-span class="bg-grey" span="sm" center>
                        span="sm"
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="sm" center>
                        span="sm"
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="sm" center>
                        span="sm"
                    </cu-span>
                </cu-row>
                <cu-row margin="top-sm">
                    <cu-span class="bg-grey" span="sm" center>
                        span="sm"
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="xl" center>
                        span="xl"
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="xl" center>
                        span="xl"
                    </cu-span>
                </cu-row>
            </view>
            <view class="flexWrapLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">自动适应</h3>
                <cu-row flexWrap>
                    <cu-span class="bg-grey" span="sm" center>
                        span="sm" center
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="sm" center>
                        span="sm" center
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="sm" center>
                        span="sm" center
                    </cu-span>
                </cu-row>
                <cu-row margin="top-sm">
                    <cu-span class="bg-grey" span="lg" center>
                        span="lg" center
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="lg" center>
                        span="lg" center
                    </cu-span>
                    <cu-span class="bg-grey" margin="left-sm" span="lg" center>
                        span="lg" center
                    </cu-span>
                </cu-row>
            </view>
            <view class="staticSizeLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">固定尺寸</h3>
                <cu-row flexWrap margin="bottom-sm">
                    <cu-span class="bg-grey" span="sm" center>
                        span="sm" center
                    </cu-span>
                </cu-row>
                <cu-row flexWrap margin="bottom-sm">
                    <cu-span class="bg-grey" span="df" center>
                        span="df" center
                    </cu-span>
                </cu-row>
                <cu-row flexWrap margin="bottom-sm">
                    <cu-span class="bg-grey" span="lg" center>
                        span="lg" center
                    </cu-span>
                </cu-row>
                <cu-row flexWrap margin="bottom-sm">
                    <cu-span class="bg-grey" span="xl" center>
                        span="xl" center
                    </cu-span>
                </cu-row>
            </view>
            <view class="containerLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">比例布局</h3>
                <cu-row margin="bottom-sm" type="flex">
                    <cu-span class="bg-grey" span="sub" center>
                        span="sub" center
                    </cu-span>
                    <cu-span class="bg-grey" span="sub" center margin="left-sm">
                        span="sub" center
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex">
                    <cu-span class="bg-grey" span="sub" center>
                        span="sub" center
                    </cu-span>
                    <cu-span class="bg-grey" span="twice" center margin="left-sm">
                        span="twice" center
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex">
                    <cu-span class="bg-grey" span="sub" center>
                        span="sub"
                    </cu-span>
                    <cu-span class="bg-grey" span="twice" center margin="left-sm">
                        span="twice"
                    </cu-span>
                    <cu-span class="bg-grey" span="treble" center margin="left-sm">
                        span="treble"
                    </cu-span>
                </cu-row>
            </view>
            <view class="paddingLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">布局内边距</h3>
                <cu-row margin="bottom-sm" type="flex">
                    <cu-span class="bg-grey" span="sub" center padding="xl">
                        span="sub" padding="sm"
                    </cu-span>
                    <cu-span class="bg-grey" span="sub" center padding="xl" margin="left-sm">
                        span="sub" padding="xl"
                    </cu-span>
                </cu-row>
            </view>
            <view class="marginLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">布局内边距</h3>
                <cu-row margin="bottom-sm" type="flex">
                    <cu-span class="bg-grey" span="sub" center margin="xl">
                        span="sub" padding="sm"
                    </cu-span>
                    <cu-span class="bg-grey" span="sub" center margin="xl">
                        span="sub" padding="xl"
                    </cu-span>
                </cu-row>
            </view>
            <view class="justifyLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">水平对齐</h3>
                <cu-row margin="bottom-sm" flexWrap type="flex" justify="start">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="start"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="start"
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex" justify="center">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="center"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="center"
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex" justify="end">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="end"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="end"
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex" justify="between">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="between"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="between"
                    </cu-span>
                </cu-row>
                <cu-row margin="bottom-sm" type="flex" justify="between">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="between"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        justify="between"
                    </cu-span>
                </cu-row>
            </view>
            <view class="alignLayout">
                <h3 class="titleCenter margin-bottom-sm margin-top-sm">水平对齐</h3>
                <cu-row margin="bottom-sm" flexWrap type="flex" align="start">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        align="start"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="xl">
                        align="start"
                    </cu-span>
                </cu-row>

                <cu-row margin="bottom-sm" flexWrap type="flex" align="center">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        align="center"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="xl">
                        align="center"
                    </cu-span>
                </cu-row>

                <cu-row margin="bottom-sm" flexWrap type="flex" align="end">
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="sm">
                        align="end"
                    </cu-span>
                    <cu-span class="bg-grey" span="sm" center margin="sm" padding="xl">
                        align="end"
                    </cu-span>
                </cu-row>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    name: "layout"
}
</script>

<style scoped>
page {
    background: #fff;
}

.layoutPage {
    padding: 20rpx;
}

.titleCenter {
    text-align: center;
}
</style>
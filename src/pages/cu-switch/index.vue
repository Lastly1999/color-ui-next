<template>
    <view class="switchPage">
        <cu-navbar shadow bgColor="gradual-green" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">开关组件</block>
        </cu-navbar>
        <view>
            <h3 class="margin-top margin-bottom title">普通开关</h3>
            <view class="title">
                <cu-switch class="margin-right" @change="change" :checked="checked"></cu-switch>
                <cu-switch class="margin-right" @change="change1" :checked="checked1"></cu-switch>
                <cu-switch class="margin-right" @change="change2" :checked="checked2"></cu-switch>
                <cu-switch class="margin-right" @change="change3" :checked="checked3"></cu-switch>
            </view>
            <h3 class="margin-top margin-bottom title">自定义颜色</h3>
            <view class="title">
                <cu-switch color="red" class="margin-right" @change="change4" :checked="checked4"></cu-switch>
                <cu-switch color="green" class="margin-right" @change="change5" :checked="checked5"></cu-switch>
                <cu-switch color="cyan" class="margin-right" @change="change6" :checked="checked6"></cu-switch>
                <cu-switch color="yellow" class="margin-right" @change="change7" :checked="checked7"></cu-switch>
            </view>
            <h3 class="margin-top margin-bottom title">设置图标</h3>
            <view class="title">
                <cu-switch icon="sex" color="green" class="margin-right" @change="change8"
                           :checked="checked8"></cu-switch>
            </view>
            <h3 class="margin-top margin-bottom title">形状</h3>
            <view class="title">
                <cu-switch radius icon="sex" color="green" class="margin-right" @change="change9"
                           :checked="checked9"></cu-switch>
                <cu-switch icon="sex" color="green" class="margin-right" @change="change10"
                           :checked="checked10"></cu-switch>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "switchPage",
    data() {
        return {
            checked: true,
            checked1: true,
            checked2: true,
            checked3: true,
            checked4: true,
            checked5: true,
            checked6: true,
            checked7: true,
            checked8: true,
            checked9: false,
            checked10: false,
        }
    },
    methods: {
        change() {
            this.checked = !this.checked
        },
        change1() {
            this.checked1 = !this.checked1
        },
        change2() {
            this.checked2 = !this.checked2
        },
        change3() {
            this.checked3 = !this.checked3
        },
        change4() {
            this.checked4 = !this.checked4
        },
        change5() {
            this.checked5 = !this.checked5
        },
        change6() {
            this.checked6 = !this.checked6
        },
        change7() {
            this.checked7 = !this.checked7
        },
        change8() {
            this.checked8 = !this.checked8
        },
        change9() {
            this.checked9 = !this.checked9
        },
        change10() {
            this.checked10 = !this.checked10
        }
    }
}
</script>

<style scoped>
page {
    background: #fff;
    padding: 20 rpx;
}

.title {
    text-align: center;
}
</style>
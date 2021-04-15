<template>
    <view>
        <cu-navbar bgColor="gradual-blue" :isBack="true">
            <block slot="backText">返回</block>
            <block slot="content">时间轴</block>
        </cu-navbar>
        <cu-timeline title="04/13" :data="[data[0]]" @click="colClick"></cu-timeline>
        <cu-timeline title="04/14" :data="[data[1]]" @click="colClick"></cu-timeline>
        <cu-timeline title="04/15" :data="[data[2]]" @click="colClick"></cu-timeline>
        <cu-timeline title="04/16" :data="[data[3]]" @click="colClick"></cu-timeline>
    </view>
</template>

<script>
export default {
    name: "timeline",
    data() {
        return {
            data: [
                {
                    content: '【2021-03-02】您的快递已经打包出库',
                    icon: 'timefill',
                    iconColor: ''
                },
                {
                    content: '【2021-03-03】快递到达中转站',
                    icon: 'timefill',
                },
                {
                    content: '【2021-03-04】快递正在安排派送，快递小哥电话：19955223111，请保持电话畅通',
                    color: '',
                    icon: 'timefill',
                    iconColor: ''
                },
                {
                    content: '【2021-03-04】快递已经签收，签收人：老王。',
                    color: 'green',
                    icon: 'check'
                }
            ]
        }
    },
    methods: {
        colClick(item) {
            console.log(item)
        }
    }
}
</script>
<style>
page {
    background: #fff;
}
</style>
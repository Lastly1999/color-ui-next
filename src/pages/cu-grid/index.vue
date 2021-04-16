<template>
    <view>
        <cu-navbar shadow bgColor="gradual-purple" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">宫格菜单</block>
        </cu-navbar>
        <view>
            <h3 class="title margin">普通宫格菜单</h3>
            <cu-grid :data="gridData"></cu-grid>

            <h3 class="title margin">带边框的宫格菜单</h3>
            <cu-grid :data="gridData" border></cu-grid>

            <h3 class="title margin">宫格菜单行数量</h3>
            <cu-grid :data="gridData" border :col="5" @click="colClick"></cu-grid>
        </view>
    </view>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            gridData: [{
                cuIcon: 'cardboardfill',
                color: 'red',
                badge: 5,
                name: 'VR'
            }, {
                cuIcon: 'recordfill',
                color: 'orange',
                badge: 1,
                name: '录像'
            }, {
                cuIcon: 'picfill',
                color: 'yellow',
                badge: 0,
                name: '图像'
            }, {
                cuIcon: 'noticefill',
                color: 'olive',
                badge: 10,
                name: '通知'
            }, {
                cuIcon: 'upstagefill',
                color: 'cyan',
                badge: 0,
                name: '排行榜'
            }, {
                cuIcon: 'clothesfill',
                color: 'blue',
                badge: 0,
                name: '皮肤'
            }, {
                cuIcon: 'discoverfill',
                color: 'purple',
                badge: 0,
                name: '发现'
            }, {
                cuIcon: 'questionfill',
                color: 'mauve',
                badge: 0,
                name: '帮助'
            }, {
                cuIcon: 'commandfill',
                color: 'purple',
                badge: 0,
                name: '问答'
            }, {
                cuIcon: 'brandfill',
                color: 'mauve',
                badge: 0,
                name: '版权'
            }]
        }
    },
    methods: {
        colClick(item) {
            console.log(item)
        }
    }
}
</script>

<style scoped>
.title {
    text-align: center;
}
</style>
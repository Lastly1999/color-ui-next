<template>
    <view>
        <cu-navbar shadow bgColor="gradual-red" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">列表</block>
        </cu-navbar>
        <h3 class="margin title">普通列表</h3>
        <cu-list :data="data"/>
        <h3 class="margin title">卡片式列表</h3>
        <cu-list :data="data" card @click="colClick"></cu-list>
    </view>

</template>

<script>
export default {
    name: "list",
    data() {
        return {
            data: [
                {
                    name: '图片+文字',
                    arrow: true,
                    icon: 'time',
                    src: 'http://159.75.22.114:8080/photoServer/more.png',
                    action: ''
                },
                {
                    name: '带箭头的list',
                    arrow: true,
                    icon: 'right',
                    src: 'http://159.75.22.114:8080/photoServer/more.png',
                    action: '背后标题'
                },
                {
                    name: '带箭头的list',
                    arrow: true,
                    icon: 'pic',
                    action: '后面'
                },

                {
                    name: '测试5',
                    arrow: true,
                    icon: 'home',
                    action: '后面'
                },
                {
                    name: '测试6',
                    arrow: true,
                    icon: 'right',
                    action: '后面'
                },
                {
                    name: '测试7',
                    arrow: true,
                    icon: 'home',
                    action: '后面'
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
    background: #eee
}

.title {
    text-align: center;
}
</style>
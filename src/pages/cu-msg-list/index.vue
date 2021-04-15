<template>
    <view>
        <cu-navbar shadow bgColor="gradual-red" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">消息列表</block>
        </cu-navbar>
        <h3 class="margin title">默认消息列表</h3>
        <cu-msg-list :data="data"></cu-msg-list>

        <h3 class="margin title">自定一些列表文字颜色</h3>
        <cu-msg-list :data="data1"></cu-msg-list>

        <h3 class="margin title">插入一些图标</h3>
        <cu-msg-list :data="data2" @top="top" @del="del"></cu-msg-list>

        <h3 class="margin title">列表左滑</h3>
        <cu-msg-list slide :data="data2" @top="top" @del="del"></cu-msg-list>
    </view>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            data: [
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是一个标题",
                    content: "测试内容1",
                    contentColor: '',
                    titleColor: '',
                    rightCt: '18:00',
                    rightCtColor: '',
                    rightBtmCt: '10',
                    rightBtmIcon: '',
                    rightBtmColor: '',
                    titleBtmIcon: '',
                    titleBtmColor: ''
                },
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是二个标题",
                    content: "测试内容2",
                    contentColor: '',
                    titleColor: '',
                    rightCt: '18:00',
                    rightCtColor: '',
                    rightBtmCt: '10',
                    rightBtmIcon: '',
                    rightBtmColor: '',
                    titleBtmIcon: '',
                    titleBtmColor: ''
                },
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是三个标题",
                    content: "测试内容3",
                    contentColor: '',
                    titleColor: '',
                    rightCt: '18:00',
                    rightCtColor: '',
                    rightBtmCt: '10',
                    rightBtmIcon: '',
                    rightBtmColor: '',
                    titleBtmIcon: '',
                    titleBtmColor: ''
                }
            ],
            data1: [
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是二个标题",
                    titleColor: 'yellow',
                    content: "测试内容",
                    contentColor: 'green',
                    rightCt: '19:00',
                    rightCtColor: 'blue',
                    rightBtmCt: '10',
                    rightBtmIcon: 'check',
                    rightBtmColor: 'red',
                    titleBtmIcon: '',
                    titleBtmColor: ''
                },
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是二个标题",
                    titleColor: 'red',
                    content: "测试内容",
                    contentColor: 'green',
                    rightCt: '21:00',
                    rightCtColor: 'blue',
                    rightBtmCt: '10',
                    rightBtmIcon: 'timefill',
                    rightBtmColor: 'red',
                    titleBtmIcon: '',
                    titleBtmColor: ''
                }
            ],
            data2: [
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是二个标题",
                    titleColor: 'yellow',
                    content: "测试内容",
                    contentColor: 'green',
                    rightCt: '19:00',
                    rightCtColor: 'blue',
                    rightBtmCt: '10',
                    rightBtmIcon: 'check',
                    rightBtmColor: 'red',
                    titleBtmIcon: 'tag',
                    titleBtmColor: 'blue'
                },
                {
                    url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
                    title: "我是二个标题",
                    titleColor: 'red',
                    content: "测试内容",
                    contentColor: 'green',
                    rightCt: '21:00',
                    rightCtColor: 'blue',
                    rightBtmCt: '10',
                    rightBtmIcon: 'timefill',
                    rightBtmColor: 'red',
                    titleBtmIcon: 'timefill',
                    titleBtmColor: 'blue'
                }
            ]
        }
    },
    methods: {
        del(item) {
            console.log(item)
        },
        top(item) {
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
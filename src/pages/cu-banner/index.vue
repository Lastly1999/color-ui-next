<template>
    <view>
        <cu-navbar shadow bgColor="gradual-green" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">轮播图组件</block>
        </cu-navbar>
        <view>
            <h4 class="margin title">普通轮播</h4>
            <cu-banner :data="swiperList"/>

            <h4 class="margin title">卡片型轮播图</h4>
            <cu-banner type="card" :data="swiperList"/>

            <h4 class="margin title">卡片型轮播图</h4>
            <cu-banner type="tower" :data="swiperList" @touch-start="touchStart" @touch-end="touchEnd"/>
        </view>
    </view>
</template>

<script>
export default {
    name: "banner",
    data() {
        return {
            swiperList: [{
                id: 0,
                type: 'image',
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2748278377,925802359&fm=26&gp=0.jpg'
            }, {
                id: 1,
                type: 'image',
                url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1652123795,1945063222&fm=26&gp=0.jpg',
            }, {
                id: 2,
                type: 'image',
                url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=142521704,3862130419&fm=26&gp=0.jpg'
            }, {
                id: 3,
                type: 'image',
                url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3784270565,2554628324&fm=26&gp=0.jpg'
            }, {
                id: 4,
                type: 'image',
                url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=371306161,1602070443&fm=26&gp=0.jpg'
            }, {
                id: 5,
                type: 'image',
                url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3607060861,4282545411&fm=26&gp=0.jpg'
            }, {
                id: 6,
                type: 'image',
                url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=314769485,2390633368&fm=26&gp=0.jpg'
            }],
        }
    },
    methods: {
        // 触摸开始
        touchStart(e) {
            console.log(e)
        },
        // 触摸结束
        touchEnd(e) {
            console.log(e)
        }
    }

}
</script>
<style>
page {
    background: #fff;
}

.title {
    text-align: center;
}
</style>
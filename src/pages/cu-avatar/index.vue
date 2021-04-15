<template>
    <view class="avatarPage">
        <cu-navbar shadow bgColor="gradual-green" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">头像组件</block>
        </cu-navbar>
        <view style="padding: 10px">
            <h3 class="title margin-sm">头像形状</h3>
            <cu-avatar size="xl" class="margin-lg" round
                       url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
            <cu-avatar size="xl" radius url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>

            <h3 class="title margin-sm">头像尺寸</h3>
            <cu-avatar size="sm" radius url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
            <cu-avatar size="lg" radius url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
            <cu-avatar size="xl" radius url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>

            <h3 class="title margin-sm">头像颜色</h3>
            <cu-avatar size="xl" class="margin-left-sm" round bg="blue">
                <text class="avatar-text">
                    blue
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="yellow">
                <text class="avatar-text">
                    yellow
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="green">
                <text class="avatar-text">
                    green
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="OLIVE">
                <text class="avatar-text">
                    OLIVE
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="black">
                <text class="avatar-text">
                    black
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="white">
                <text class="avatar-text">
                    white
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="cyan">
                <text class="avatar-text">
                    cyan
                </text>
            </cu-avatar>
            <cu-avatar size="xl" class="margin-left-sm" round bg="purple">
                <text class="avatar-text">
                    purple
                </text>
            </cu-avatar>


            <h3 class="title margin-sm">头像组</h3>
            <cu-avatar-group>
                <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
                <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
                <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
                <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
                <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"/>
            </cu-avatar-group>

            <h3 class="title margin-sm">带标签的头像</h3>
            <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg">
                <cu-tag badge icon="female" bg="pink"></cu-tag>
            </cu-avatar>
            <cu-avatar size="xl" round url="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg">
                <cu-tag badge icon="male" bg="blue"></cu-tag>
            </cu-avatar>
        </view>
    </view>
</template>

<script>
export default {
    name: "avatar",
}
</script>

<style scoped>

.title {
    text-align: center;
}
</style>
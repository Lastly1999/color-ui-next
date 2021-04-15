<template>
    <view class="cu-list grid" :class="['col-' + col,border?'':'no-border']">
        <view class="cu-item" v-for="(item,index) in data" :key="index" v-if="index < col*2 " @click="colClick(item)">
            <view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" v-if="!item.src">
                <view class="cu-tag badge" v-if="item.badge != 0">
                    <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                </view>
            </view>
            <text>{{ item.name }}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: "cu-grid",
    props: {
        /**
         * grid数据源
         * @param data
         */
        data: {
            type: Array,
            default: () => []
        },
        /**
         * 每行显示几个菜单
         * @param col
         */
        col: {
            type: Number,
            default: () => 3
        },
        /**
         * 菜单是否有边框显示
         * @param border
         */
        border: {
            type: Boolean,
            default: () => false
        },
    },
    methods: {
        colClick(item) {
            this.$emit('click', item)
        }
    }
}
</script>
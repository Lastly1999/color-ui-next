<template>
    <view class="cu-timeline">
        <view class="cu-time">{{ title }}</view>
        <template v-for="item in data">
            <view :class="['cu-item','cur','cuIcon-'+item.icon,'text-'+item.iconColor]" @click="colClick(item)">
                <view :class="['content',item.color?'bg-'+item.color:'bg-blue','shadow-blur']">
                    {{ item.content }}
                    <slot></slot>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    name: "cu-timeline",
    props: {
        /**
         * 数据源
         * @param data
         */
        data: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: () => ''
        }
    },
    methods: {
        colClick(item) {
            this.$emit('click', item)
        }
    }
}
</script>
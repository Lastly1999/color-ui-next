<template>
    <view class="cu-list menu-avatar">
        <template v-for="(item,index) in data">
            <view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''"
                  :key="index"
                  @touchstart="ListTouchStart" @touchmove="ListTouchMove"
                  @touchend="ListTouchEnd"
                  :data-target="'move-box-' + index">

                <view class="cu-avatar round lg"
                      :style="{backgroundImage:'url('+item.url+')'}"/>
                <view class="content">
                    <view :class="['text-'+item.titleColor]">{{ item.title }}</view>
                    <view :class="['text-'+item.contentColor,'text-sm','flex']">
                        <view class="text-cut">
                            <text :class="['cuIcon-'+item.titleBtmIcon, 'text-'+item.titleBtmColor,'margin-right-xs']"></text>
                            {{ item.content }}
                        </view>
                    </view>
                </view>
                <view class="action">
                    <view :class="['text-'+item.rightCtColor,'text-xs']">{{ item.rightCt }}</view>
                    <!-- 当右侧图标有设置存在 直接显示图标 -->
                    <view v-if="item.rightBtmIcon"
                          :class="['cuIcon-'+item.rightBtmIcon,'text-'+item.rightBtmColor]"></view>
                    <!-- 没有则是默认的tag标签存在 -->
                    <view v-else :class="['cu-tag','round','bg-grey','sm']">{{ item.rightBtmCt }}</view>
                </view>
                <view class="move" v-if="slide">
                    <view class="bg-grey" @click="top(item)">置顶</view>
                    <view class="bg-red" @click="del(item)">删除</view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    name: "cu-msg-list",
    props: {
        /**
         * 数据源
         */
        data: {
            type: Array,
            default: () => []
        },
        /**
         * 是否可以滑动
         */
        slide: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            listTouchStart: 0,
            modalName: null,
            listTouchDirection: null
        }
    },
    methods: {
        /**
         * ListTouch触摸开始
         */
        ListTouchStart(e) {
            if (this.slide) this.listTouchStart = e.touches[0].pageX
        },

        /**
         * ListTouch计算方向
         */
        ListTouchMove(e) {
            if (this.slide) this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
        },

        /**
         * ListTouch计算滚动
         */
        ListTouchEnd(e) {
            if (this.slide) {
                if (this.listTouchDirection == 'left') {
                    this.modalName = e.currentTarget.dataset.target
                } else {
                    this.modalName = null
                }
                this.listTouchDirection = null
            }
        },
        /**
         * del func
         * @param item Event
         */
        del(item) {
            this.$emit('del', item)
        },
        /**
         * top func
         * @param item Event
         */
        top(item) {
            this.$emit('top', item)
        }
    },
    created() {
        console.log(this.slide)
    }
}
</script>
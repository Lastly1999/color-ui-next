<template>
        <view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
            <view class="cu-bar fixed" :style="style"
                  :class="[bgImage!=''?'none-bg text-white bg-img':'','bg-'+bgColor, shadow?'shadow-blur':'']">
                <view class="action" @tap="BackPage" v-if="isBack">
                    <text class="cuIcon-back"></text>
                    <slot name="backText"></slot>
                </view>
                <view class="content" :style="[{top:StatusBar + 'px'}]">
                    <slot name="content"></slot>
                </view>
                <slot name="right"></slot>
            </view>
        </view>
</template>

<script>
export default {
    data() {
        return {
            StatusBar: '',
            CustomBar: ''
        };
    },
    name: 'cu-custom',
    computed: {
        style() {
            let StatusBar = this.StatusBar;
            let CustomBar = this.CustomBar;
            let bgImage = this.bgImage;
            let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
            if (this.bgImage) {
                style = `${style}background-image:url(${bgImage});`;
            }
            return style
        }
    },
    created() {
        this.computeStatus()
    },
    props: {
        bgColor: {
            type: String,
            default: ''
        },
        isBack: {
            type: [Boolean, String],
            default: false
        },
        bgImage: {
            type: String,
            default: ''
        },
        shadow: {
            type: Boolean,
            default: () => false
        }
    },
    methods: {
        /**
         * 计算状态栏高度
         */
        computeStatus() {
            uni.getSystemInfo({
                success: (e) => {
                    // 安卓平台
                    // #ifndef MP
                    this.StatusBar = e.statusBarHeight;
                    if (e.platform == 'android') {
                        this.CustomBar = e.statusBarHeight + 50;
                    } else {
                        this.CustomBar = e.statusBarHeight + 45;
                    }
                    // #endif

                    // 微信 / QQ 等平台
                    // #ifdef MP-WEIXIN || MP-QQ
                    this.StatusBar = e.statusBarHeight;
                    let capsule = wx.getMenuButtonBoundingClientRect();
                    if (capsule) {
                        this.Custom = capsule;
                        this.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                    } else {
                        this.CustomBar = e.statusBarHeight + 50;
                    }
                    // #endif

                    // 支付宝小程序
                    // #ifdef MP-ALIPAY
                    this.StatusBar = e.statusBarHeight;
                    this.CustomBar = e.statusBarHeight + e.titleBarHeight;
                    // #endif
                }
            })
        },
        BackPage() {
            if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
                let url = '/' + __wxConfig.pages[0]
                return uni.redirectTo({url})
            }
            uni.navigateBack({
                delta: 1
            });
        }
    }
}
</script>

<style>

</style>

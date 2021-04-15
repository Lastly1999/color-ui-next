<template>
    <textarea maxlength="-1" :disabled="disabled" @input="textareaBInput" :placeholder="placeholder" :value="value"/>
</template>

<script>
export default {
    name: "cu-textarea",
    props: {
		/**
		 * 启用状态
		 * @param disabled
		 */
        disabled: {
            type: Boolean,
            default: () => false
        },
		/**
		 * 输入提示信息
		 * @param placeholder
		 */
        placeholder: {
            type: String,
            default: () => ''
        },
		/**
		 * 输入提示信息
		 * @param 绑定值v-model
		 */
        value: {
            type: String,
            default: () => ''
        }
    },
    methods: {
		/**
		 * 实现双向绑定 并发送订阅监听事件
		 * @param {Object} 
		 */
        textareaBInput(e) {
            this.$emit('input', e.detail.value)
            this.$emit('change', e.detail)
        }
    }
}
</script>

<style scoped>

</style>
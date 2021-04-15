<template>
  <text :class="['cuIcon-'+name,'text-'+color]"></text>
</template>

<script>
export default {
  name: "cu-icon",
  props: {
    /**
     * icon名称 详见color-ui 图标列表
     */
    name: {
      type: String,
      default: () => ''
    },
    /**
     * 图标颜色
     */
    color: {
      type: String,
      default: () => ''
    }
  }
}
</script>
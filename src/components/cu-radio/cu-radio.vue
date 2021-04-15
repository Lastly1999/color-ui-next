<template>
  <label>
    <radio :color="color" :class="[value?'checked':'',line?'radio':'']" :checked="value?true:false"/>
    <text style="margin:0 8rpx" class="text-black">{{ name }}</text>
  </label>
</template>

<script>
export default {
  name: "cuRadio",
  props: {
    value: {
      type: Boolean,
      default: () => false
    },
    /**
     * 是否为镂空
     */
    line: {
      type: Boolean,
      default: () => false
    },
    /**
     * radio的label名称
     */
    name: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => 'rgb(0, 122, 255)'
    }
  },
  methods:{
    change(e){
      console.log(e)
    }
  }
}
</script>
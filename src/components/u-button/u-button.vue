<template>
  <button :class="['cu-btn', type ? line ? 'line-'+type:'bg-'+ type:'',size,round ? 'round':'',shadow ? 'shadow':'',color ? 'text-'+color:'']" :disabled="disabled" @click="btnClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:"u-button",
  props:{
    /**
     * type 按钮样式
     * @param 颜色style
     */
    type:{
      type:String,
      default:() => ""
    },
    /**
     * size 按钮大小
     * @param small lg 普通大小留空
     */
    size:{
      type:String,
      default:() => ""
    },
    /**
     * 是否为圆形按钮
     * @param round
     */
    round:{
      type:Boolean,
      default:() => false
    },
    /**
     * 按钮是否携带阴影
     * @param shadow
     */
    shadow:{
      type:Boolean,
      default:() => false
    },
    /**
     * 是否镂空
     * @param line
     * type 正常使用 为true时 直接显示镂空按钮加type的颜色
     */
    line:{
      type:Boolean,
      default:() => false
    },
    /**
     * 是否无效
     * @param disabled 为true按钮无效
     */
    disabled:{
      type:Boolean,
      default:() => false
    },
    /**
     * 按钮文字颜色
     * @param 颜色参考colorui 文字颜色
     */
    color:{
      type:String,
      default:() => ""
    }
  },
  methods:{
    btnClick(){
      this.$emit('click')
    }
  }
}
</script>
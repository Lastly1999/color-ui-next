<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "cuForm",
  componentName: 'cuForm',
  // 为了让各个层级都能使用Form中的数据，需要依靠 provide 函数提供数据。
  provide() {
    return {
      'cuForm': this
    }
  },
  props: {
    /**
     * 表单的验证规则
     */
    rules: {
      type: Object,
      default: () => {
      }
    },
    /**
     * 表单的字段源
     */
    modal: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      fileds: [],
    }
  },
  created() {
    this.fileds = [];
    this.$on('addFiled', filed => this.fileds.push(filed));
  },
  methods: {
    async validate(cb) {
      const eachFiledResultArray = this.fileds.map(filed => filed.validate());
      const results = await Promise.all(eachFiledResultArray);
      let ret = true;
      results.forEach(valid => {
        if (!valid) {
          ret = false;
        }
      });
      cb(ret);
    }
  }
}
</script>
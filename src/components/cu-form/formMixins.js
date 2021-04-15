export const formMixins = {
    methods: {
        // 查找指定 name 的组件，
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                
                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                console.log(eventName)
                console.log(parent)
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        }
    }
}
<template>
    <view class="formPage">
        <cu-navbar shadow bgColor="gradual-purple" :isBack="false">
            <block slot="backText">返回</block>
            <block slot="content">表单组件</block>
        </cu-navbar>
        <view>
            <h3 class="title margin-top margin-bottom">表单验证</h3>
            <cu-form ref="cuForm" :rules="rules" :modal="form">
                <cu-form-item label="账号" prop="userName">
                    <cu-input v-model="form.userName" placeholder="请输入账号"/>
                </cu-form-item>
                <cu-form-item label="密码" prop="passWord">
                    <cu-input v-model="form.passWord" placeholder="请输入密码"/>
                </cu-form-item>
                <cu-form-item label="邮箱" prop="email">
                    <cu-input v-model="form.email" placeholder="请输入邮箱"/>
                </cu-form-item>
            </cu-form>
            <view style="width: 100%;text-align: center" class="margin-top">
                <cu-button type="blue" @click="submit" style="width: 80%">提交</cu-button>
            </view>

            <h3 class="title margin-top margin-bottom">表单插槽</h3>
            <cu-form ref="slotForm" :rules="ruleSlot" :modal="formSlot">
                <cu-form-item label="用户名" prop="user">
                    <cu-input v-model="formSlot.user" placeholder="用户名"/>
                    <cu-icon name="locationfill" color="orange"></cu-icon>
                </cu-form-item>
                <cu-form-item label="密码" prop="pass">
                    <cu-input v-model="formSlot.pass" placeholder="密码"/>
                    <cu-button type="green" shadow>按钮</cu-button>
                </cu-form-item>
                <cu-form-item label="手机号" prop="tel">
                    <cu-input v-model="formSlot.tel" placeholder="手机号"/>
                    <cu-button type="red" shadow>按钮</cu-button>
                </cu-form-item>
            </cu-form>
            <view style="width: 100%;text-align: center" class="margin-top">
                <cu-button type="blue" @click="submitSlot" style="width: 80%">提交</cu-button>
            </view>


            <h3 class="title margin-top margin-bottom">表单选择器</h3>
            <cu-form ref="selectForm" :rules="selectRules" :modal="selectForm">
                <cu-form-item label="选择">
                    <cu-select :data="data" @confirm="confirm" placeholder="请选择数据" :index="selectVal"></cu-select>
                </cu-form-item>
                <cu-form-item label="级联选择">
                    <cu-select type="multiSelector" :data="selectTree" @confirm="treeConfirm" @change="selectChange"
                               placeholder="请选择数据"
                               :index="treeSelect"></cu-select>
                </cu-form-item>
                <cu-form-item label="时间选择">
                    <cu-select type="time" @confirm="timeConfirm" @change="selectChange" placeholder="请选择时间"
                               :index="time" start-time="09:30" end-time="15:00"></cu-select>
                </cu-form-item>
                <cu-form-item label="日期时间选择">
                    <cu-select type="date" @confirm="dateConfirm" @change="selectChange" placeholder="请选择时间"
                               :index="date" start-time="2018-10-05 09:30" end-time="2020-09-06 15:00"></cu-select>
                </cu-form-item>
            </cu-form>

            <h3 class="title margin-top margin-bottom">表单开关</h3>
            <cu-form ref="swtichForm">
                <cu-form-item label="开关选择">
                    <cu-switch :checked="checked" @change="changeSwitch"></cu-switch>
                </cu-form-item>

                <cu-form-item label="自定义颜色">
                    <cu-switch color="red" :checked="colorChecked" @change="colorSwitch"></cu-switch>
                </cu-form-item>

                <cu-form-item label="自定义图标">
                    <cu-switch color="blue" icon="sex" :checked="iconChecked" @change="iconSwitch"></cu-switch>
                </cu-form-item>
                <cu-form-item label="方形开关">
                    <cu-switch radius color="blue" :checked="radiusChecked" @change="radiusSwitch"></cu-switch>
                </cu-form-item>
            </cu-form>

            <h3 class="title margin-top margin-bottom">表单单选多选</h3>
            <cu-form ref="radioForm">
                <cu-form-item label="单个选中">
                    <cu-radio name="选择"/>
                </cu-form-item>
                <cu-form-item label="镂空选择">
                    <cu-radio line name="镂空"/>
                </cu-form-item>
                <cu-form-item label="自定义颜色">
                    <cu-radio color="green" line name="自定义颜色" v-model="radio1"/>
                </cu-form-item>
                <cu-form-item label="自定义颜色">
                    <cu-radio color="yellow" line name="自定义颜色" v-model="radio2"/>
                </cu-form-item>
                <cu-form-item label="选择组">
                    <cu-radio-group @change="radioChange" :data="radioList" v-model="groupVal"/>
                </cu-form-item>
                <cu-form-item label="镂空选择组">
                    <cu-radio-group line @change="radioChange" :data="radioList" v-model="groupVal1"/>
                </cu-form-item>
                <cu-form-item label="多选选择器">
                    <cu-checkbox-group :data="items" @change="change" v-model="checkboxGroup"/>
                </cu-form-item>
                <cu-form-item label="多选颜色">
                    <cu-checkbox-group :data="items" round @change="change1" v-model="checkboxGroup1"/>
                </cu-form-item>
            </cu-form>

            <h3 class="title margin-top margin-bottom">上传组件</h3>
            <cu-form ref="radioForm">
                <cu-form-item label="上传">
                    <cu-upload :max="10" @delete="deleteImg" @change="onChangeUpload" v-model="imgs"/>
                </cu-form-item>
            </cu-form>

            <h3 class="title margin-top margin-bottom">头像</h3>
            <cu-form ref="radioForm">
                <cu-form-item label="头像">
                    <cu-avatar size="df"
                               url="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361135963,570304265&fm=26&gp=0.jpg"/>
                </cu-form-item>
            </cu-form>
            <h3 class="title margin-top margin-bottom">多行文本输入框</h3>
            <cu-form ref="radioForm">
                <cu-form-item label="文本框">
                    <cu-textarea v-model="textarea" @change="textareaChange" placeholder="请输入内容..."></cu-textarea>
                </cu-form-item>
            </cu-form>
        </view>
    </view>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            textarea: "",
            imgs: [],
            radio1: false,
            radio2: false,
            checkboxGroup: ['USA'],
            checkboxGroup1: ['USA'],
            radioList: [
                {
                    name: "菠菜",
                    code: '0',
                },
                {
                    name: "白菜",
                    code: '1',
                },
                {
                    name: "黄瓜",
                    code: '2',
                }
            ],
            groupVal1: '1',
            groupVal: "0",
            radioVal: "",
            radioFlag: false,
            radiusChecked: false,
            iconChecked: false,
            colorChecked: false,
            checked: false,
            date: '',
            time: "",
            treeSelect: [0, 0, 0],
            selectVal: -1,
            data: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
            selectTree: [
                ['无脊柱动物', '脊柱动物'],
                ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
                ['猪肉绦虫', '吸血虫']
            ],
            selectShow: false,
            selectForm: {},
            selectRules: {},
            form: {
                userName: "",
                passWord: "",
                email: ''
            },
            rules: {
                userName: [
                    {
                        type: 'string',
                        required: true,
                        message: '账号不能为空'
                    }
                ],
                passWord: [
                    {
                        type: 'string',
                        required: true,
                        message: '密码不能为空'
                    }
                ],
                email: [
                    {
                        type: 'string',
                        required: true,
                        message: '邮箱不能为空'
                    }
                ]
            },
            ruleSlot: {
                user: [
                    {
                        type: 'string',
                        required: true,
                        message: '账号不能为空'
                    }
                ],
                pass: [
                    {
                        type: 'string',
                        required: true,
                        message: '密码不能为空'
                    }
                ],
                tel: [
                    {
                        type: 'string',
                        required: true,
                        message: '邮箱不能为空'
                    }
                ]
            },
            items: [
                {
                    value: 'USA',
                    name: '美国'
                },
                {
                    value: 'CHN',
                    name: '中国',
                },
                {
                    value: 'ina',
                    name: '印度',
                }
            ],
            formSlot: {
                user: "",
                pass: "",
                tel: ''
            }
        }
    },
    methods: {
        submit() {
            this.$refs.cuForm.validate((result) => {
                console.log(result)
            })
        },
        submitSlot() {
            this.$refs.slotForm.validate((result) => {
                console.log(result)
            })
        },
        confirm(e) {
            console.log(e)
            this.selectVal = e
            console.log(this.selectVal)
        },
        treeConfirm(e) {
            this.treeSelect = e
        },
        selectChange(e) {
            console.log(e)
        },
        timeConfirm(e) {
            this.time = e
        },
        dateConfirm(e) {
            this.date = e
        },
        changeSwitch(e) {
            this.checked = e.detail.value
        },
        colorSwitch(e) {
            this.colorChecked = e.detail.value
        },
        iconSwitch(e) {
            this.iconChecked = e.detail.value
        },
        radiusSwitch(e) {
            this.radiusChecked = e.detail.value
        },
        radioChange(data) {
            console.log(data)
        },
        change(e) {
            console.log(this.checkboxGroup)
            console.log(e)
        },
        change1(e) {
            console.log(this.checkboxGroup1)
            console.log(e)
        },
        deleteImg(e) {
            console.log(e)
        },
        onChangeUpload(e) {
            console.log(e)
        },
        textareaChange(e) {
            console.log(e)
        }
    }
}
</script>
<style scoped>
.formPage {
    padding: 10 rpx;
}

.title {
    text-align: center;
}
</style>
<template>
    <div id="userInfo">
        <div id="avatar">
            <Avatar :src="avatar" shape="square" icon="ios-person" />
            <Upload
                :headers="uploadHeader"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="1024"
                :on-success="handleSuccess"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :action="uploadUrl"
                :show-upload-list="false"
            >
                <Button icon="ios-cloud-upload-outline">上传头像</Button>
            </Upload>
        </div>
        <Form id="passwordForm" ref="modify" :model="modify">
            <FormItem label="当前密码" prop="oldPassword">
                <Input clearable class="input" placeholder="请输入当前密码" v-model="modify.oldPassword"></Input>
            </FormItem>
            <FormItem label="新密码" prop="newPassword">
                <Input clearable placeholder="请输入新密码" v-model="modify.newPassword"></Input>
            </FormItem>
            <Button @click="modifyPassword" type="primary">修改密码</Button>
        </Form>

        <Form id="userInfoForm" :model="form">
            <FormItem label="真实姓名">
                <Input clearable v-model="form.name"></Input>
            </FormItem>
            <FormItem label="专业班级">
                <Input clearable v-model="form.major"></Input>
            </FormItem>
            <FormItem label="QQ号">
                <Input clearable v-model="form.qq"></Input>
            </FormItem>
            <FormItem label="手机号">
                <Input clearable v-model="form.phone"></Input>
            </FormItem>
            <FormItem label="微信号">
                <Input clearable v-model="form.weixin"></Input>
            </FormItem>
            <FormItem label="自我简介">
                <Input :rows="rows" type="textarea" v-model="form.profile" size="large"></Input>
            </FormItem>
            <Button @click="modifyUser" type="primary"> 修改资料</Button>
        </Form>
    </div>
</template>

<script>
import { userApi } from '../api'
import { baseURL } from '../utils/request'

export default {
    name: 'UserInfo',
    data() {
        return {
            rows: 4,
            uploadUrl: baseURL + userApi.changeUserImg,
            uploadHeader: {
                Authorization: localStorage.getItem('token')
            },
            modify: {
                oldPassword: '',
                newPassword: ''
            }
        }
    },
    mounted() {
    },
    computed: {
        avatar() {
            return this.$store.getters.avatar
        },
        form() {
            return {
                name: this.$store.getters.name,
                major: this.$store.getters.major,
                qq: this.$store.getters.qq,
                phone: this.$store.getters.phone,
                weixin: this.$store.getters.weixin,
                profile: this.$store.getters.profile
            }
        }
    },
    methods: {
        handleSuccess(res) {
            // console.log(res)
            this.$store.commit('SET_AVATAR', res.data)
        },
        handleFormatError(file) {
            this.$Notice.error({
                desc: file.name + ' 文件格式不符合要求，请选择jpg或png格式文件'
            })
        },
        handleMaxSize(file) {
            this.$Notice.error({
                desc: file.name + '太大了， 请上传1M以内的文件.'
            })
        },
        modifyPassword() {
            // console.log('modify', modify)
            this.publicSend('modifyPassword', this.modify)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
            this.handleModifyReset('modify')
        },
        modifyUser() {
            this.publicSend('modifyUser', this.form)
                .then((res) => {
                    console.log(res)
                    this.$store.commit('SET_USER', this.form)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        handleModifyReset(ref) {
            this.publicResetForm(ref)
        }
    }
}
</script>

<style lang="scss">
@import '../style/views/userInfo';
</style>

<template>
    <Modal id="modifyModal" v-model="visible" title="上传博客" @on-ok="handleSubmit" @on-cancel="hidden">
        <Form ref="form" :model="form">
            <form-item label="博客标题" prop="title">
                <Input v-model="form.title"></Input>
            </form-item>
            <form-item label="文件" prop="file">
                <Upload
                    :format="['md']"
                    :max-size="10240"
                    :before-upload="handleUpload"
                    :on-success="handleSuccess"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :action="uploadUrl"
                >
                    <Button icon="ios-cloud-upload-outline" type="text" @click="upload" :loading="loadingStatus">
                        {{ loadingStatus ? '上传中' : '上传markdown格式文件' }}
                    </Button>
                </Upload>
            </form-item>
            <form-item label="是否原创(转载请添加原博客地址)" prop="originalIsOrNot">
                <Input disabled v-model="form.bookId"></Input>
            </form-item>
            <form-item label="原博客地址" prop="originUrl">
                <Input disabled v-model="form.bookId"></Input>
            </form-item>
            <form-item label="博客分类" prop="categoryName">
                <auto-input
                    :param="form.categoryName"
                    item="categoryName"
                    placeholder="请输入查询状态名"
                    dispatch="getLikeBook"
                    @recvParam="recvParam"
                ></auto-input>
            </form-item>
            <form-item label="关联标签" prop="tag">
                <Tag v-for="item in form.tagList" :key="item" :name="item" closable @on-close="handleClose">{{ item }}
                </Tag>
                <auto-complete
                    clearable
                    v-model="tag"
                    :data="tags"
                    @on-change="handleAdd"
                    placeholder="请添加标签"
                ></auto-complete>
            </form-item>
        </Form>
    </Modal>
</template>

<script>
import { baseURL } from '@/utils/request'
import { blogApi } from '@/api'
import AutoInput from '@/components/Util/AutoInput'

export default {
    name: 'AddBlog',
    components: {
        AutoInput
    },
    data() {
        return {
            visible: false,
            loadingStatus: false,
            uploadUrl: baseURL + blogApi.addBlog,
            tag: '',
            tags: [],
            form: {
                title: '',
                file: null,
                originalIsOrNot: 0,
                originUrl: '',
                categoryName: '',
                tagList: []
            }
        }
    },
    mounted() {
        this.getTag()
    },
    methods: {
        upload() {
            this.loadingStatus = true
        },
        getTag() {
            this.publicGetData('getLikeTag')
                .then((res) => {
                    this.tags = res
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        handleUpload(file) {
            this.form.file = file
            this.loadingStatus = false
            return false
        },
        handleSuccess(res) {
            this.$Notice.info({
                title: '操作成功'
            })
        },
        handleFormatError(file) {
            this.$Notice.error({
                desc: file.name + ' 文件格式不符合要求，请选择jpg或png格式文件'
            })
        },
        handleMaxSize(file) {
            this.$Notice.error({
                desc: file.name + '太大了， 请上传10M以内的文件.'
            })
        },
        handleAdd(item) {
            let result = this.judgeRepeat(item)
            if (result) {
                this.form.tagList.push(item)
            }
        },
        judgeRepeat(item) {
            let flag = true
            this.form.tagList.forEach((tag) => {
                if (tag === item) {
                    this.$Notice.error({
                        desc: '不要添加重复的标签( ╯□╰ )'
                    })
                    flag = false
                }
            })
            return flag
        },
        handleClose(event, name) {
            const index = this.form.tagList.indexOf(name)
            this.form.tagList.splice(index, 1)
        },
        recvParam(item, val) {
            this.form[item] = val
        },
        handleSubmit() {
            let formData=new FormData();
            formData.append("title",this.form.title)
            formData.append("file",this.form.file)
            formData.append("originalIsOrNot",this.form.originalIsOrNot)
            formData.append("originUrl",this.form.originUrl)
            formData.append("categoryName",this.form.categoryName)
            formData.append("tagList",this.form.tagList)
            this.$store
                .dispatch('saveBlog', formData)
                .then((res) => {
                    this.$emit('getBookList', {})
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        hidden() {
            this.visible = false
        },
        show() {
            this.visible = true
        }
    }
}
</script>

<style lang="scss">
@import '../../style/util/modifyModal';
</style>

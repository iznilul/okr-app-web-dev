<template>
    <div id="signUp">
        <Form ref="form" :model="form" @keyup.enter.native="getSignUpList">
            <FormItem label="学号" prop="studentId">
                <Input v-model="form.studentId"></Input>
            </FormItem>
            <FormItem label="姓名" prop="name">
                <Input v-model="form.name"></Input>
            </FormItem>
            <FormItem label="专业班级" prop="major">
                <Input v-model="form.major"></Input>
            </FormItem>
        </Form>
        <div class="query">
            <Button @click="getSignUpList" type="primary">查询</Button>
            <Reset @reset="reset"></Reset>
            <Button @click="exportSignUp" type="primary">导出名单</Button>
        </div>
        <Table stripe border :columns="columns" :data="data"></Table>
        <modify-sign-up ref="modifySignUp" @getSignUpList="getSignUpList"></modify-sign-up>
        <Page
            :total="dataCount"
            :page-size="form.pageSize"
            :current="current"
            show-total
            class="paging"
            show-sizer
            @on-change="changePage"
            @on-page-size-change="changePageSize"
        ></Page>
    </div>
</template>

<script>
import columns from '../config/signUpColumn'
import AutoInput from '../components/Util/AutoInput'
import Reset from '../components/Util/Reset'
import ModifySignUp from '../components/Util/ModifySignUp'

export default {
    name: 'signUp',
    components: {
        AutoInput,
        Reset,
        ModifySignUp
    },
    data() {
        return {
            columns: columns,
            data: [],
            dataCount: 0,
            current: 1,
            form: {
                studentId: '',
                name: '',
                major: '',
                index: 1,
                pageSize: 10
            }
        }
    },
    mounted() {
        this.getSignUpList()
        window.showSignUpModal = this.showSignUpModal
    },
    methods: {
        reset() {
            this.publicResetForm('form')
            this.getSignUpList()
        },
        getSignUpList() {
            this.publicGetForm('getSignUpList')
        },
        exportSignUp() {
            this.publicGetData('exportSignUp')
                .then((res) => {
                    console.log(res)
                    let blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
                    let objectUrl = URL.createObjectURL(blob) // 创建URL
                    location.href = objectUrl
                    URL.revokeObjectURL(objectUrl) // 释放内存
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        changePage(index) {
            this.publicChangePage(index, this.getSignUpList)
        },
        changePageSize(pageSize) {
            this.publicChangePageSize(pageSize, this.getSignUpList)
        },
        showSignUpModal(ref) {
            this.publicShowModal(ref)
        }
    }
}
</script>

<style lang="scss">
@import '../style/views/signUp';
@import "../style/global/table";
@import "../style/global/page";
</style>

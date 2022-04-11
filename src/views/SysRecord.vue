<template>
    <div id="sysRecord">
        <Form id="form" ref="form" :model="form" @keyup.enter.native="getRecord">
            <FormItem label="账号" prop="username">
                <auto-input
                    :param="form.username"
                    item="username"
                    placeholder="请输入查询账号"
                    dispatch="getLikeUsername"
                    @recvParam="recvParam"
                >
                </auto-input>
            </FormItem>
            <FormItem label="开始时间" prop="beginTime">
                <DatePicker
                    :value="form.beginTime"
                    @on-change="handleBeginTimeChange"
                    type="date"
                    placeholder="选择日期"
                ></DatePicker>
            </FormItem>
            <FormItem label="结束时间" prop="endTime">
                <DatePicker
                    :value="form.endTime"
                    @on-change="handleEndTimeChange"
                    type="date"
                    placeholder="选择日期"
                ></DatePicker>
            </FormItem>
        </Form>
        <div class="query">
            <Button @click="getRecord" type="primary">查询</Button>
            <Reset @reset="reset"></Reset>
        </div>
        <Table border stripe :columns="columns" :data="data"></Table>
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
import columns from '../config/sysRecordColumn'
import AutoInput from '../components/Util/AutoInput'
import Reset from '../components/Util/Reset'

export default {
    name: 'sysRecord',
    components: {
        AutoInput,
        Reset
    },
    data() {
        return {
            columns: columns,
            data: [],
            dataCount: 0,
            current: 1,
            form: {
                username: '',
                beginTime: '',
                endTime: '',
                index: 1,
                pageSize: 10
            }
        }
    },
    mounted() {
        this.getRecord()
    },
    methods: {
        recvParam(item, val) {
            this.form[item] = val
        },
        reset() {
            this.form.username = ''
            this.form.beginTime = ''
            this.form.endTime = ''
            this.getRecord()
        },
        handleBeginTimeChange(date) {
            this.form.beginTime = date
        },
        handleEndTimeChange(date) {
            this.form.endTime = date
        },
        getRecord() {
            this.publicGetForm('getSysRecord')
        },
        changePage(index) {
            this.publicChangePage(index, this.getRecord)
        },
        changePageSize(pageSize) {
            this.publicChangePageSize(pageSize, this.getRecord)
        }
    }
}
</script>

<style lang="scss">
@import '../style/views/sysRecord';
@import '../style/global/page';
@import '../style/global/table';
</style>

<template>
    <div id="bookUser">
        <Page
            id="page"
            :total="dataCount"
            :page-size="form.pageSize"
            :current="current"
            show-total
            class="paging"
            show-sizer
            @on-change="changePage"
            @on-page-size-change="changePageSize"
        ></Page>
        <Table border stripe :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
import columns from '@/config/bookUserColumn'

export default {
    name: 'book',
    components: {},
    data() {
        return {
            columns: columns,
            data: [],
            dataCount: 0,
            current: 1,
            form: {
                index: 1,
                pageSize: 10
            }
        }
    },
    mounted() {
        this.getBookUser()
    },
    methods: {
        getBookUser() {
            this.publicGetForm('getBookUser')
        },
        changePage(index) {
            this.publicChangePage(index, this.getBookUser)
        },
        changePageSize(pageSize) {
            this.publicChangePageSize(pageSize, this.getBookUser)
        }
    }
}
</script>

<style lang="scss">
@import "../style/global/page";
@import "../style/global/table";
</style>

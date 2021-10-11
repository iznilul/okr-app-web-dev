<template>
  <auto-complete
    clearable
    v-model="queryParam"
    :data="data"
    @on-search="getData(dispatch, { param: queryParam })"
    :placeholder="placeholder"
  ></auto-complete>
</template>

<script>
export default {
  name: 'AutoInput',
  data() {
    return {
      data: [],
      queryParam: this.param,
    }
  },
  props: {
    param: {
      require: false,
      type: String,
      default() {
        return ''
      },
    },
    placeholder: {
      require: false,
      type: String,
      default() {
        return ''
      },
    },
    dispatch: {
      require: true,
      type: String,
      default() {
        return ''
      },
    },
  },
  model: {
    prop: 'param',
    event: 'changeParam',
  },
  methods: {
    getData(method, param) {
      this.publicGetData(method, param)
    },
  },
}
</script>

<style lang="less"></style>

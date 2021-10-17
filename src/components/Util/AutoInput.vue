<template>
  <auto-complete
    clearable
    v-model="value"
    :data="data"
    @on-search="getData(dispatch, { param: value })"
    @on-change="sendParam"
    :placeholder="placeholder"
  ></auto-complete>
</template>

<script>
import debounce from '../../utils/debounce'
export default {
  name: 'AutoInput',
  data() {
    return {
      data: [],
      value: this.param,
    }
  },
  watch: {
    param() {
      this.value = this.param
    },
  },
  props: {
    param: {
      require: true,
      type: String,
      default() {
        return ''
      },
    },
    item: {
      require: true,
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
  methods: {
    getData(method, param) {
      debounce(() => {
        this.publicGetData(method, param)
          .then((res) => {
            this.data = res
          })
          .catch((error) => {
            console.log(error)
          })
      }, 800)
    },
    sendParam(val) {
      // console.log(val)
      this.$emit('recvParam', this.item, val)
    },
  },
}
</script>

<style lang="less"></style>

<template>
  <Modal id="modifyModal" v-model="visible" title="修改钥匙信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="钥匙Id" prop="keyId">
        <Input disabled v-model="form.keyId"></Input>
      </form-item>
      <form-item label="钥匙名" prop="keyName">
        <Input v-model="form.keyName"></Input>
      </form-item>
      <form-item label="状态" prop="statusName">
        <auto-complete
          clearable
          v-model="form.statusName"
          :data="statusNameData"
          @on-search="getLike('Key')"
          placeholder="请输入钥匙状态"
        ></auto-complete>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import resultEnum from '../../utils/ResultEnum'
import { queryLike } from '../../utils/queryLike'

export default {
  name: 'ModifyKey',
  data() {
    return {
      visible: false,
      statusNameData: [],
      form: {
        keyId: '',
        keyName: '',
        statusName: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('modifyKey', this.form)
        .then((res) => {
          // console.log(res)
          this.$Notice.success({
            desc: resultEnum.SUCCESS.desc,
          })
          this.$emit('getKey', {})
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: resultEnum.FAIL.desc,
          })
        })
    },
    getLike(pattern) {
      queryLike(pattern)
        .then((res) => {
          console.log(res)
          this.statusNameData = res
        })
        .catch((error) => {
          console.error(error)
        })
    },
    hidden() {
      this.visible = false
    },
    show() {
      this.visible = true
    },
    getKeyById(keyId) {
      this.$store
        .dispatch('getKeyById', { keyId: keyId })
        .then((res) => {
          console.log(res)
          this.form.keyId = res.keyId
          this.form.keyName = res.keyName
          this.form.statusName = res.statusName
        })
        .catch((error) => {
          console.error(error)
          this.$Notice.error({
            desc: '获取钥匙信息失败',
          })
        })
    },
  },
}
</script>

<style lang="less">
@import '../../style/util/ModifyModal';
</style>

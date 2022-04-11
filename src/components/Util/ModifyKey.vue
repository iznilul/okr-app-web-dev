<template>
  <Modal id="modifyModal" v-model="visible" title="修改钥匙信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" model="form">
      <form-item label="钥匙Id" prop="keyId">
        <Input disabled v-model="form.keyId"></Input>
      </form-item>
      <form-item label="钥匙名" prop="keyName">
        <Input v-model="form.keyName"></Input>
      </form-item>
      <form-item label="状态" prop="statusName">
        <auto-input
          :param="form.statusName"
          item="statusName"
          placeholder="请输入查询状态名"
          dispatch="getLikeKey"
          @recvParam="recvParam"
        ></auto-input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import AutoInput from './AutoInput'

export default {
  name: 'ModifyKey',
  components: { AutoInput },
  data() {
    return {
      visible: false,
      form: {
        keyId: '',
        keyName: '',
        statusName: '',
      },
    }
  },
  mounted() {
    window.getKeyById = this.getKeyById
  },
  methods: {
    recvParam(item, val) {
      this.form[item] = val
    },
    handleSubmit() {
      this.publicSend('modifyKey', this.form)
        .then((res) => {
          this.$emit('getKeyList')
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
    },
    getKeyById(keyId) {
      this.publicGetData('getKeyById', { keyId: keyId })
        .then((res) => {
          this.form = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
@import '../../style/util/modifyModal';
</style>

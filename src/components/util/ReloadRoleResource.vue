<template>
  <div id="reloadRoleResource">
    <Button @click="handleSubmit" :type="type">重载角色资源</Button>
  </div>
</template>

<script>
export default {
  name: 'ReloadRoleResource',

  data() {
    return {}
  },
  computed: {
    type() {
      return this.$store.getters.type
    },
  },
  methods: {
    handleSubmit() {
      // console.log(name)
      let res = false
      this.$emit('validate', (val) => {
        res = val
      })
      if (res) {
        this.$store
          .dispatch('reloadRoleResource', {})
          .then((res) => {
            console.log(res)
            this.$Notice.info({
              desc: '操作成功',
            })
          })
          .catch((error) => {
            console.log(error)
            this.$Notice.error({
              desc: '重载失败',
            })
          })
      }
    },
  },
}
</script>

<style lang="less"></style>

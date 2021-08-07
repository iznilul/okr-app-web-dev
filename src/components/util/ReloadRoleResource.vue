<template>
  <div id="reloadRoleResource">
    <Button @click="handleSubmit('reloadAdminRoleResource')" :type="type">重载管理员资源</Button>
    <Button @click="handleSubmit('reloadUserRoleResource')" :type="type" style="position: relative; left: 5px"
      >重载用户资源</Button
    >
  </div>
</template>

<script>
export default {
  name: 'ReloadRoleResource',

  data() {
    return {
      type: sessionStorage.getItem('username') === 'admin' ? 'primary' : 'warning',
    }
  },
  methods: {
    handleSubmit(name) {
      // console.log(name)
      let res = false
      this.$emit('validate', (val) => {
        res = val
      })
      if (res) {
        this.$store
          .dispatch(name, {})
          .then((res) => {
            console.log(res)
            this.$Notice.info({
              desc: res,
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

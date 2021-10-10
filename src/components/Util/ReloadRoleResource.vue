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
      if (this.publicValidate()) {
        this.publicClickButton('reloadRoleResource')
      }
    },
  },
}
</script>

<style lang="less"></style>

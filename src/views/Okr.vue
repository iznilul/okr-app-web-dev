<template>
  <div>
    okr管理，还没有开发( ╯□╰ )
    <div>
      <Button @click="reback" type="primary" style="margin-left: 100px">返回</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'okr',
  methods: {
    reback() {
      this.$router.back()
    },
  },
}
</script>

<style></style>

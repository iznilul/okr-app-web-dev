<template>
  <div id="reset">
    <Button @click="reset" type="primary">重置</Button>
  </div>
</template>

<script>
export default {
  name: 'Reset',
  data() {
    return {}
  },
  methods: {
    reset() {
      this.$emit('reset', {})
    },
  },
}
</script>

<style lang="less"></style>

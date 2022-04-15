<template>
  <Table border stripe id="table" :columns="column" :data="serverInfo"></Table>
</template>

<script>
export default {
  name: 'ServerInfo',
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  watch: {
    data(newVal) {
      // console.log(newVal)
      this.serverInfo = []
      this.serverInfo.push(newVal)
    },
  },
  data() {
    return {
      serverInfo: [],
      column: [
        {
          title: 'JVM版本',
          key: 'jvmName',
        },
        {
          title: 'JDK版本',
          key: 'jdkVersion',
        },
        {
          title: 'IP地址',
          key: 'serverIP',
        },
        {
          title: '服务器名称',
          key: 'serverName',
        },
        {
          title: '操作系统',
          key: 'serverOS',
        },
        {
          title: '架构',
          key: 'serverArch',
        },
        {
          title: '文件系统型号',
          key: 'sysTypeName',
        },
        {
          title: '文件系统名称',
          key: 'sysName',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss"></style>

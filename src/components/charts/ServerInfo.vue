<template>
  <transition appear name="fade">
    <Table stripe id="table" :columns="column" :data="serverInfo"></Table>
  </transition>
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
          width: '260px',
        },
        {
          title: 'JDK版本',
          key: 'jdkVersion',
          width: '120px',
        },
        {
          title: 'IP地址',
          key: 'serverIP',
          width: '150px',
        },
        {
          title: '服务器名称',
          key: 'serverName',
          width: '160px',
        },
        {
          title: '操作系统',
          key: 'serverOS',
          width: '150px',
        },
        {
          title: '架构',
          key: 'serverArch',
          width: '90px',
        },
        {
          title: '文件系统型号',
          key: 'sysTypeName',
          width: '120px',
        },
        {
          title: '文件系统名称',
          key: 'sysName',
          width: '180px',
        },
      ],
    }
  },
}
</script>

<style scoped lang="less">
@import '../../style/animation/Fade';
</style>

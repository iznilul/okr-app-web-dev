<template>
  <div id="home">
    <span id="title">服务器性能监控</span>
    <div id="pie">
      <Cpu :data="form.cpu"></Cpu>
      <Mem :data="form.mem"></Mem>
      <Jvm :data="form.jvm"></Jvm>
      <SysFiles :data="form.sysFiles"></SysFiles>
    </div>
    <div id="serverInfo">
      <server-info :data="form.serverInfo"></server-info>
    </div>
  </div>
</template>

<script>
import { monitorData } from '../api/user'
import Cpu from '../components/charts/Cpu'
import Mem from '../components/charts/Mem'
import Jvm from '../components/charts/Jvm'
import SysFiles from '../components/charts/SysFiles'
import ServerInfo from '../components/charts/ServerInfo'
import ApiCount from '../components/charts/ApiCount'
export default {
  name: 'Home',
  data() {
    return {
      form: {
        cpu: {},
        mem: {},
        jvm: {},
        sysFiles: {},
        serverInfo: {},
      },
      timer: null,
    }
  },
  components: { ApiCount, ServerInfo, SysFiles, Cpu, Mem, Jvm },
  computed: {},
  mounted() {
    this.monitorData()
    this.timer = setInterval(() => {
      this.monitorData()
    }, 20000)
  },
  methods: {
    monitorData() {
      this.$store
        .dispatch('monitorData', {})
        .then((res) => {
          console.log(res)
          this.form.cpu = res.cpu
          this.form.mem = res.mem
          this.form.jvm = res.jvm
          this.form.sysFiles = res.sysFiles[0]
          this.form.serverInfo = res.serverInfo
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style lang="less">
@import '../style/views/Home';
</style>

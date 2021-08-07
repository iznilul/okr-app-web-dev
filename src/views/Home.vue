<template>
  <div id="home">
    <span>服务器性能监控</span>
    <div id="server">
      <Cpu :data="form.cpu"></Cpu>
      <Mem :data="form.mem"></Mem>
      <Jvm :data="form.jvm"></Jvm>
    </div>
  </div>
</template>

<script>
import { getMonitorData } from '../api/user'
import Cpu from '../components/charts/Cpu'
import Mem from '../components/charts/Mem'
import Jvm from '../components/charts/Jvm'
export default {
  name: 'Home',
  data() {
    return {
      form: {
        cpu: {},
        mem: {},
        jvm: {},
      },
      timer: null,
    }
  },
  components: { Cpu, Mem, Jvm },
  computed: {},
  mounted() {
    this.getMonitorData()
    this.timer = setInterval(() => {
      this.getMonitorData()
    }, 20000)
  },
  methods: {
    getMonitorData() {
      this.$store
        .dispatch('getMonitorData', {})
        .then((res) => {
          console.log(res)
          this.form.cpu = res.cpu
          this.form.mem = res.mem
          this.form.jvm = res.jvm
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

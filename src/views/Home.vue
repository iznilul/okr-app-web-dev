<template>
  <div id="home">
    <div id="server">
      <div id="cpu"></div>
      <div id="mem"></div>
      <div id="sysFiles"></div>
    </div>
  </div>
</template>

<script>
import { getMonitorData } from '../api/user'

export default {
  name: 'Home',
  data() {
    return {
      form: {
        cpu: {},
        mem: {},
        sysFiles: {},
      },
      cpuIndex: -1,
    }
  },
  components: {},
  computed: {
    cpuChart() {
      return this.$echarts.init(document.getElementById('cpu'))
    },
    memChart() {
      return this.$echarts.init(document.getElementById('mem'))
    },
    sysFilesChart() {
      return this.$echarts.init(document.getElementById('sysFiles'))
    },

    cpuLen() {
      return this.cpuOption.series[0].data.length
    },
    cpuOption() {
      return {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: '10px',
          top: '20%',
          data: ['空闲', '使用中', '系统', '等待'],
          textStyle: {
            color: '#27D9C8',
            fontSize: 14,
          },
        },
        color: ['#27D9C8', '#6a3682', '#82642b', '#458224'],
        title: {
          text: 'cpu情况',
          top: '5%',
          left: '5%',
          textStyle: {
            color: '#27D9C8',
            fontWeight: 600,
            fontSize: 15,
          },
        },
        series: [
          {
            name: 'cpu情况',
            type: 'pie',
            radius: ['60%', '75%'],
            left: '50px',
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
              },
            },
            labelLine: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: 'center',
                formatter: function (params) {
                  return '{name|' + params.name + '}\n{value|' + params.value + ' %}'
                },
                rich: {
                  value: {
                    fontFamily: 'SFUDINEngschrift',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#27D9C8',
                  },
                  name: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                    color: '#808184',
                  },
                },
              },
            },
            data: [
              {
                value: '',
                name: '空闲',
              },
              {
                value: '',
                name: '使用中',
              },
              {
                value: '',
                name: '系统',
              },
              {
                value: '',
                name: '等待',
              },
            ],
          },
        ],
      }
    },
    memOption() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        color: ['#27D9C8', '#D8D8D8'],
        title: {
          text: '80%',
          left: 'center',
          top: '50%',
          textStyle: {
            color: '#27D9C8',
            fontSize: 36,
            align: 'center',
          },
        },
        graphic: {
          type: 'text',
          left: 'center',
          style: {
            text: 'CPU使用',
            textAlign: 'center',
            fill: '#27D9C8',
            fontSize: 15,
            fontWeight: 700,
          },
        },
        series: [
          {
            name: '运动情况',
            type: 'pie',
            radius: ['65%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
              },
            },
            data: [
              {
                value: 80,
                name: '已完成',
              },
              {
                value: 20,
                name: '未完成',
              },
            ],
          },
        ],
      }
    },
    sysFilesOption() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        color: ['#27D9C8', '#D8D8D8'],
        title: {
          text: '80%',
          left: 'center',
          top: '50%',
          textStyle: {
            color: '#27D9C8',
            fontSize: 36,
            align: 'center',
          },
        },
        graphic: {
          type: 'text',
          left: 'center',
          style: {
            text: 'CPU使用',
            textAlign: 'center',
            fill: '#27D9C8',
            fontSize: 15,
            fontWeight: 700,
          },
        },
        series: [
          {
            name: '运动情况',
            type: 'pie',
            radius: ['65%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
              },
            },
            data: [
              {
                value: 80,
                name: '已完成',
              },
              {
                value: 20,
                name: '未完成',
              },
            ],
          },
        ],
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.cpuChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.cpuIndex })
      this.cpuIndex = (this.cpuIndex + 1) % this.cpuLen
      this.cpuChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: this.cpuIndex,
      })
    }, 5000)
    this.getMonitorData()
  },
  methods: {
    drawCpu() {
      this.cpuOption.series[0].data[0].value = this.form.cpu.free
      this.cpuOption.series[0].data[1].value = this.form.cpu.used
      this.cpuOption.series[0].data[2].value = this.form.cpu.sys
      this.cpuOption.series[0].data[3].value = this.form.cpu.wait
      this.cpuChart.setOption(this.cpuOption)
    },
    drawMem() {
      this.memChart.setOption(this.memOption)
    },
    drawSysFiles() {
      this.sysFilesChart.setOption(this.sysFilesOption)
    },
    getMonitorData() {
      this.$store
        .dispatch('getMonitorData', {})
        .then((res) => {
          console.log(res)
          this.form.cpu = res.cpu
          this.drawCpu()
          this.drawMem()
          this.drawSysFiles()
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<style lang="less">
@import '../style/views/Home';
</style>

<template>
  <div id="cpu"></div>
</template>

<script>
export default {
  name: 'Cpu',
  data() {
    return {
      cpu: {},
      cpuIndex: -1,
    }
  },
  computed: {
    cpuChart() {
      return this.$echarts.init(document.getElementById('cpu'))
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
  },
  methods: {
    drawCpu() {
      this.cpuOption.series[0].data[0].value = this.cpu.free
      this.cpuOption.series[0].data[1].value = this.cpu.used
      this.cpuOption.series[0].data[2].value = this.cpu.sys
      this.cpuOption.series[0].data[3].value = this.cpu.wait
      this.cpuChart.setOption(this.cpuOption)
    },
  },
}
</script>

<style scoped></style>

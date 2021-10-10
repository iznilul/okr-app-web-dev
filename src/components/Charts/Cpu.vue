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
      timer: null,
    }
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  watch: {
    data(newVal) {
      // console.log(newVal)
      this.cpuOption.series[0].data[0].value = this.data.free
      this.cpuOption.series[0].data[1].value = this.data.used
      this.cpuOption.series[0].data[2].value = this.data.sys
      this.cpuOption.series[0].data[3].value = this.data.wait
      this.cpuChart.setOption(this.cpuOption)
      setTimeout(() => {
        this.slideShow()
      }, 1000)
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.slideShow()
    }, 3000)
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
          formatter: function (params) {
            // console.log(params)
            return '状态:' + params.data.name + '<br/>' + '比例:' + params.data.value + '%'
          },
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
        color: ['#00e8ff', '#ff1f00', '#44ff02', '#ffeb00'],
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
                  return '{name|' + params.data.name + '}\n{value|' + params.data.value + ' %}'
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
    slideShow() {
      this.cpuChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.cpuIndex })
      this.cpuIndex = (this.cpuIndex + 1) % this.cpuLen
      this.cpuChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: this.cpuIndex,
      })
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style scoped></style>

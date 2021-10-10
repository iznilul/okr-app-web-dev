<template>
  <div id="mem"></div>
</template>

<script>
export default {
  name: 'Mem',
  data() {
    return {
      mem: {},
      memIndex: -1,
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
      this.memOption.series[0].data[0].value = 100 - this.data.usage
      this.memOption.series[0].data[0].num = this.data.free
      this.memOption.series[0].data[1].value = this.data.usage
      this.memOption.series[0].data[1].num = this.data.used
      this.memChart.setOption(this.memOption)
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
    memChart() {
      return this.$echarts.init(document.getElementById('mem'))
    },
    memLen() {
      return this.memOption.series[0].data.length
    },
    memOption() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            // console.log(params)
            return (
              '状态:' +
              params.data.name +
              '<br/>' +
              '比例:' +
              params.data.value +
              '%<br/>' +
              '大小:' +
              params.data.num +
              'GB'
            )
          },
        },
        legend: {
          orient: 'vertical',
          left: '10px',
          top: '20%',
          data: ['空闲', '使用中'],
          textStyle: {
            color: '#27D9C8',
            fontSize: 14,
          },
        },
        color: ['#00e8ff', '#ff1f00'],
        title: {
          text: '主内存情况',
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
            name: '主内存情况',
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
                  // console.log(params)
                  return (
                    '{name|' +
                    params.data.name +
                    '}\n{value|' +
                    params.data.value +
                    ' %}\n{value|' +
                    params.data.num +
                    'GB}'
                  )
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
                num: '',
              },
              {
                value: '',
                name: '使用中',
                num: '',
              },
            ],
          },
        ],
      }
    },
  },
  methods: {
    slideShow() {
      this.memChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: this.memIndex })
      this.memIndex = (this.memIndex + 1) % this.memLen
      this.memChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: this.memIndex,
      })
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style scoped></style>

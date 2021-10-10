<template>
  <div id="apiCount"></div>
</template>

<script>
export default {
  name: 'ApiCount',
  data() {
    return {
      data: [
        ['2000-06-05', 116],
        ['2000-06-06', 129],
        ['2000-06-07', 135],
        ['2000-06-08', 86],
        ['2000-06-09', 73],
        ['2000-06-10', 85],
        ['2000-06-11', 73],
        ['2000-06-12', 68],
        ['2000-06-13', 92],
        ['2000-06-14', 130],
        ['2000-06-15', 245],
        ['2000-06-16', 139],
      ],
    }
  },
  // props: {
  //   data: {
  //     type: Object,
  //     default: {},
  //   },
  // },
  mounted() {
    this.apiCountChart.setOption(this.apiCountOption)
  },
  computed: {
    dateList() {
      return this.data.map((item) => {
        return item[0]
      })
    },
    valueList() {
      return this.data.map((item) => {
        return item[1]
      })
    },
    apiCountChart() {
      return this.$echarts.init(document.getElementById('apiCount'))
    },
    apiCountOption() {
      return {
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
        ],
        title: [
          {
            text: '接口请求量统计',
            textStyle: {
              color: '#27D9C8',
              fontWeight: 600,
              fontSize: 20,
            },
          },
        ],
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            // console.log(params)
            return '接口请求量:' + params[0].data
          },
        },
        xAxis: [
          {
            data: this.dateList,
          },
        ],
        yAxis: [{}],
        grid: [
          {
            top: '10%',
          },
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: this.valueList,
          },
        ],
      }
    },
  },
  methods: {},
}
</script>

<style scoped></style>

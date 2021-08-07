// 饼图的公共系列属性
let pieSeries = {
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
// 基础标题（左上角那个）
let baseTitle = {
  top: '5%',
  left: '5%',
  textStyle: {
    color: '#A5A9B2',
    fontWeight: 600,
    fontSize: 12,
  },
}
// 公共配置
let pieBaseOption = {
  title: baseTitle,
  series: [pieSeries],
}
function cpuOptions() {
  pieBaseOption.title.text = 'CPU 使用率'
  pieBaseOption.series.name = 'CPU 使用率'
}
const echarts = {
  cpuOptions: {
    pieBaseOption,
  },
}
export default echarts

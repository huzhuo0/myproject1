<template>
  <div style="width: 100%; height: 100%">
    <!-- <div id="main" style="width:100%;height:100%"></div> -->
    <div ref="main" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'pieChart',
  components: {},
  data () {
    return {}
  },
  props: {
    wCircleColor: {
      type: String,
      default: '#1296fd'
    },
    wCircleBg: {
      type: String,
      default: '#cedbf3'
    },
    pieTitle: {
      type: Array,
      default () {
        return ['受影响杆塔', '占比']
      }
    },
    chartData: {
      type: Object,
      default () {
        return {
          value: 92,
          total: 100
        }
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      console.log('12345')
      // var myChart = echarts.init(document.getElementById('main'))
      var myChart = echarts.init(this.$refs.main)
      const max = this.chartData.total
      const value = this.chartData.value
      const option = {
        backgroundColor: '#fff',
        title: {
          text: (value || '-') + '%',
          subtext: this.pieTitle[0] + '\n' + this.pieTitle[1],
          x: 'center',
          y: '34%',
          textStyle: {
            color: '#107e7b',
            fontSize: '23',
            fontWeight: '600',
            lineHeight: 21,
            height: 10
          },
          subtextStyle: {
            color: '#107e7b',
            fontSize: '16',
            fontWeight: '500',
            lineHeight: 21
          },
          itemGap: 3, // 主标题和副标题之间的距离
          padding: [10, 0]
        },
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 100,
          startAngle: 90
        },
        radiusAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true
          },
          data: []
        },
        polar: {
          // radius: '100%', /* 原来的默认值 */
          radius: ['60%', '90%'], // 要调整圆的大小所以此处自定义
          center: ['50%', '50%']
        },
        series: [
          // 极坐标系下柱状图
          // 实际值
          {
            type: 'bar',
            data: [value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 15,
            name: '出租率',
            roundCap: 1,
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //         offset: 0,
            //         color: 'rgba(22,255,241,.1)'
            //     },
            //     {
            //         offset: 0.5,
            //         color: 'rgba(22,255,241,.5)'
            //     },
            //     {
            //         offset: 1,
            //         color: 'rgba(22,255,241,1)'
            //     }
            // ]),
            color: this.wCircleColor
          },
          // 背景图形
          {
            type: 'bar',
            data: [max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 15 /* 调整外圆背景宽度 */,
            roundCap: true,
            color: this.wCircleBg,
            barGap: '-100%'
          },
          // 尾端小圆点 饼图
          {
            type: 'pie',
            // 饼图大小跟外层极坐标系相同，需手动调试
            // radius: '98%',原来的默认值
            radius: ['60%', '86%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            startAngle: 180,
            endAngle: 0,
            silent: 1,
            z: 10,
            data: [
              // 实际值，背景色透明
              {
                name: '',
                value:
                  value > 75 ? (25 - (100 - value)) / max : (25 + value) / 100,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: 'transparent'
                }
              },
              {
                // 画中间的图标
                value: 0,
                label: {
                  position: 'inside',
                  backgroundColor: this.wCircleColor /* 图标内圆颜色 */,
                  // backgroundColor: this.wCircleColor
                  borderRadius: 14 /* 图标内圆宽度 */,
                  padding: 14 /* 图标内圆宽度 */,
                  borderWidth: 7 /* 图标外圆宽度 */,
                  // borderColor: 'rgba(155, 133, 241, 0.24)',
                  borderColor: '#FFF' /* 图标外圆颜色 */
                }
              },
              // 透明填充 angleAxis 的max相同 max : 2
              {
                value:
                  value > 75
                    ? 1 - (25 - (100 - value)) / max
                    : 1 - (25 + value) / 100,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          },
          {
            // {
            // name: 'Access From',
            type: 'pie',
            // radius: ['30%', '37%'],
            radius: ['50%', '58%'],
            // center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false
              // position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              {
                value: this.chartData.value,
                name: 'Search Engine',
                itemStyle: { color: this.wCircleColor }
              } /* this.wCircleBg */,
              {
                value: 100 - this.chartData.value,
                name: 'Direct',
                itemStyle: { color: this.wCircleBg }
              }
            ]
          }
          // }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss">
</style>

<template>
  <div class="home" :style="{width:width,height:height}">
       <div style="width:300px;height:300px;background:#fff">
         <pie-chart></pie-chart>
       </div>
  </div>
</template>

<script>
import pieChart from '../../components/echart/pieChart.vue'
export default {
  name: 'chartList',
  components: {
    pieChart
  },
  data () {
    return {
      width: '100%',
      height: window.innerHeight + 'px',
      showCom: 'showState'
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="less" scoped>
</style>

<template>
    <div class="home" :style="{width:width,height:height}" style="background:#fff">
        <p>防抖与节流</p>
    </div>
  </template>

<script>

export default {
  name: 'bibao',
  data () {
    return {
      width: '100%',
      height: window.innerHeight + 'px'
    }
  },
  mounted () {
    window.onresize = () => { /* 实时监听浏览器窗口的变化 */
      this.height = window.innerHeight + 'px'
    }
    /*  */
  }
}
</script>
<style lang="scss" scoped>
</style>

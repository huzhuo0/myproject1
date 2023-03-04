<template>
  <div class="home" :style="{width:width,height:height}">
    <p class="font1">旁门正道标题体 12313213121  font1</p>
    <p class="font2">优设标题黑 12313213121 font2</p>
    <p class="font3">字体测试 Digital-7Mono 12313213121 font3</p>
    <p class="font4">字体测试 DigitsDB-Normal 12313213121 font4</p>
    <p class="font5">字体测试 DIN-BoldItalicAlt 12313213121 font5</p>
    <p class="font6">字体测试 DIN-Light 12313213121 font6</p>
    <p class="font7">字体测试 DIN-Medium 12313213121 font7</p>
    <p class="font8">字体测试 DIN-Regular 12313213121 font8</p>
    <p class="font9">字体测试 DINEngschrift-Alternate 12313213121 font9</p>
    <p class="font10">字体测试 DS-Digital-Bold-Italic 12313213121 font10</p>
    <p class="font11"> 字体测试 FZZZHONGJ 12313213121 font11</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import mixinTest from '@/utils/mixin.js' // 局部混入

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  // mixins: [mixinTest],
  data () {
    return {
      testList: [],
      width: '100%',
      height: window.innerHeight + 'px'
    }
  },
  mounted () {
    window.onresize = () => { /* 实时监听浏览器窗口的变化 */
      this.height = window.innerHeight + 'px'
    }
    // console.log(this.width, this.height, '999')
  }
}
</script>
<style lang="scss">
// @import "../assets/style/mixin.scss"; /* 要引入混入的东西 */
// .home{
//   @include wordcolor;  /* 使用@include来使用混入中的东西 */
//   // color:orange;
//   @include backgroundCoverStyle('../assets/homebg.jpg')
// }
</style>

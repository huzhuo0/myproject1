<template>
  <div id="nav">
    <div class="container">
      <video src="./assets/video/fire_video.mp4" style="width:100%;height:80px;object-fit:fill" autoplay muted loop>
      </video>
      <div class="txt">
        <p>忍者の時代はもうすぐ終わる</p>
      </div>
    </div>
    <div class="home_nav">
      <router-link to="/" class="pointer navStyle">首页</router-link>
      <router-link to="/font" class="pointer navStyle">字体</router-link>
      <router-link to="/table" class="pointer navStyle">表格</router-link>
      <router-link to="/animation" class="pointer navStyle">动画</router-link>
      <router-link to="/useslot" class="pointer navStyle">插槽</router-link>
      <router-link to="/usevuex" class="pointer navStyle">vuex</router-link>
      <router-link to="/userouter" class="pointer navStyle">router</router-link>
      <router-link to="/useechart" class="pointer navStyle">echarts</router-link>
      <router-link to="/usecard" class="pointer navStyle">card</router-link>
      <router-link to="/bibao" class="pointer navStyle">闭包</router-link>
      <router-link to="/yxyxl" class="pointer navStyle">原型原型链</router-link>
    </div>
    <div class="home_content">
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import mixinTest from '@/utils/mixin.js' // 局部混入

export default {
  name: 'app',
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
    var video = document.getElementsByTagName('video')[0]
    video.playbackRate *= 0.25
  }
}
</script>
<style lang="scss">
@import "./assets/style/mixin.scss"; /* 要引入混入的东西（样式） */
#nav{
  // @include wordcolor;  /* 使用@include来使用混入中的东西 */
  // color:orange;
  @include backgroundCoverStyle('./assets/homebg.jpg');
  user-select: none; /* 设置文本不可选中 */
}
.navStyle{
  margin-right:20px;
}
// #nav {
//   width:100%;
//   height:100%;
//   user-select: none; /* 设置文本不可选中 */
// }
</style>

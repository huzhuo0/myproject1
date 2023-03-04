<template>
  <div class="home" :style="{width:width,height:height}">
    <div class="donghua1"></div>
    <div style="width:30px;height:30px;position:relative">
      <div class="iconMoveAnimation"></div>
    </div>
    <motianlun style="margin:100px"></motianlun>
    <!-- <div class="motianlun" ref="motianlun">
      <div class="item">
        <img src="../assets/img/lf.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/suolong.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/shanzhi.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/wusuobu.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/namei.jpg" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script>
import motianlun from '../components/animation/motianlun.vue'

export default {
  name: 'Home',
  components: {
    motianlun
  },
  // mixins: [mixinTest],
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
    // const items = document.querySelectorAll('.motianlun .item')
    // console.log(items,'666')
    // console.log(this.width, this.height, '999')
    // const items = this.$refs.motianlun
    // const childList = items.children
    // console.log(items.clientWidth, '666')
    // const r = items.clientWidth / 2
    // const count = childList.length
    // console.log(r, '667')
    // console.log(count, '668')
    // const angle = 360 / count
    // for (let i = 0; i < count; i++) {
    //   let t = i * angle
    //   t = (Math.PI / 180) * t
    //   const x = Math.sin(t) * r
    //   const y = Math.cos(t) * r
    //   childList[i].style.transform = `translate(${x - 25}px,${y - 25}px)`
    // }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss"; /* 要引入混入的东西 */
.motianlun{
  width:300px;
  height:300px;
  // background:red;
  margin-top:30px;
  margin-left:30px;
  border-radius:150px;
  position:relative;
  animation:motianlunRotate linear infinite 20s;
  .item{
    width:50px;
    height:50px;
    border-radius:25px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    // animation:motianlunRotate linear infinite 20s reverse;
    img{
      width:100%;
      height:100%;
      border-radius:25px;
      animation:motianlunRotate linear infinite 20s reverse;
    }
  }
}
@keyframes motianlunRotate{
  to{
    transform:rotate(360deg)
  }
}
</style>

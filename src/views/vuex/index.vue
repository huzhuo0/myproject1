<template>
  <div class="home" :style="{width:width,height:height}">
    <div style="margin:20px;display:flex">
        <el-button @click="changeComp(0)">vuex中state的使用</el-button>
        <el-button @click="changeComp(1)">vuex中mutations的使用</el-button>
        <el-button @click="changeComp(2)">vuex中actions的使用</el-button>
        <el-button @click="changeComp(3)">vuex中getters的使用</el-button>
        <!-- <el-button @click="changeComp(4)">vuex中modules的使用</el-button> -->
    </div>
    <Component :is="showCom"></Component>
  </div>
</template>

<script>
import showState from './state.vue'
import showMutation from './mutations.vue'
import showAction from './actions.vue'
import showGetter from './getters.vue'
export default {
  name: 'vuex-state',
  components:{
    showState,
    showMutation,
    showAction,
    showGetter
  },
  data () {
    return {
        width: '100%',
        height: window.innerHeight + 'px',
        showCom:'showState',
    }
  },
  methods:{
    changeComp(val){
        if(val==0){
            this.showCom = 'showState'
        }else if(val == 1){
            this.showCom = 'showMutation'
        }else if(val == 2){
            this.showCom = 'showAction'
        }else if(val == 3){
            this.showCom = 'showGetter'
        }
        
    }
  },
  computed:{
  }
}
</script>
<style lang="less" scoped>
</style>

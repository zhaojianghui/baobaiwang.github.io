<template>
  <div class="content" v-if="activeData[0]">
      <div v-if="activeData[0].adv_list">

        <img :src="activeData[0].adv_list.item[0].image" alt="">
      </div>
      <ul>
          <li v-for="(ele,index) in listData" :key="index">
            <router-link :to="{path:'/detail',query: {id:ele.home1.data}}">
              <img :src="ele.home1.image" alt="">
            </router-link>
          </li>
       </ul>
    <l-footer @click="goBackTop"></l-footer>
    <div class="back-top" @click="goBackTop" ref="go-top">

    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  props:{
      activeData:Array,
      listData:Array
  },
  components:{
    'r-header':Header,
    'l-footer':Footer
  },
  methods:{
    /*goBackTop(){
      $('html,body').animate({
        scrollTop:0
      },300);
    }*/
    goBackTop(){
      var timer = setInterval(()=>{
        document.body.scrollTop-=100;
        if(document.body.scrollTop == 0){
            clearInterval(timer);
        }
      },20)
    }
  },
  mounted(){
   /* this.$nextTick(() => {
        console.log(this.$refs['go-top'].$refs['go-top']);
    })*/
      var goTop;
      setTimeout(()=>{
        goTop = this.$refs['go-top'];
      },300);
      window.onscroll = function() {
        if (document.body.scrollTop > 160) {
          goTop.style.display = "block";
        } else {
          goTop.style.display = "none";
        }
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon.one{
  display: block;
  width:15px ;
  height: 15px;
  margin: 0 8px;
  background: url("./img/cart.png") no-repeat;
  background-size:100% 100%;
}
.content{
  width: 100%;
  position: absolute;
  left:0;
  top:44px;
}
  .content img{
    width: 100%;
    display: block;
  }
</style>

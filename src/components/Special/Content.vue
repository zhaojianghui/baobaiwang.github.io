<template>
  <div class="content">
    <div class="pro-list" v-for="(ele,index) in activeData" :key="index">
      <div class="n-tit"><p>{{ele.goods.title}}</p></div>
      <ul>
        <li v-for="(ele1,index) in ele.goods.item" :key="index">
          <img :src="ele1.goods_image" alt="">
          <p>{{ele1.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele1.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele1.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
        </li>
      </ul>
    </div>


    <l-footer @click="goBackTop" ref="go-top"></l-footer>

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
  },
  components:{
    'r-header':Header,
    'l-footer':Footer
  },
  methods:{
    goBackTop(){
      $('html,body').animate({
        scrollTop:0
      },500);
    }
  },
  mounted(){
      var goTop  = this.$refs['go-top'].$refs['go-top'];

    window.onscroll=function() {
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
.n-tit {
  width: 100%;
  height:36px;
  padding:0 10px;
  overflow: hidden;
}
.n-tit p{
  padding-left: 10px;
  margin-top:10px;
  border-left:3px solid #ED5564;
  font-size: 14px;
}
.pro-list ul{
  overflow: hidden;
}
.pro-list ul li{
  float: left;
  width: 47%;
  margin:10px 1% 0 2%;
  background: #fff;
  padding-bottom: 4px;
  color:#333;
  font-size: 12px;
}

.pro-list ul li:nth-child(2n){
  margin:10px 2% 0 1%;
}
.pro-list ul li img{
  width: 100%;
}
.pro-list ul li p{
  width: 100%;
  height:32px;
  padding:0 4px;
}
.pro-list ul li div{
  padding-left: 4px;
}
.pro-list ul li div{
  padding-left: 4px;
}
.pro-list ul li div .new-price{
  font-size: 13px;
  color: #db4453;
}
.pro-list ul li div .old-price{
  color: #999;
  padding:0 5px;
}
.pro-list ul li div .s-bg{
  background: #FF8E31;
  color: #fff;
  padding: 2px 2px 0;
  border-radius:2px;
}
</style>

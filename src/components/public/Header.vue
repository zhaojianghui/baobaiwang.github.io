<template>
  <div class="header posf" >
    <ul class="h-ul">
      <li class="left"><img src="static/img/set.png"/></li>
      <li class="cen">{{title}}</li>
      <li class="right" @click="toggle" ><img src="static/img/more.png"/></li>
    </ul>
    <sup class="dian"></sup>
    <div class="nav-menu" v-show="isA" id="menu"> <span class="arrow"></span>
      <ul>
        <li><a href="#/"><i class="home"></i>首页</a></li>
        <li><a href="#/cart"><i class="cart"></i>购物车</a><sup></sup></li>
        <li><a href="javascript:void(0);"><i class="message"></i>消息<sup></sup></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
        isA:false
    }
  },
  methods:{
     toggle(){
         this.isA=!this.isA;
         var Nav = document.getElementById("menu");
         if(this.isA==true){
           Nav.style.display="block";
         }else{
           Nav.style.display="none";
         }
     },
  },
  props:["title"]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{margin:0;padding:0}
  .posf {
    animation: headerFixed 0.5s ease-in-out;
    -webkit-animation: headerFixed 0.5s ease-in-out;
    position: fixed;
  }
  @keyframes headerFixed {
    0%{
      background-color: transparent;
      border-bottom-color: #eee;
    }
    100%{
      background-color: transparent;
      border-bottom-color: transparent;
    }
  }
  .header{ color:#000;font-size:0.8rem;width:100%;background: #f5f5f5;height:2rem;position: fixed;z-index: 999;border-bottom: 1px solid #eee}
  .header img{opacity: 0.65; width:1rem;height:1rem;display: inline-block;}
  .header .h-ul {display: flex;justify-content: space-between;width:100%;}
  .header .h-ul li{box-sizing: border-box;list-style: none;float: left;text-align: center;flex: 1;line-height: 2rem;}
  .header .h-ul .cen{flex: 4;color:#000;z-index: 99;font-size:16px;}
  .left{padding-top:10px;text-align: left;box-sizing: border-box}
  .right{ margin-right:0.2rem;font-size:1rem !important; padding-top:0.25rem;}
  .dian{display: inline;width: 0.35rem;height: 0.35rem;background-color: #ED5564;border: solid 0.05rem #FFF;
    border-radius: 100%;right: 0.6rem !important;top: 0.3rem !important;position: absolute;z-index: 99}
  .nav-menu{display: block;position: absolute;top: 1.2rem;right: 0.2rem;width: 5rem;}
  .nav-menu .arrow{opacity:0.55;display: block;float:right;width:0;height:0;margin-right:0.4rem;font-size:0;line-height: 0;border-width: 0.4rem;border-color: transparent transparent rgba(85,85,85,0.95) transparent;border-style:dashed dashed solid dashed}
  .nav-menu ul{background: rgba(85,85,85,0.95);clear: both;display: block;
  border-radius: 0.2rem;list-style: none}
  .nav-menu ul li{position: relative;z-index: 99;border-bottom: solid 0.05rem #999;}
  .nav-menu ul li a{display: block;height: 0.9rem;padding:0.5rem;font-size:0.6rem;line-height: 0.9rem;color:#fff}
  .nav-menu ul li a i.home{background: url("../../../static/img/home.png") no-repeat 50% 50%;display: inline-block;width: 0.72rem;
    height: 0.72rem;vertical-align: middle;margin-right: 0.3rem;
    background-size: 100%; }
  .nav-menu ul li a i.cart{background: url("../../../static/img/cart.png") no-repeat 50% 50%;display: inline-block;width: 0.72rem;
    height: 0.72rem;vertical-align: middle;margin-right: 0.3rem;
    background-size: 100%; }
  .nav-menu ul li a i.message{background: url("../../../static/img/message.png") no-repeat 50% 50%;display: inline-block;width: 0.72rem;
    height: 0.72rem;vertical-align: middle;margin-right: 0.3rem;
    background-size: 100%; }

</style>

<template>
  <div id="details">
    <div class="header-wrap1">
      <div class="header-l"> <a href="javascript:history.go(-1)"> <i class="back"></i> </a> </div>
      <ul class="header-nav">
        <li @click="change" :class="{ cur : !cur}">
             <a :href="'#/detail?id='+goodsId">商品</a>
        </li>
        <li @click="change" :class="{ cur : cur==1}">
          <a :href="'#/details?id='+goodsId" id="goodsBody">详情</a>
        </li>
        <li @click="change" :class="{ cur : cur==2 }">
            <a :href="'#/asscess?id='+goodsId"  id="goodsEvaluation" >评价</a>
        </li>
      </ul>
      <div class="header-r" @click="toggle"> <a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup style="display: inline;"></sup></a> </div>
    </div>
    <div class="nav-menu" v-show="isA" id="menu" > <span class="arrow"></span>
      <ul>
        <li><a href="#/"><i class="home"></i>首页</a></li>
        <li><a href="#/cart"><i class="cart"></i>购物车</a><sup></sup></li>
        <li><a href="#/user"><i class="cart"></i>我的商城</a><sup></sup></li>
        <li><a href="javascript:void(0);"><i class="message"></i>消息<sup></sup></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-header',
  data(){
      return{
          isA:false
      }
  },
  props:["goods-id","cur"],
  methods: {
    toggle(){
      this.isA = !this.isA;
      var Nav = document.getElementById("menu");
      if (this.isA == true) {
        Nav.style.display = "block";
      } else {
        Nav.style.display = "none";
      }
    },
    change(){
      this.cur = this.cur;
    },

  },
  mounted(){
      //console.log("g"+goods_id)
  }
}
</script>
<style>
  *{margin:0;padding:0}
  a{text-decoration: none;color:#000;}
  .header-wrap1{position: fixed;z-index: 999;top:0;left:0;background-color: #fff;width:100%;}
  .header-l {display: block;width: 1.95rem;height: 1.95rem; position: absolute;top: 0;left: 0;}
  .header-l a{position:relative;z-index:11;display: inline-block;width:1rem;height:1rem;padding:0.4775rem}
  .header-l a i.back {width: 80%;height: 80%;margin: 10%;background: url("../../../static/img/left.png") no-repeat 50% 50%;background-size: 100%;
    opacity: 0.75;display: block}
  .header-nav{display:inline-block;margin:0 auto;vertical-align: top;
    font-size:0;white-space: nowrap;list-style: none;padding-left:4.2rem;}
  .header-nav li{display: inline-block;vertical-align: top;text-align: center;height:1.95rem;}
  .header-nav li a {display: inline-block;text-decoration:none;padding: 0.1rem 0.25rem;margin: 0 0.5rem; font-size: 0.7rem;
    line-height: 1.825rem;color: #333;}
  .header-nav li.cur a{padding:0.1rem 0.05rem 0 0.05rem;color:#ED5564;border-bottom: solid 0.1rem #ED5564;font-size:0.8rem;font-weight: bold;margin:0 0.5rem;}

  .header-r{position:absolute;z-index:11;top:0rem;right:0;float:right;font-size:0;text-align: right}
  .header-r a{position:relative;z-index:11;display: inline-block;vertical-align: top;width:0.95rem;height:0.95rem;padding:0.5rem}
  .header-r a i.more{background: url(../../../static/img/more.png) no-repeat 50% 50%;background-size: 100%;opacity: 0.65;display: block;width:100%;height:100%}
  .header-r a sup{position: absolute;z-index: 11;top:0.3rem;right:0.3rem;width:0.3rem;height:0.3rem;background: #ed5564;border-radius: 100%}
  .header-r a.categroy {width: 1.275rem;height: 1.575rem; padding: 0.2rem 0.4rem 0.2rem 0.3rem;}
  .header-r a.categroy i {width: 100%;background: url("../../../static/img/categroy.png") no-repeat 50% 50%;
    background-size: 100%;opacity: 0.6;display: block;height:100%}
  .nav-menu{position: absolute;z-index:999;top: 1.2rem;right: 0.2rem;width: 5rem;}
  .nav-menu .arrow{opacity:0.55;display: block;float:right;width:0;height:0;margin-right:0.4rem;font-size:0;line-height: 0;border-width: 0.4rem;border-color: transparent transparent rgba(85,85,85,0.95) transparent;border-style:dashed dashed solid dashed}
  .nav-menu ul{background: rgba(85,85,85,0.95);clear: both;display: block;
    border-radius: 0.2rem;list-style: none}
  .nav-menu ul li{position: relative;z-index: 99;border-bottom: solid 0.05rem #999;}
  .nav-menu ul li a{display: block;height: 0.9rem;padding:0.5rem;font-size:0.6rem;line-height: 0.9rem;color:#fff}
  .nav-menu ul li a i {display: inline-block;width: 0.72rem;height: 0.72rem;vertical-align: middle;margin-right: 0.3rem;}
  .nav-menu ul li a i.home{background: url("../../../static/img/home.png") no-repeat 50% 50%;background-size: 100%; }
  .nav-menu ul li a i.cart{background: url("../../../static/img/cart.png") no-repeat 50% 50%;  background-size: 100%; }
  .nav-menu ul li a i.member{background: url("../../../static/img/member.png") no-repeat 50% 50%;  background-size: 100%; }
  .nav-menu ul li a i.message{background: url("../../../static/img/message.png") no-repeat 50% 50%;  background-size: 100%; }
</style>

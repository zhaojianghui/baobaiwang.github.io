<template>
  <div id="index">
    <div class="header-wrap">
      <div class="header-l">
        <a href="javascript:history.go(-1)">
          <i class="back"></i>
        </a>
      </div>
      <div class="header-inp">
        <a href="#/search">
          <i class="icon"></i>
          <span class="search-input" id="keyword" placeholder="红牛">红牛</span>
        </a>
      </div>
      <div class="header-r" @click="toggle"> <a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup style="display: inline;"></sup></a> </div>
    </div>
    <div class="nav-menu" v-show="isA" id="menu"> <span class="arrow"></span>
      <ul>
        <li><a href="#/"><i class="home"></i>首页</a></li>
        <li><a href="#/cart"><i class="cart"></i>购物车</a><sup></sup></li>
        <li><a href="#/user"><i class="cart"></i>我的商城</a><sup></sup></li>
        <li><a href="javascript:void(0);"><i class="message"></i>消息<sup></sup></a></li>
      </ul>
    </div>
    <my-list></my-list>
    <div class="loading" id="loading">
      <div>
        <p>
          <span></span>
        </p>
        <p>分类数据读取中...</p>
      </div>
    </div>
  </div>
</template>
<script>
  import MyList from "./list";
export default {
  components: {
      "my-list":MyList},
  name: 'index',
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
    }
  }
}
</script>


<style>
  *{margin:0;padding:0}
  a{text-decoration: none}
  body{font-size:12px;}
  .header-l {display: block;width: 1.95rem;height: 1.95rem; position: absolute;top: 0;left: 0;}
  .header-l a{position:relative;z-index:11;display: inline-block;width:1rem;height:1rem;padding:0.4775rem}
  .header-l a i.back {width: 80%;height: 80%;margin: 10%;background: url("../../../static/img/left.png") no-repeat 50% 50%;background-size: 100%;
    opacity: 0.75;display: block}
  .header-inp{position:relative;display:block;height:1.4rem;border:0.05rem solid #DEDEDE;border-radius: 0.2rem;margin:0.275rem 2.5rem 0 2rem;background: #fff;text-align: left}
  .header-inp .icon {float: left;vertical-align: top;width: 1rem;height: 1rem;margin: 0.2rem 0.1rem;
    background: url("../../../static/img/search.png") no-repeat 50% 50%;background-size: 70%;
    opacity: 0.3;}
  .header-inp .search-input{float: left;width:7.5rem;height:1rem;padding:0.2rem 0;font-size: 0.7rem;line-height:1rem;color:#BBB;vertical-align: top;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
  .header-r{position:relative;z-index:11;top:-1.7rem;right:0;float:right;font-size:0;text-align: right}
  .header-r a{position:relative;z-index:11;display: inline-block;vertical-align: top;width:0.95rem;height:0.95rem;padding:0.5rem}
  .header-r a i.more{background: url(../../../static/img/more.png) no-repeat 50% 50%;background-size: 100%;opacity: 0.65;display: block;width:100%;height:100%}
  .header-r a sup{position: absolute;z-index: 11;top:0.3rem;right:0.3rem;width:0.3rem;height:0.3rem;background: #ed5564;border-radius: 100%}
  .nav-menu{display: block;position: absolute;z-index:999;top: 1.2rem;right: 0.2rem;width: 5rem;}
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
  .loading{
    display: none;
    width: 100%;
    position: fixed;
    font-size: 12px;
    color: #666;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(248,248,248,0.95);
    z-index: 999;
    text-align: center;
  }
  .loading div{
    position: absolute;
    width: 120px;
    top: 50%;
    left: 30%;
    display: flex;
    align-items: center;
  }
  .loading div p:nth-of-type(1){
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.4em;
    font-size: 1em;
    width: 1em;
    height: 1em;
    text-align: left;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.1em rgba(58, 168, 237, .3);
  }

  .loading div p:nth-of-type(1) span{
    position: absolute;
    display: block;
    clip: rect(0, 1em, 1em, .5em);
    width: 1em;
    height: 1em;
    animation: spinner-circle 2s ease-in-out infinite;
    -webkit-animation: spinner-circle 2s ease-in-out infinite;
  }
  .loading div p:nth-of-type(1) span:after {
    position: absolute;
    clip: rect(0, 1em, 1em, .5em);
    width: 1em;
    height: 1em;
    content: '';
    animation: spinner-circle 2s ease-in-out infinite;
    -webkit-animation: spinner-circle 2s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.1em #3aa8ed;
  }
  @keyframes spinner-circle {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>

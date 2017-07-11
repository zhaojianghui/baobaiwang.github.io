<template>
  <div class="user">
    <v-header title="我的商城"></v-header>
    <div class="member-top" :style ="note">
      <div class="member-info">
        <div class="user-avatar">
          <img src="static/img/user.gif">
        </div>
        <div class="user-name">
        <span v-show="userName">{{ userName }}<sup>V0</sup></span>
          <a href="#/login">
          <span v-if="!userName">点击登录</span>
          </a>
        </div>
    </div>
      <div class="member-collect">
        <span><a href="#"><em>0</em><p>商品收藏</p></a> </span>
        <span><a href="#"><em>0</em><p>店铺收藏</p></a> </span>
        <span><a href="#"><em class="goods-browse" :style ="foot"></em><p>我的足迹</p></a></span>
      </div>
    </div>
    <div class="member-center">
      <dl class="mt5">
        <dt><a href="#/myorder">
          <h3><i class="mc-01 mc"><img src="static/img/mc_01.png"></i>我的订单</h3>
          <h5>查看全部订单<i class="arrow-r"><img src="static/img/arrow.png"></i></h5>
        </a></dt>
        <dd>
          <ul id="order_ul">
            <li><a href="#"><i class="cc-01"><img src="static/img/mcc_01.png"></i><p>待付款</p></a></li>
            <li><a href="#"><i class="cc-02"><img src="static/img/mcc_02.png"></i><p>待收货</p></a></li>
            <li><a href="#"><i class="cc-03"><img src="static/img/mcc_03.png"></i><p>待自提</p></a></li>
            <li><a href="#"><i class="cc-04"><img src="static/img/mcc_04.png"></i><p>待评价</p></a></li>
            <li><a href="#"><i class="cc-05"><img src="static/img/mcc_05.png"></i><p>退款/退货</p></a></li>
          </ul>
        </dd>
      </dl>
      <dl class="mt5">
        <dt><a href="#">
          <h3><i class="mc-02 mc"><img src="static/img/mc_02.png"></i>我的财产</h3>
          <h5>查看全部财产<i class="arrow-r"><img src="static/img/arrow.png"></i></h5>
        </a></dt>
        <dd>
          <ul id="asset_ul">
            <li><a href="#"><i class="cc-06"><img src="static/img/mcc_06_b.png"></i><p>预存款</p></a></li>
            <li><a href="#"><i class="cc-07"><img src="static/img/mcc_07_b.png"></i><p>充值卡</p></a></li>
            <li><a href="#"><i class="cc-08"><img src="static/img/mcc_08_b.png"></i><p>代金券</p></a></li>
            <li><a href="#"><i class="cc-09"><img src="static/img/mcc_09_b.png"></i><p>红包</p></a></li>
            <li><a href="#"><i class="cc-10"><img src="static/img/mcc_10_b.png"></i><p>积分</p></a></li>
          </ul>
        </dd>
      </dl>
      <dl class="mt5">
        <dt><a href="#/address">
          <h3><i class="mc-03 mc"><img src="static/img/mc_03.png"></i>收货地址管理</h3>
          <h5><i class="arrow-r"><img src="static/img/arrow.png"></i></h5>
        </a></dt>
      </dl>
      <dl style="border-top: solid 0.05rem #EEE;">
        <dt><a href="#/setting">
          <h3><i class="mc-04 mc"><img src="static/img/mc_04.png" style="opacity: 1;"></i>用户设置</h3>
          <h5><i class="arrow-r"><img src="static/img/arrow.png"></i></h5>
        </a></dt>
      </dl>
    </div>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import Footer from '../public/Footer'
  import Header from "../public/Header";
export default {
  name: 'v-user',
  data () {
    return {
      note: {
        backgroundImage: "url(" + require("../../../static/img/bg.png") + ")",
        backgroundRepeat: "no-repeat"
      },
      foot:{
        backgroundImage: "url(" + require("../../../static/img/footer.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "100%"
      },
      userName:''

    }
  },
  methods:{

  },
  components:{
    'my-header': Header,
    'my-footer': Footer
  },
  mounted(){
      var user =JSON.parse(localStorage.getItem('user') )
    if(!user) return
     this.userName = user.username;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{margin:0;padding:0;}
  html,body{margin:0;}
  .user{background: #eee;}
  .member-top{
    animation: changeBg 20s infinite;
    animation-name: changeBg;
    animation-duration: 20s;
    animation-timing-function: initial;
    animation-delay: initial;
    animation-iteration-count: infinite;
    animation-direction: initial;
    animation-fill-mode: initial;
    animation-play-state: initial;
    background:#ED5564;
    background-size: cover;
    text-align: center;
    width: 100%;
    height: 11rem;
    position: relative;
    z-index: 1;
  }
  @keyframes changeBg {
    0% {
      background-color: #ED5564;
    }
    10% {
      background-color: #FB6E52;
    }

    20% {
      background-color: #FFCE55;
    }
    30% {
      background-color: #A0D468;
    }
    40% {
      background-color: #48CFAE;
    }
    50% {
      background-color: #4FC0E8;
    }
    60% {
      background-color: #5D9CEC;
    }
    70% {
      background-color: #AC92ED;
    }
    80% {
      background-color: #EC87BF;
    }
    90% {
      background-color: #ED5564;
    }
  }

  .member-info {
    width: 12rem;
    height: 6rem;
    margin: -3.5rem 0 0 -6rem;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    animation: memberInfoDown 1000ms ease-in;
    -webkit-animation: memberInfoDown 1000ms ease-in;
  }
  @keyframes memberInfoDown{
    0% {
      top: -50%;
    }
    30% {
      top: -10%;
    }
    75% {
      top: 55%;
    }
    85% {
      top: 47%;
    }
    95% {
      top: 52%;
    }
    100% {
      top: 50%;
    }
  }

  .member-info .user-avatar {
    background-color: #FFF;
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    border-radius: 100%;
  }
  .member-info .user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  .member-info .user-name {
    color: #FFF;
  }
  .member-info .user-name a{
      color:#FFF;
    display: block;
    margin:5px 0 0 5px;
  }
  .member-info .user-name span {
    font-weight: lighter;
    font-size: 0.8rem;
    line-height: 1.2rem;
    height: 1.2rem;
    position: relative;
    z-index: 1;
    padding-right:0.4rem ;
  }
  .member-info .user-name sup {
    font-size: 12px;
    line-height: 0.6rem;
    background-color: #ED5564;
    display: block;
    height: 0.6rem;
    padding: 0 0.1rem;
    margin-left: 0.4rem;
    border-radius: 0.1rem;
    position: absolute;
    z-index: 1;
    top: 0.1rem;
    right: -1rem;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.15);
  }
  .member-collect {
    font-size: 0;
    height: 3rem;
    background: rgba(0,0,0,0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .member-collect span {
    display: inline-block;
    width: 33.33%;
    height: 2rem;
    padding: 0.5rem 0;
  }
  .member-collect span a{
    display: block;
    text-decoration: none;
  }
  .member-collect span em {
    font-weight: lighter;
    font-size: 0.9rem;
    color: #FFF;
    line-height: 1rem;
    text-align: center;
    vertical-align: top;
    display: inline-block;
    min-width: 1rem;
    height: 1rem;
    margin: 0 auto;
    font-style: normal;
  }
  .member-collect span p {
    font-size: 0.6rem;
    line-height: 1rem;
    color: #FFF;
    height: 1rem;
  }
  .member-center{
    background: #eee;
  }
  .member-center dl {
    background-color: #FFF;
    box-shadow: 0 1px 0 rgba(0,0,0,0.05);
  }
  .member-center .mt5 {
    margin-top:0.5rem !important;
  }
  .member-center dt {
    line-height: 0.9rem;
    display: block;
    height: 1rem;
    padding: 0.5rem 0.7rem 0.5rem 0;
    margin-left: 0.5rem;
    border-bottom: solid 0.05rem #EEE;
  }
  .member-center dt a{
    display:block;
    text-decoration: none;
    font-size: 0.55rem;
    color: #888;
  }
  .member-center dt h3 {
    font-size: 0.7rem;
    line-height: 1rem;
    color: #111;
    vertical-align: top;
    display: inline-block;
    height: 1rem;
    font-weight: normal;
  }
  .member-center dt h5 {
    font-size: 0.6rem;
    color: #999;
    float: right;
    line-height: 1rem;
    font-weight: normal;
  }
  .member-center i img{
    vertical-align: top;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
    opacity: .4;
  }
  .member-center .arrow-r img{
    width:12px;
    height:12px;
    display: inline-block;
    margin-top:3px;
    opacity: .6;
  }
  ul p{
    font-size: 0.55rem;
    color: #888;
    line-height: 1.6rem;
    height: 1.1rem;
  }
  .member-center dd {
    display: block;
    padding: 0.2rem 0;
  }
  ul{
    width:100%;
    font-size: 0;
  }
  ul li a{
    text-decoration: none;
  }
  .member-center dd ul li {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 20%;
    padding: 0.5rem 0 0.2rem 0;
  }
  .member-center .mt5 .mc img{
    width:14px;
    height:14px;
    vertical-align: top;
    display: inline-block;
    opacity: 1;
    margin-top:3px;
    margin-right: 5px;
  }
</style>

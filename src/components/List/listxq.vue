<template>
  <div id="listxq">
    <div class="header-wrap">
      <div class="header-l"> <a href="javascript:history.go(-1)"> <i class="back"></i> </a> </div>
      <div class="header-inp">
        <a href="#/search">
        <i class="icon"></i>
        <span class="search-input" id="keyword" placeholder="红牛">红牛</span>
        </a>
      </div>
      <div class="header-r" @click="toggle">
        <a href="#/index" class="categroy">
          <i></i>
        </a>
        <a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup style="display: inline;"></sup></a> </div>
    </div>
    <div class="nav-menu" v-show="isA" id="menu"> <span class="arrow"></span>
      <ul>
        <li><a href="#"><i class="home"></i>首页</a></li>
        <li><a href="#"><i class="cart"></i>购物车</a><sup></sup></li>
        <li><a href="#"><i class="member"></i>我的商城</a><sup></sup></li>
        <li><a href="javascript:void(0);"><i class="message"></i>消息<sup></sup></a></li>
      </ul>
    </div>
    <div class="goods-nav">
      <ul id="nav_ul">
        <li><a href="javascript:void(0);" :class="{current:current==0}" id="sort-default" @click="getProlist">综合排序</a></li>
        <li><a href="javascript:void(0);" :class="{current:current==1}" @click="preData">销量优先</a></li>
        <li><a href="javascript:void(0);" id="search-adv">筛选<i></i></a></li>
      </ul>
      <div class="browse-mode">
        <a href="javascript:void(0);" id="show_style">
          <span class="browse-list"></span>
        </a>
      </div>
    </div>
    <div class="pro-list">
      <ul class="lists">
        <li class="goods-item"  v-for="(ele,index) in listData" :key="index">
				<span class="goods-pic">
           <router-link :to="{path:'/detail',query:{id:ele.goods_id}}">
					<a href="#">
						<img :src="ele.goods_image_url">
					</a>
          </router-link>
				</span>
          <dl class="goods-info">
            <dt class="goods-name">
              <a href="javascript:;">
                <h4>{{ele.goods_name}}</h4>
                <h6></h6>
              </a>
            </dt>
            <dd class="goods-sale">
              <a href="#">
							<span class="goods-price">￥<em>{{ele.goods_price}}</em>
							</span>
                <span class="sale-type" id="sale" v-if="ele.xianshi_flag">降</span>
              </a>
            </dd>
            <dd class="goods-assist">
              <a href="#">
								<span class="goods-sold">销量
									<em>{{ele.goods_salenum}}</em>
								</span>
              </a>
              <div class="goods-store">
                <span class="mall">自营</span>
                <div class="sotre-creidt-layout" style="display: none;"></div>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="fix-block-r">
      <a href="#" class="browse-btn"><i></i></a>
      <a href="javascript:void(0);" class="gotop-btn gotop hide" id="goTopBtn">
        <i @click="scroll"></i></a>
    </div>
    <div class="loading" id="loading">
      <div>
        <p>
          <span></span>
        </p>
        <p>列表项数据读取中...</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'listxq',
  data () {
    return {
      isA:false,
      listData:[],
      current:0
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
    scroll(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
      return document.body.scrollTop||document.documentElement.scrollTop
    },
    getProlist(){
      this.current = 0;
      var Loading = document.getElementById("loading");
      Loading.style.display = "block";
      var id= this.$route.query.bid || this.$route.query.gid;
      if(id ==undefined) return;
      console.log(id);
      if(id == this.$route.query.gid){
        this.$http.get(`/mobile/index.php?act=goods&op=goods_list&gc_id=${id}&page=10&curpage=1&gc_id=${id}`)
          .then(res=>{
            console.log(res);
            this.listData = res.data.datas.goods_list;
            Loading.style.display = "none";
          })
      }else{
        this.$http.get(`/mobile/index.php?act=goods&op=goods_list&b_id=${id}&page=10&curpage=1&b_id=${id}`)
          .then(res=>{
            this.listData = res.data.datas.goods_list;
            Loading.style.display = "none";
          })
      }
    },
    preData(){
        this.current = 1;
      var Loading = document.getElementById("loading");
      Loading.style.display = "block";
      var id= this.$route.query.bid || this.$route.query.gid;
      if(id ==undefined) return;
      console.log(id);
      if(id==this.$route.query.gid){
        this.$http.get(`/mobile/index.php?act=goods&op=goods_list&gc_id=${id}&page=10&curpage=1&gc_id=${id}&key=1&order=2`)
          .then(res=>{
            this.listData = res.data.datas.goods_list;
            Loading.style.display = "none";
          })
      }else{
        this.$http.get(`/mobile/index.php?act=goods&op=goods_list&b_id=${id}&page=10&curpage=1&b_id=${id}&key=1&order=2`)
          .then(res=>{
            this.listData = res.data.datas.goods_list;
            Loading.style.display = "none";
          })
      }

    }

  },
  mounted(){
      this.getProlist();
    var Loading = document.getElementById("loading");
      var keyword = this.$route.query.keyword;
      if(!keyword ) return;
      this.$http.get(`/mobile/index.php?act=goods&op=goods_list&keyword=${keyword}&page=10&curpage=1&keyword=${keyword}`)
        .then(res=>{
          Loading.style.display = "none";
          if(res.data.datas.goods_list.length){

            this.listData = res.data.datas.goods_list;
          }else{
              alert("没有相关商品")
          }


        })
  }
}
</script>

<style scoped>
  *{margin:0;padding:0;}
  html{
    font-size:20px;
  }
  a{text-decoration: none}
  .header-wrap{position: fixed;z-index: 999;top:0;left:0;background-color: #fff;width:100%;}
  .header-l {display: block;width: 1.95rem;height: 1.95rem; position: absolute;top: 0;left: 0;}
  .header-l a{position:relative;z-index:11;display: inline-block;width:1rem;height:1rem;padding:0.4775rem}
  .header-l a i.back {width: 80%;height: 80%;margin: 10%;background: url("../../../static/img/left.png") no-repeat 50% 50%;background-size: 100%;
    opacity: 0.75;display: block}
  .header-inp{position:relative;display:block;height:1.4rem;border:0.05rem solid #DEDEDE;border-radius: 0.2rem;margin: 0.275rem 3.8rem 0 2rem;background: #fff;text-align: left}
  .header-inp .icon {float: left;vertical-align: top;width: 1rem;height: 1rem;margin: 0.2rem 0.1rem;
    background: url("../../../static/img/search.png") no-repeat 50% 50%;background-size: 70%;
    opacity: 0.3;}
  .header-inp .search-input{float: left;width:7.5rem;height:1rem;padding:0.2rem 0;font-size: 0.7rem;line-height:1rem;color:#BBB;vertical-align: top;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
  .header-r{position:absolute;z-index:11;top:0rem;right:0;float:right;font-size:0;text-align: right}
  .header-r a{position:relative;z-index:11;display: inline-block;vertical-align: top;width:0.95rem;height:0.95rem;padding:0.5rem}
  .header-r a i.more{background: url(../../../static/img/more.png) no-repeat 50% 50%;background-size: 100%;opacity: 0.65;display: block;width:100%;height:100%}
  .header-r a sup{position: absolute;z-index: 11;top:0.3rem;right:0.3rem;width:0.3rem;height:0.3rem;background: #ed5564;border-radius: 100%}
  .header-r a.categroy {width: 1.275rem;height: 1.575rem; padding: 0.2rem 0.4rem 0.2rem 0.3rem;}
  .header-r a.categroy i {width: 100%;background: url("../../../static/img/categroy.png") no-repeat 50% 50%;
    background-size: 100%;opacity: 0.6;display: block;height:100%}
  .nav-menu{display: block;position: absolute;z-index:999;top: 1.2rem;right: 0.2rem;width: 5rem;}
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
  .goods-nav {display: block;width: 100%;height: 1.95rem;background: rgba(255,255,255,0.95);
    border-bottom: solid 0.05rem #EEE;position: fixed;z-index: 22;top: 1.82rem;left: 0;right: 0;}
  .goods-nav ul{font-size:0;display: block;width:85%;float: left;list-style: none}
  .goods-nav ul li{width:30%;display: inline-block;vertical-align: top}
  .goods-nav ul li:nth-child(1){width:40%;vertical-align: top;display: inline-block;}
  .goods-nav ul li a{font-size:0.65rem;color:#5f5f5f;line-height: 1.95rem;height:1.95rem;text-align: center;display: block;text-decoration: none;}
  .goods-nav ul li a.current{color:#ED5564;}
  .goods-nav ul li a i{font-size: 0;vertical-align: middle;display: inline-block;width: 0;height:0;
    margin-left:0.2rem;line-height: 0;border-width:0.2rem;border-style: solid dashed dashed dashed;font-style: normal}
  .goods-nav ul li a.current i{border-color: #ED5564 transparent transparent transparent}
  .goods-nav ul li:nth-child(3) a i{border-color: gray transparent transparent transparent}
  .goods-nav .browse-mode{display: block;width:14.5%;float: right;border-left: solid 0.05rem #eee;}
  .goods-nav .browse-mode a {text-align: center;display: block;height: 1.95rem;}
  .goods-nav .browse-mode .browse-list {
    background: url("../../../static/img/list.png") no-repeat 60% 100%;
    background-size: 80%;
    display: block;
    height:24px;
    width:24px;
    padding:10%;
    margin:5% auto 5%;
    box-sizing: border-box;
  }
  .pro-list{
    background-color: #f5f5f5;
    margin-bottom:2rem;
    margin-top:4.5rem;
  }
  .pro-list ul{display: block;list-style: none}
  .pro-list .lists .goods-item{
    background-color: #fff;
    clear: both;
    position: relative;
    display: block;
  }
  .pro-list .lists .goods-pic{
    display: block;
    width:4.62rem;
    height:4.62rem;
    padding:0.38rem;
    position:absolute;
    z-index: 11;
    top:0;
    left:0;
  }
  .pro-list .lists .goods-pic a{
    width:100%;
    height:100%;
    display:block;
    color:#111;
  }
  .lists .goods-pic img{
    width:100%;
    height:100%;
    vertical-align: top;
    border:none;
  }
  .goods-info {
    display: block;
    height: 4.85rem;
    padding: 0.38rem 0.38rem 0 0;
    margin-left: 5.38rem;
    border-bottom: solid 0.05rem #EEE;
  }
  .goods-name {
    display: block;
    height: 2.4rem;
    overflow: hidden;
  }
  .goods-name h4 {
    font-size: 0.65rem;
    line-height: 0.8rem;
    height: 1.6rem;
    overflow: hidden;
    color:#000;
    font-weight: normal;
  }
  .goods-name h6 {
    font-size: 0.5rem;
    color: #999;
    line-height: 0.9rem;
    height: 0.9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .goods-sale {
    display: block;
    height: 0.9rem;
    padding: 0.2rem 0;
    overflow: hidden;
  }
  .goods-price {
    color: #EC5464;
    font-size: 0.6rem;
    line-height: 0.9rem;
    display: block;
    float: left;
  }
  .goods-price em {
    font-size: 0.8rem;
    line-height: 0.9rem;
    vertical-align: top;
    display: inline-block;
    font-style: normal;
  }
  .goods-assist {
    display: block;
    height: 1rem;
    padding-bottom: 0.2rem;
    overflow: hidden;
  }
  .goods-sold {
    font-size: 0.55rem;
    line-height: 1rem;
    color: #999;
    display: block;
    float: left;
    width: 40%;
    height: 1rem;
  }
  .goods-sold em {
    color: #000;
    vertical-align: middle;
    font-weight: 600;
  }
  .goods-store {
    float: right;
    font-size: 0.55rem;
    line-height: 1rem;
    text-align: right;
    width: 60%;
    height: 1rem;
  }
  .goods-store .mall {
    display: inline-block;
    padding: 0 0.1rem;
    font-size: 0.55rem;
    line-height: 0.7rem;
    color: #EC5464;
  }
  .sotre-creidt-layout {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .fix-block-r{
    width:1.9rem;
    position:fixed;
    z-index:5;
    right:0.5rem;
    bottom:2rem;
  }
  .fix-block-r a{
    display:block;
    width:1.95rem;
    height:1.95rem;
    background: rgba(255,255,255,0.85);
    border-radius: 100%;
    border:solid 0.05rem #eee;
    margin-top:0.5rem;
  }
  .fix-block-r a i {
    width: 100%;
    height: 100%;
    display: block;
    background: url("../../../static/img/browse.png") no-repeat 50% 50%;
    background-size: 60%;
    opacity: 0.5;
  }
  .fix-block-r a.gotop-btn i {
    background-image: url("../../../static/img/gotop.png");
    display: block;

  }
  .sale-type{
    float: right;
    width: 0.7rem;
    height: 0.7rem;
    margin: 0 0 0 0.1rem;
    vertical-align: top;
    text-align: center;
    font-size: 0.45rem;
    color: #FFF;
    line-height: 0.7rem;
    background-color: #EC5464;
    border-radius: 0.1rem;
  }
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
    animation: spinner-circle 1s ease-in-out infinite;
    -webkit-animation: spinner-circle 1s ease-in-out infinite;
  }
  .loading div p:nth-of-type(1) span:after {
    position: absolute;
    clip: rect(0, 1em, 1em, .5em);
    width: 1em;
    height: 1em;
    content: '';
    animation: spinner-circle 1s ease-in-out infinite;
    -webkit-animation: spinner-circle 1s ease-in-out infinite;
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
http://www.baobai.com/mobile/index.php?act=goods&op=goods_list&keyword=%E7%BA%A2%E7%89%9B&page=10&curpage=1&keyword=%E7%BA%A2%E7%89%9B
http://localhost:8080/mobile/index.php?act=goods&op=goods_list&b_id=%E7%BA%A2%E7%89%9B&page=10&curpage=1&b_id=%E7%BA%A2%E7%89%9B

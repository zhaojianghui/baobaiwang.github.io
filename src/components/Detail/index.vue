<template>
  <div id="shadow">
    <m-header :goods-id="goodsID"></m-header>
    <mt-swipe :auto="4000" class="lun">
      <mt-swipe-item v-for="(ele,index) in detailData" :key="index">
          <img :src="ele"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="round pd-collect"><i></i></div>
    <div class="goods-detail-cnt" v-if="messData.goods_info">
      <div class="goods-detail-name">
        <dl>
          <dt >{{messData.goods_info.goods_name}}</dt>
          <dd>{{messData.goods_info.goods_jingle}}</dd>
        </dl>
      </div>
      <div class="goods-detail-price">
        <dl>
          <dt>￥<em>{{messData.goods_info.goods_price}}</em></dt>
        </dl>
        <span class="sold">销量：{{messData.goods_info.goods_salenum}}件</span>
      </div>

      <div class="goods-detail-item">
        <div class="itme-name">送至</div>
        <div class="item-con">
          <a href="javascript:void(0);" id="get_area_selected">
            <dl class="goods-detail-freight">
              <dt><span id="get_area_selected_name">{{messData.goods_hair_info.area_name}}</span><strong id="get_area_selected_whether">{{messData.goods_hair_info.if_store_cn}}</strong></dt>
              <dd id="get_area_selected_content">{{messData.goods_hair_info.content}}</dd>
            </dl>
          </a>
        </div>
        <div class="item-more location"></div>
      </div>

      <div class="goods-detail-item" id="goods_spec_selected">
        <div class="itme-name">已选</div>
        <div class="item-con">
          <dl class="goods-detail-sel">
            <dt>
              <span>默认</span>
            </dt>
          </dl>
        </div>
        <div class="item-more"></div>
      </div>
      <div class="goods-detail-item">
        <div class="itme-name">服务</div>
        <div class="item-con">
          <dl class="goods-detail-contract">
            <dt>由“保百购物广场家电自营”销售和发货，并享受售后服务</dt>
            <dd>
              <span v-for="(ele,index) in conData" :key="index"><i><img :src="ele.cti_icon_url_60"></i>{{ele.cti_name}}</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="goods-detail-comment">
        <div class="title">
          <a id="goodsEvaluation1" href="javascript:void(0);">商品评价<span class="rate">好评率<em>100%</em></span><span class="rate-num">（{{messData.goods_info.evaluation_count}}人评价）</span><div class="item-more"></div></a>
        </div>
        <div class="comment-info">
          <dl v-for="(ele,index) in evData" :key="index">
            <dt>
            <span class="goods-raty"><i :class="'star'+ele.geval_scores"></i></span>
            <time>{{ele.geval_addtime_date}}</time>
            <span class="user-name">{{ele.geval_frommembername}}</span>
            </dt>
            <dd>{{ele.geval_content}}</dd>
          </dl>
        </div>
      </div>
      <div class="goods-detail-recom">
        <h4>店铺推荐</h4>
        <ul>
          <li v-for="(ele,index) in detData" :key="index">
            <a href="javascript:;" @click="regetData(ele.goods_id)">
              <div class="pic" @click="scroll"><img :src="ele.goods_image_url"></div>
              <dl>
                <dt>{{ele.goods_name}}</dt>
                <dd>￥<em>{{ele.goods_promotion_price}}</em></dd>
              </dl>
            </a>

          </li>
        </ul>
      </div>
      <div class="goods-detail-bottom"><a href="javascript:void(0);" id="goodsBody1">点击查看商品详情</a></div>
      <div class="goods-detail-foot">
        <div class="otreh-handle">
          <a href="javascript:void(0);" class="kefu"><i></i><p>客服</p></a>
          <a href="#/cart" class="cart"><i></i><p>购物车</p><span id="cart_count"><sup v-if="number">{{number}}</sup></span></a>
        </div>
        <div class="buy-handle">
          <span class="animation-up add-cart" @click="addCart">加入购物车</span>
          <a href="#/myorder"><span class="animation-up buy-now" @click="addCart">立即购买</span></a>
        </div>
      </div></div>
    <div class="loading" id="loading">
      <div>
        <p>
          <span></span>
        </p>
        <p>详情数据读取中...</p>
      </div>
    </div>
    <my-shadow id="shad" :mess-data="messData" :detail-data="detailData" :goods-id="goodsID" ></my-shadow>
  </div>
</template>

<script>
  import MHeader from "./header";
  import MyShadow from "./shadow";
  import qs from  'qs'
export default {
  components: {
    "my-shadow":MyShadow,
    "m-header":MHeader},
  name: 'pro-detial',
  data(){
    return {
      isA: false,
      detailData:[],
      detData:[],
      messData:{},
      conData:[],
      evData:[],
      goodsID:'',
      number:'1',
      key:''
    }
  },
  methods:{
    getdetailData(id){
      var Loading = document.getElementById("loading");
      Loading.style.display = "block";
      if(id ==undefined) return;
      this.$http.get(`/mobile/index.php?act=goods&op=goods_detail&goods_id=${id}&key=${this.key}`)
        .then(res=>{
          this.detailData=res.data.datas.goods_image.split(",");
          this.detData=res.data.datas.goods_commend_list;
          this.messData = res.data.datas;
          this.goodsID =res.data.datas.goods_info.goods_id;
          this.conData= res.data.datas.goods_info.contractlist;
          this.evData=res.data.datas.goods_eval_list;
          console.log(res.data.datas)
          console.log(res.data.datas.goods_info.goods_id)
          Loading.style.display = "none";
        })
    },
    scroll() {
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
      return document.body.scrollTop||document.documentElement.scrollTop
    },
    regetData(goods_id){
      this.getdetailData(goods_id)
    },
    addCart(){
        var Mask = document.getElementById("mask");
        Mask.style.display = "block";
    }
  },
  mounted(){
    var user =JSON.parse( localStorage.getItem('user') )
    console.log(user)
    if(user){
        this.key = user.key;
    }else{
      this.key='';
    }

      var id= this.$route.query.id;
      this.getdetailData(id)

    var params = qs.stringify({
      'key':this.key,
    });
    this.$http.post(`/mobile/index.php?act=member_cart&op=cart_count`,params,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
      .then(res=>{
        console.log(res.data.datas.cart_count)
        this.number = res.data.datas.cart_count
      })


    }




}
</script>

<style scoped>

  .lun{width:320px;height:320px;position: fixed;top:2rem;left:0;background: #eee;}
  .lun img{width:100%;height:100%;display: block}
  .round {
    margin: 0;
    position: absolute;
    z-index: 222;
    top: 15.75rem;
    right: 0.75rem;
    width: 1.35rem;
    height: 1.35rem;
    background: rgba(255,255,255,0.75);
    border: solid 0.05rem #EEE;
    border-radius: 100%;
  }
  .round i {
    display: block;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 60%;
    opacity: 0.75;
  }
  .round.pd-collect i {
    background-image: url(../../../static/img/favorite.png);
  }
  .goods-detail-cnt {
    background: #F5F5F5;
    position: relative;
    z-index: 1;
    margin-top: 18rem;
  }
  .goods-detail-name {
    display: block;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    background-color: #FFF;
    border-top: solid 0.05rem #EEE;
  }
  .goods-detail-name dt {
    display: block;
    font-size: 0.7rem;
    line-height: 0.85rem;
  }
  .goods-detail-name dd {
    margin-top: 0.15rem;
    font-size: 0.55rem;
    color: #777;
    line-height: 0.69rem;
  }
  .goods-detail-price {
    position: relative;
    z-index: 1;
    display: block;
    padding: 0 0.5rem;
    background-color: #FFF;
  }
  .goods-detail-price dl {
    display: inline-block;
  }
  .goods-detail-price dt {
    display: inline-block;
    font-size: 0.55rem;
    color: #DB4453;
    line-height: 1rem;
  }
  .goods-detail-price dt em {
    font-size: 1rem;
    font-style: normal;
  }
  .goods-detail-price .sold {
    position: absolute;
    z-index: 1;
    top: 0.25rem;
    right: 0.75rem;
    display: block;
    font-size: 0.55rem;
    line-height: 1rem;
    height: 1rem;
  }
  .goods-detail-item {
    position: relative;
    z-index: 1;
    padding: 0.5rem;
    background: #FFF;
    border-bottom: solid 0.05rem #EEE;
  }
  .goods-detail-item .itme-name {
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    left: 0.5rem;
    display: block;
    width: 1.6rem;
    height: 0.9rem;
    font-size: 0.6rem;
    color: #888;
    line-height: 0.9rem;
  }
  .goods-detail-item .item-con {
    display: block;
    margin-left: 1.6rem;
  }
  .goods-detail-item .item-con dl {
    display: block;
    line-height: 0.9rem;
  }
  .goods-detail-item .item-con dt {
    font-size: 0.6rem;
    color: #333;
  }
  .goods-detail-freight dt strong {
    color: #ED5564;
    margin-left: 0.5rem;
  }
  .goods-detail-item .item-con dd {
    font-size: 0.55rem;
    color: #888;
  }
  .goods-detail-freight dd {
    line-height: 0.9rem;
    margin-top: 0.2rem;
  }
  .item-more.location {
    background-image: url(../../../static/img/location.png);
    opacity: 0.55;
  }
  .item-more {
    position: absolute;
    z-index: -1;
    top: 0.5rem;
    right: 0.5rem;
    display: block;
    width: 0.8rem;
    height: 0.9rem;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
  }
  .goods-detail-item {
    position: relative;
    z-index: 1;
    padding: 0.5rem;
    background: #FFF;
    border-bottom: solid 0.05rem #EEE;
  }
  .goods-detail-item .itme-name {
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    left: 0.5rem;
    display: block;
    width: 1.6rem;
    height: 0.9rem;
    font-size: 0.6rem;
    color: #888;
    line-height: 0.9rem;
  }
  .goods-detail-item .item-con {
    display: block;
    margin-left: 1.6rem;
  }
  .goods-detail-item .item-con dl {
    display: block;
    line-height: 0.9rem;
  }
  .goods-detail-item .item-con dt {
    font-size: 0.6rem;
    color: #333;
  }
  .goods-detail-sel dt span {
    display: inline-block;
    height: 0.9rem;
    margin: 0 0.3rem 0.3rem 0;
    border: solid 0.05rem #CCC;
    font-size: 0.55rem;
    line-height: 0.9rem;
    padding: 0 0.2rem;
    color: #777;
  }
  .goods-detail-item .item-con dd {
    font-size: 0.55rem;
    color: #888;
  }
  .goods-detail-contract dd span {
    display: inline-block;
    height: 0.65rem;
    margin-right: 0.5rem;
    font-size: 0.55rem;
    font-weight: 600;
    color: #DB4453;
    line-height: 0.65rem;
  }
  .goods-detail-contract dd span i {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    margin-right: 0.1rem;
  }
  .goods-detail-contract dd span i img {
    width: 100%;
    height: 100%;
  }
  .item-more {
    position: absolute;
    z-index: -1;
    top: 0.5rem;
    right: 0.5rem;
    display: block;
    width: 0.8rem;
    height: 0.9rem;
    background: url("../../../static/img/arrow.png") no-repeat 50% 50%;
    background-size: 80%;
    opacity: 0.4;
  }
  .goods-detail-comment {
    background-color: #FFF;
    padding: 0 0.5rem;
    margin-top: 0.5rem;
    border-top: solid #EEE 0.05rem;
    border-bottom: solid #EEE 0.05rem;
  }
  .goods-detail-comment .title {
    display: block;
  }
  .goods-detail-comment .title a {
    display: block;
    position: relative;
    z-index: 1;
    height: 0.9rem;
    padding: 0.5rem 0;
    font-size: 0.6rem;
    line-height: 0.9rem;
    color: #888;
  }
  .goods-detail-comment .title span {
    font-size: 0.55rem;
    margin-left: 1rem;
    color: #ED5564;
  }
  .goods-detail-comment .title span em {
    font-size: 0.6rem;
    font-weight: 600;
    margin-left: 0.2rem;
    font-style: normal;
  }
  .goods-detail-comment .title .rate-num {
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    right: 1rem;
    color: #888;
    font-size: 0.55rem;
    margin-left: 0.55rem;
  }
  .goods-detail-comment .title .item-more {
    right: 0;
  }
  .goods-detail-comment dl {
    display: block;
    padding-bottom: 0.4rem;
    border-top: solid 0.05rem #EEE;
  }
  .goods-detail-comment dt {
    display: block;
    height: 0.9rem;
    padding: 0.4rem 0 0.2rem 0;
    line-height: 0.9rem;
    overflow: hidden;
  }
  .goods-detail-comment dt .goods-raty {
    display: block;
    float: left;
    width: 3rem;
    height: 0.5rem;
    font-size: 0;
  }
  .goods-detail-comment dt .goods-raty i {
    display: inline-block;
    height: 0.5rem;
    background: url(../../../static/img/star.png) repeat-x 0 0;
    background-size: contain;
  }
  .goods-detail-comment dt time {
    float: right;
    width: 3rem;
    text-align: right;
    color: #888;
    font-size: 0.55rem;
  }
  .goods-detail-comment dt .user-name {
    float: right;
    color: #555;
    font-size: 0.55rem;
  }
  .goods-detail-comment dd {
    display: block;
    font-size: 0.55rem;
    line-height: 0.7rem;
  }
  .goods-detail-comment dt .goods-raty i.star5 {
    width: 2.5rem;
  }
  .goods-detail-recom {
    background: #FFF;
    padding: 0 0 0 0.5rem;
    margin: 0.5rem 0;
    border:0.05rem solid #EEE;
    overflow: hidden;
  }
  .goods-detail-recom h4 {
    display: block;
    height: 0.9rem;
    padding: 0.4rem 0;
    font-size: 0.6rem;
    color: #888;
    line-height: 0.9rem;
  }
  .goods-detail-recom ul {
    font-size: 0;
    list-style: none;
  }
  .goods-detail-recom ul li {
    display: inline-block;
    width: 22%;
    margin: 0 3% 0.4rem 0;
  }
  .goods-detail-recom .pic {
    display: block;
    width: 3.225rem;
    height: 3.225rem;
    border: solid 0.05rem #EEE;
  }
  .goods-detail-recom .pic img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .goods-detail-recom dl {
    margin-top: 0.2rem;
  }
  .goods-detail-recom dt {
    display: block;
    overflow: hidden;
    height: 1.2rem;
    font-size: 0.5rem;
    line-height: 0.6rem;
    color: #777;
    margin-bottom: 0.2rem;
  }
  .goods-detail-recom dd {
    font-size: 0.45rem;
    color: #333;
  }
  .goods-detail-recom dd em {
    font-size: 0.55rem;
    font-style: normal;
  }
  .goods-detail-bottom {
    margin: 0.5rem 0 2.5rem 0;
    text-align: center;
    background-color: #f5f5f5;
  }
  .goods-detail-bottom a {
    display: inline-block;
    width: 100%;
    height: 1.48rem;
    margin: 0 auto;
    font-size: 0.6rem;
    line-height: 1rem;
    color: #999;
  }
  .goods-detail-foot{
    position: fixed;
    top:auto;
    left:0;
    right:0;
    bottom:0;
    z-index:11;
    height:2rem;
  }
  .goods-detail-foot .otreh-handle, .goods-option-foot .otreh-handle {
    float: left;
    width: 35%;
    font-size: 0;
  }
  .goods-detail-foot .otreh-handle a.kefu, .goods-option-foot .otreh-handle a.kefu {
    width: 44%;
    background:#fff;
  }
  .goods-detail-foot .otreh-handle a.cart, .goods-option-foot .otreh-handle a.cart {
    width: 55%;
    background:#fff;
    border-left: solid 0.05rem #DDD;
  }
  .goods-detail-foot .otreh-handle a, .goods-option-foot .otreh-handle a {
    position: relative;
    z-index: auto;
    display: inline-block;
    height: 1.95rem;
    text-align: center;
    color: #333;
    border-top: solid 0.05rem #DDD;
  }
  .goods-detail-foot .otreh-handle a.kefu i, .goods-option-foot .otreh-handle a.kefu i {
    background-image: url(../../../static/img/kefu.png);
  }
  .goods-detail-foot .otreh-handle a.cart i, .goods-option-foot .otreh-handle a.cart i {
    background-image: url(../../../static/img/carts.png);
  }
  .goods-detail-foot .otreh-handle a i, .goods-option-foot .otreh-handle a i {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    margin: 0.15rem auto 0.05rem auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    opacity: 0.65;
  }
  .goods-detail-foot .otreh-handle a p, .goods-option-foot .otreh-handle a p {
    display: block;
    height: 0.8rem;
    font-size: 0.55rem;
    line-height: 0.8rem;
  }
  .goods-detail-foot .otreh-handle a sup, .goods-option-foot .otreh-handle a sup {
    position: absolute;
    z-index: 1;
    top: 0.1rem;
    right: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    font-size: 0.45rem;
    line-height: 0.5rem;
    color: #ED5564;
    text-align: center;
    border: solid 0.05rem #ED5564;
    border-radius: 0.3rem;
  }
  .goods-detail-foot .buy-handle, .goods-option-foot .buy-handle {
    float: right;
    width: 65%;
    font-size: 0;
  }
  .goods-detail-foot .buy-handle span.add-cart, .goods-option-foot .buy-handle span.add-cart {
    float: right;
    width: 55%;
    background-color: #FB6E52;
  }
  .goods-detail-foot .buy-handle span.buy-now, .goods-option-foot .buy-handle span.buy-now {
    background-color: #ED5564;
  }
  .goods-detail-foot .buy-handle span, .goods-option-foot .buy-handle span {
    display: block;
    height: 2rem;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 2rem;
    color: #FFF;
    text-align: center;
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

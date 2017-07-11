<template>
  <div id="assess">
    <m-header :goods-id="goodsID" :cur="cur"></m-header>
    <div class="layout">
      <div class="tag-nav">
        <ul>
          <li class="selected"><a href="javascript:void(0);" data-state="">全部评价</a></li>
          <li><a href="javascript:void(0);" data-state="1">好评</a></li>
          <li><a href="javascript:void(0);" data-state="2">中评</a></li>
          <li><a href="javascript:void(0);" data-state="3">差评</a></li>
          <li><a href="javascript:void(0);" data-state="4">订单晒图</a></li>
          <li><a href="javascript:void(0);" data-state="5">追加评价</a></li>
        </ul>
      </div>
    </div>
    <div class="eval-list">
        <ul>
          <li v-for="(ele,index) in asscessData" :key="index">
            <div class="eval-user">
              <div class="user-avatar"><img :src="ele.member_avatar"></div>
              <span class="user-name">{{ele.geval_frommembername}}</span>
              <time>{{ele.geval_addtime_date}}</time>
            </div>
            <div class="goods-raty"><i :class="'star'+ele.geval_scores"></i></div>
            <dl class="eval-con">
              <dt>{{ele.geval_content}}</dt>
              <dd class="goods_geval">
              </dd>
            </dl>
            <div class="eval-explain" :v-if="ele.geval_explain">
              {{ele.geval_explain}}
            </div>
          </li>
        </ul>

    </div>
  </div>
</template>

<script>
  import MHeader from "./header";

export default {
  components: {
    "m-header":MHeader},
  name: 'my-asscess',
  data(){
      return {
          asscessData:[],
        goodsID:'',
        cur:2
      }
  },

  methods:{

  },
  mounted(){
    var url = window.location.href;
    var id = url.split("?")[1]
    var goodsID = id.split("=")[1];
    this.goodsID = goodsID;
    this.$http.get(`/mobile/index.php?act=goods&op=goods_evaluate&goods_id=${goodsID}&curpage=1&page=10`)
      .then(res=>{
          console.log(res.data);
        this.asscessData = res.data.datas.goods_eval_list;

      })


  }
}
</script>

<style>
  *{margin:0;padding:0}
  a{
    text-decoration: none;
  }
  html{
    font-size:20px;
  }
  .layout{
    display:block;
    margin-top:2rem;
    background-color: #F5F5F5;
  }
  .layout .tag-nav{
    background-color: #EEE;
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
  .layout .tag-nav ul{
    font-size:0;
    display: block;
    list-style: none;
  }
  .tag-nav ul li {
    display: inline-block;
    background-color: #AAA;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 0.2rem;
  }
  .tag-nav ul li.selected {
    background-color: #ED5564;
  }
  .tag-nav ul li a {
    display: block;
    height: 0.9rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.6rem;
    line-height: 0.9rem;
    color: #FFF;
  }
  .eval-list{
    background: #f5f5f5;
  }
  .eval-list li {
    padding: 0 0 0.5rem 0.5rem;
    margin-bottom: 0.25rem;
    background-color: #FFF;
  }
  .eval-list .eval-user {
    position: relative;
    z-index: 1;
    display: block;
    height: 2rem;
    border-bottom: solid #EEE 0.05rem;
  }
  .eval-list .eval-user .user-avatar {
    position: absolute;
    z-index: 1;
    top: 0.35rem;
    left: 0;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border: solid #EEE 0.05rem;
  }
  .eval-list .eval-user .user-avatar img {
    width: 100%;
    height: 100%;
  }
  .eval-list .eval-user .user-name {
    display: block;
    height: 1rem;
    margin: 0 0 0 2rem;
    padding: 0.5rem 0;
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .eval-list .eval-user time {
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    right: 0.5rem;
    height: 1rem;
    font-size: 0.55rem;
    color: #BBB;
    line-height: 1rem;
  }
  .eval-list .goods-raty {
    display: block;
    height: 0.5rem;
    padding: 0.5rem 0 0;
    font-size: 0;
  }
  .eval-list .goods-raty i {
    display: inline-block;
    height: 0.5rem;
    background: url(../../../static/img/star.png) repeat-x 0 0;
    background-size: contain;
  }
  .eval-list .goods-raty i.star5 {
    width: 2.5rem;
  }
  .eval-list .eval-con {
    padding: 0.2rem 0;
  }
  .eval-list .eval-con dt {
    display: block;
    min-height: 0.9rem;
    margin: 0.2rem 0 0.4rem 0;
    font-size: 0.6rem;
    line-height: 0.9rem;
  }
  .eval-list .eval-con dd {
    display: block;
    font-size: 0;
  }
  .eval-list .eval-explain {
    font-size: 0.6rem;
    color: #ed5564;
    line-height: 0.8rem;
    padding: 0.2rem 0;
  }
</style>

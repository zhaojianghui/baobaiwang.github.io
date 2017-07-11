<template>
  <div id="shadow">
    <div id="mask" class="mask up" v-if="messData">
      <div class="mask-bg"></div>
      <div class="mask-block">
        <div class="mask-tip"><i></i>点击此处返回</div>
        <div class="mask-top goods-options">
          <div class="goods-pic">
            <img :src="detailData[0]">
          </div>
          <dl>
            <dt>{{messData.goods_info && messData.goods_info.goods_name}}</dt>
            <dd class="goods-price">
              ￥<em>{{messData.goods_info && messData.goods_info.goods_price}}</em>
              <span class="activity">
				限时折扣
			</span>
              <span class="goods-storage">库存：{{messData.goods_info && messData.goods_info.goods_storage}}件</span>
            </dd>
          </dl>
          <a href="javascript:void(0);" class="mask-close"><i @click="closeShadow"></i></a>
        </div>
        <div class="mask-rolling" id="product_roll">
          <div class="goods-stock" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
            <dl class="spec">
              <dt spec_id="">
                口味：
              </dt>
              <dd>
                <a href="javascript:void(0);" specs_value_id="304" class="current">
                  香甜味
                </a>
                <a href="javascript:void(0);" specs_value_id="305">
                  咸辣味
                </a>
                <a href="javascript:void(0);"  specs_value_id="306">
                  苦涩味
                </a>
              </dd>
            </dl>
 </div>
        </div>
        <div class="goods-value">购买数量
          <div class="value-box">
		<span class="minus">
			<a href="javascript:void(0);">&nbsp;</a>
		</span>
            <span>
			<input type="text" pattern="[0-9]*" class="buy-num" id="buynum" value="1">
		</span>
            <span class="add">
			<a href="javascript:void(0);">&nbsp;</a>
		</span>
          </div>
        </div>
        <div class="goods-foot">
          <div class="otreh-handle">
            <a href="javascript:void(0);" class="kefu">
              <i></i>
              <p>客服</p>
            </a>
            <a href="#/cart" class="cart">
              <i></i>
              <p>购物车</p>
              <span id="cart_count1"><sup v-if="number">{{number}}</sup></span>
            </a>
          </div>
          <div class="buy-handle ">
            <a href="javascript:void(0);" class="add-cart" id="add-cart" @click="addcar">加入购物车</a>
            <a href="#/myorder" class="buy-now" id="buy-now">立即购买</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import qs from  'qs'
export default {
  name: 'my-shadow',
  data(){
    return {
        cartData:[],
        number:'1'
    }
  },
  props:{
    messData:Object,
    detailData:Array,
    goodsId:String,

  },


  methods: {
    closeShadow(){

          var Mask = document.getElementById("mask");
          Mask.style.display="none";
    },
    addcar(){
        console.log(this)
      var params = qs.stringify({
        'key':this.key,
        'goods_id':this.goodsId,
        'quantity':1
      });
        this.$http.post(`/mobile/index.php?act=member_cart&op=cart_add`,params,{
            headers:{
              'Content-Type':'application/x-www-form-urlencoded'
            }
        })
          .then(res=>{
              console.log(res.data)
          })
      var params = qs.stringify({
        'key':this.key,
      });
      this.$http.post(`/mobile/index.php?act=member_cart&op=cart_count`,params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          console.log(res.data.datas.cart_count);
          this.number = res.data.datas.cart_count;
          alert("添加购物车成功！")
        })

    },
  },
  mounted(){
    var user =JSON.parse( localStorage.getItem('user') )
    if(user){
        this.key=user.key
    }else{
        this.key=''
    }
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
<style>
  *{margin:0;padding:0}
  a{text-decoration: none;color:#000;}
  .mask{
    position:fixed;
    z-index: 9999;
    top:0;
    left:0;
    right:0;
  }
  #mask{
    display: none;
  }
  .mask.up{
    display:block;
    bottom:0;
    animation: optionBlockUp 0.5s ease-in-out;
    -webkit-animation: optionBlockUp 0.5s ease-in-out;
  }
  @keyframes optionBlockUp {
    0% {
      display: none;
      bottom: -100%;
    }
  100% {
    display: block;
    bottom: 0;
  }
  }
  .mask-bg {
    display: block;
    position: absolute;
    z-index: 21;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.65);
  }
  .mask-block {
    display: block;
    position: absolute;
    z-index: 22;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 12rem;
    background: #FFF;
  }
  .mask-tip {
    position: absolute;
    z-index: 1;
    top: -1.2rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 600;
    line-height: 0.9rem;
    color: #FFF;
    text-shadow: 0 0 0.5rem rgba(0,0,0,0.5);
  }
  .mask-tip i {
    background: url(../../../static/img/down.png) no-repeat 50% 50%;
    background-size: 75%;
    width: 0.8rem;
    height: 0.9rem;
    display: inline-block;
    vertical-align: top;
    margin-right: 0.1rem;
  }
  .goods-options {
    min-height: 3rem;
  }
  .mask-top {
    position: relative;
    z-index: 1;
    display: block;
    padding: 0.5rem;
    border-bottom: solid 0.05rem #EEE;
  }
  .goods-options .goods-pic{
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    left: 0.5rem;
    width: 3rem;
    height: 3rem;
    background: #FFF;
  }
  .goods-options .goods-pic img{
    width:100%;
    height:100%;
    vertical-align: top;
    border:none;
  }
  .goods-options dl{
    margin-left: 4rem;
  }
  .goods-options dt{
    font-size: 0.6rem;
    line-height: 0.75rem;
    margin: 0.2rem 0.6rem 0.4rem 0;
  }
  .goods-options .goods-price{
    height: 1rem;
    font-size: 0.55rem;
    color: #DB4453;
    font-weight: 600;
    line-height: 1rem;
  }
  .goods-options .goods-price em{
    font-size: 0.66rem;
    font-style: normal;
  }
  .goods-price .activity {
    display: inline-block;
    height: 0.7rem;
    vertical-align: top;
    padding: 0 0.1rem;
    margin: 0.14rem 0 0 0.1rem;
    font-size: 0.45rem;
    line-height: 0.7rem;
    font-weight: lighter;
    color: #FFF;
    background-color: #ED5564;
    border-radius: 0.1rem;
  }
  .goods-storage {
    display: block;
    float: right;
    font-size: 0.5rem;
    line-height: 1rem;
    color: #888;
  }
  .mask-close {
    position: absolute;
    z-index: 1;
    top: -0.6rem;
    right: 0;
    background: #FFF;
    width: 0.9rem;
    height: 0.9rem;
    padding: 0.15rem;
    border-radius: 100%;
  }
  .mask-close i {
    display: block;
    width: 100%;
    height: 100%;
    background: url(../../../static/img/close.png) no-repeat 50% 50%;
    background-size: 100%;
    opacity: 0.5;
  }
  .mask-rolling {
    min-height: 1.9rem;
    max-height: 12rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .goods-stock {
    padding: 0.25rem 0.5rem;
  }
  .goods-stock dt {
    display: block;
    height: 0.9rem;
    padding: 0.1rem 0;
    font-size: 0.6rem;
    color: #888;
    line-height: 0.9rem;
  }
  .goods-stock dd {
    display: block;
    font-size: 0rem;
  }
  .goods-stock dd a {
    display: inline-block;
    height: 0.9rem;
    padding: 0.25rem 0.5rem;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 0.55rem;
    color: #888;
    line-height: 0.9rem;
    background: #FFF;
    border: solid 0.05rem #BBB;
    border-radius: 0.15rem;
  }
  .goods-stock dd a.current {
    padding: 0.28rem 0.53rem;
    color: #FFF;
    background: #ED5564;
    border: none;
  }
  .goods-stock dd a:first-child {
     margin-left: 0;
   }
  .goods-value{
    display: block;
    height: 1.2rem;
    padding: 0.5rem;
    margin-bottom: 2rem;
    line-height: 1.2rem;
    font-size: 0.6rem;
    color: #999;
    border-top: solid 0.05rem #EEE;
  }
  .value-box{
    display: inline-block;
    float: right;
    font-size: 0;
    border: solid 0.05rem #CCC;
    border-radius: 0.2rem;
  }
  .value-box span.minus {
    background-color: #FAFAFA;
    border-radius: 0.2rem 0 0 0.2rem;
  }
  .value-box span {
    display: inline-block;
    vertical-align: top;
    line-height: 0;
  }
  .value-box span a {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.4rem;
    opacity: 0.65;
  }
  .value-box span.minus a {
    background: url(../../../static/img/minus.png)  no-repeat;
    background-size: 100%;
  }
  .value-box span.add {
    background-color: #FAFAFA;
    border-radius: 0 0.2rem 0.2rem 0;
  }
  .value-box span.add a {
    background: url(../../../static/img/add.png)  no-repeat;
    background-size: 100%;
  }
  .value-box span .buy-num {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0;
    font-size: 0.6rem;
    font-weight: lighter;
    line-height: 1.3rem;
    text-align: center;
    border: solid #CCC;
    border-width: 0 0.05rem;
    border-radius: 0;
  }
  .goods-foot {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .goods-foot .otreh-handle {
    float: left;
    width: 35%;
    font-size: 0;
  }
  .goods-foot .otreh-handle a.kefu {
    width: 44%;
  }
  .goods-foot .otreh-handle a.cart {
    width: 55%;
    border-left: solid 0.05rem #DDD;
  }
  .goods-foot .otreh-handle a {
    position: relative;
    z-index: auto;
    display: inline-block;
    height: 1.95rem;
    text-align: center;
    color: #333;
    border-top: solid 0.05rem #DDD;
  }
  .goods-foot .otreh-handle a i {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    margin: 0.15rem auto 0.05rem auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    opacity: 0.65;
  }
  .goods-foot .otreh-handle a.kefu i {
     background-image: url(../../../static/img/kefu.png);
   }
  .goods-foot .otreh-handle a.cart i {
    background-image: url(../../../static/img/carts.png);
  }
  .goods-foot .otreh-handle a p {
    display: block;
    height: 0.8rem;
    font-size: 0.55rem;
    line-height: 0.8rem;
  }
  .goods-foot .buy-handle {
    float: right;
    width: 65%;
    font-size: 0;
  }
  .goods-foot .buy-handle a {
    display: block;
    height: 2rem;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 2rem;
    color: #FFF;
    text-align: center;
  }
  .goods-foot .buy-handle a.add-cart {
    float: right;
    width: 55%;
    background-color: #FB6E52;
  }
  .goods-foot .buy-handle a.buy-now {
    background-color: #ED5564;
  }
  .goods-foot .otreh-handle a sup {
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
</style>

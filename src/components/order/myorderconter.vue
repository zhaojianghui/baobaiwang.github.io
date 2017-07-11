<template>
  <div class="myorder-conter">
    <form >
      <input type="text" placeholder="输入商品标题或订单号进行搜索">
      <span></span>
    </form>
    <ul class="title">
      <li class="title-item active">全部</li>
      <li class="title-item">代付款</li>
      <li class="title-item">待收货</li>
      <li class="title-item">待自提</li>
      <li class="title-item">待评价</li>
    </ul>
    <div class="cartlistall" v-for="(ele, index) in orderData">
      <div class="cart-title">
        <span></span>
        <span>{{ele.store_name}}</span>
        <span>代付款</span>
      </div>
      <ul class="cart-wrap">
        <li class="cart-item">
          <img :src="ele.order_list['0'].extend_order_goods['0'].goods_image_url" >
          <div class="cart-shopping">
              <div class="cart-shoptop">{{ele.order_list['0'].extend_order_goods['0'].goods_name}}</div>
              <div class="cart-shopbtm">
                <span class="del" >¥{{ele.order_list['0'].extend_order_goods['0'].goods_price}}</span>
                <span>x{{ele.order_list['0'].extend_order_goods['0'].goods_num}}</span>
              </div>
          </div>
        </li>
      </ul>
      <div class="myorder-footer">
          <p>共 <span>{{ele.order_list['0'].extend_order_goods['0'].goods_num}}</span>件商品，合计 <span>¥{{ele.order_list['0'].order_amount}}</span> <span>(含运费¥{{ele.order_list['0'].shipping_fee}})</span></p>
          <p> <span>取消订单</span> </p>
      </div>
      <button class="payorder">订单支付（¥ <span>{{ele.order_list['0'].order_amount}}</span>）</button>
    </div>

  </div>
</template>

<script>
  var qs=require('qs');
export default {
  name: 'myorderconter',
  data(){
      return {
          orderData:[]
      }
  },
  mounted(){
    var key=JSON.parse(localStorage.getItem("user"));
    if(!key){
        this.$router.push({name:"login"})
        return
    }
    if(key.key){
      var params = qs.stringify({
        'key':key.key,
        'state_type':'',
        'order_key':''
      });
      this.$http.post('/mobile/index.php?act=member_order&op=order_list&page=10&curpage=1',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          console.log(res)
          this.orderData=res.data.datas.order_group_list
        })
    }

  }
}
</script>

<style scoped>
  .cartlistall{
    margin-bottom: 15px;
  }
  .myorder-conter{
    position: fixed;
    width: 100%;
    left: 0;
    top: 84px;
    bottom: 0;
    overflow-y: auto;
    background: rgb(245,245,245);
  }
  .myorder-conter::-webkit-scrollbar{
    display: none;
  }
 form{
   display: flex;
   position: fixed;
   align-items: center;
   left: 0;
   top: 44px;
   width: 100%;
   height:39px ;
   background: #fff;
   border-bottom: 1px solid #eee;
 }
 form input{
   width: 250px;
   height: 30px;
   background: #eee;
   margin:4px 15px;
   border-radius: 6px;
   font-size: 12px;
   color:#999 ;
   text-indent: 1em;
 }
 form span{
   display: block;
   width: 20px;
   height: 20px;
   background: url("../../../static/img/search1.png")no-repeat;
   background-size: 100% 100%;
 }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display:flex;
    font-size: 13px;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .title li{
    margin: 0 13px;
  }
  .title .title-item.active{
    color:#ED5564 ;
    border-bottom: 2px solid #ED5564;
  }
  .cart-title{
    width: 100%;
    height:38px ;
    line-height: 38px;
    background: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .cart-title span{
    display: block;
    float: left;
    font-size: 14px;

  }

  .cart-title span:nth-of-type(1){
    margin:10px 5px 0 22px;
    width: 16px;
    height: 18px;
    background: url("../../../static/img/store.png") no-repeat;
    background-size: 100% 100%;
  }
  .cart-title span:nth-of-type(3){
    color: #ED5564;
    padding-left: 70px;
  }
  .cart-wrap{
    width: 100%;
    background: #fff;
    font-size: 12px;
  }
  .cart-item{
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .cart-item img{
    width:54px ;
    height: 54px;
    border: 1px solid #ccc;
    margin-right: 15px;
    margin-left: 20px;
  }
  .cart-shopping{
    display: flex;

  }
  .cart-shopping span{
    display: block;
  }
  .cart-shoptop{
    width: 60%;
    height:54px;
    line-height: 14px;
    margin-right: 20px;
  }


  .cart-shopbtm{
    display: flex;
    flex-direction: column;
    width: 40px;
    height:28px ;
    text-align: right;
    line-height: 14px;
  }
  .cart-shopbtm span{
    display: block;
  }
  .cart-shopbtm span:nth-of-type(1){
    width: 40px;
    height: 14px;
    color: #000;
    font-weight: 600;
    float: left;

  }
.myorder-footer{
  width: 100%;
  height: 76px;
  line-height: 36px;
  font-size: 12px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
  .myorder-footer p{
    width: 100%;
    text-align: right;
    color: #000;
  }
  .myorder-footer p:nth-of-type(1) span:nth-of-type(2){
    color: #ED5564;
  }
  .myorder-footer p:nth-of-type(1) span:nth-of-type(3){
    margin-right: 28px;
    color: #999;
  }
  .myorder-footer p:nth-of-type(2){
     width: 100%;
     height: 39px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
     border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .myorder-footer p:nth-of-type(2) span{
      display: block;
      width: 62px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #666;
      margin-right: 30px;
  }
  .payorder{
    width: 90%;
    height:36px ;
    line-height: 36px;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: #ED5564;
    margin: 10px 5%;
  }
  .payorder span{
    font-weight: 700;
  }
</style>

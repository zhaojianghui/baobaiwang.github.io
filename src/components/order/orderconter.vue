<template>
  <div class="conter">
      <div class="conter-address">

         <div class="address-middle">
           <div class="address-left"></div>
           <div v-if="orderData.address_info">
               <p>
                 <span >{{orderData.address_info.true_name}}</span>
                 <span>{{orderData.address_info.mob_phone}}</span>
               </p>
               <p>
                 <span >{{orderData.address_info.area_info}}</span>
                 <span>{{orderData.address_info.address}}</span>
               </p>
           </div>
         </div>
        <div class="address-right">></div>
      </div>
      <div class="pay">
        <p class="pay-left">
          <span></span>
          <span>支付方式</span>
        </p>
        <p class="pay-right">
          <span>在线付款</span>
          <span> ></span>
        </p>
      </div>
    <div class="pay">
      <p class="pay-leftone">
        <span></span>
        <span>发票信息</span>
      </p>
      <p class="pay-right">
        <span v-if="orderData.inv_info">{{orderData.inv_info.content}}</span>
        <span> ></span>
      </p>
    </div>
    <div class="cartlist">
          <div class="cart-title">
                <span></span>
                <span v-if="orderData.store_cart_list">{{orderData.store_cart_list["2"].store_name}}</span>
          </div>
          <ul class="cart-wrap">
              <li class="cart-item" v-for="(ele,index) in shopData" :key="index">
                  <img :src="ele.goods_image_url" >
                  <div class="cart-shopping">
                      <div class="cart-shoptop">
                        <span> {{ele.goods_name}} </span>

                      </div>
                      <div class="cart-shopbtm">
                        <span>¥{{ele.goods_price}}</span>
                        <span> <i>{{ele.goods_num}}</i> 件</span>
                      </div>
                  </div>
              </li>
          </ul>
          <div class="pay-btm">
            <div class="yunfei">
              <span>物流配送</span>
              <span>运费 <i>5.00</i> 元</span>
            </div>
            <input type="text" v-model="val">
            <div class="total"><p>本店合计 <span>¥{{orderData.order_amount}}</span> 元 </p></div>
          </div>
    </div>

    <div class="order-footer">
      <p>合计总金额：<span>¥{{orderData.order_amount}}</span></p>
      <button class="commit">提交订单</button>
    </div>
  </div>
</template>

<script>
  var qs = require('qs')
export default {
  name: 'orderconter',
  data(){
    return {
      val:'',
      state:null,
      valone:'',
      valtwo:'',
      valthree:'',
      valfour:'',
      address_id:'',
      arr:[],
      orderData:[],
      shopData:[]
    }
  },
  mounted(){
      var user=JSON.parse(localStorage.getItem("user"))
      if(!user)return;
      var key=user.key;
      var cart_id=this.$route.query.cart_id;
      var id=cart_id.split(',')
      var idone=id.splice(0,1)
      var idtwo=id.join(',')
      var params = qs.stringify({
        'key':key,
        'cart_id':idtwo,
        'ifcart':'1',
        'address_id':''
      })
      this.$http.post('/mobile/index.php?act=member_buy&op=buy_step1',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          this.orderData=res.data.datas
          this.shopData=res.data.datas.store_cart_list["2"].goods_list
          console.log(res)
        })
    }
}
</script>

<style scoped>
  i{
    font-style: normal;
    font-weight: 600;
  }
.conter{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 40px;
  top: 44px;
  font-size: 14px;
  background: rgb(245,245,245);
  border-top: 1px solid #ccc;
  overflow-y: auto;
}

  .conter::-webkit-scrollbar{
    display: none;
  }
  .conter-address{
    width: 100%;
    height:56px ;
    background: #fff;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .address-left{
    width: 16px;
    height: 18px;
    background: url("../../../static/img/location.png")no-repeat;
    background-size: 100% 100%;
    margin-right: 5px;

  }
  .address-middle{
    font-size: 13px;
    display: flex;
    margin: 0 20px;
  }
  .address-right{
    margin: 0 20px;
  }
  .pay{
    width: 100%;
    height: 36px;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 12px;
  }
.pay p{
  display: flex;
  margin: 0 20px;
  align-items: center;
}
  .pay-left span:nth-of-type(1){
    display: block;
    width: 14px;
    height: 14px;
    background: url("../../../static/img/mcc.png")no-repeat;
    background-size: 100% 100%;
    margin: 5px;
  }
.pay-right span:nth-of-type(1){
  color: #000;
  font-weight: 600;
}
.pay-leftone span:nth-of-type(1){
  display: block;
  width: 14px;
  height: 14px;
  background: url("../../../static/img/mcc2.png")no-repeat;
  background-size: 100% 100%;
  margin: 5px;
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
.cart-wrap{
  width: 100%;
  background: #fff;
  font-size: 12px;
}
.cart-item{
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.cart-item img{
  width:54px ;
  height: 54px;
  border: 1px solid #ccc;
  margin:0 5px 0 22px;
}
.cart-shopping{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.cart-shopping span{
  display: block;
}
.cart-shoptop{
  width: 100%;
  height:28px;
}
.cart-shoptop span:nth-of-type(1){
  width: 100%;
  height: 14px;
  line-height: 14px;
  float: left;
}
.cart-shoptop span:nth-of-type(2){
  width: 100%;
  height: 14px;
  color:#999 ;
}
.cart-shopbtm{
  width: 70%;
  display: flex;
  height:20px ;
  line-height: 24px;
}
.cart-shopbtm span{
  display: block;
  width: 58%;

}
.cart-shopbtm span:nth-of-type(1){
  color: #DB4453;
}
.cart-shopbtm span:nth-of-type(2){
  color: #000;
  text-align: right;
  font-weight: 600;
}
.yunfei{
  width: 100%;
  height: 36px;
  line-height: 36px;
  display: flex;
  background: #fff;
  justify-content: space-between;
}
.pay-btm{
  width: 100%;
  background: #fff;
}
.yunfei span{
  margin: 0 20px;
}
  input{
    width: 90%;
    height: 30px;
    background:#FAFFBD ;
    margin: 0 5%;
  }
  .total{
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: right;

  }
  .total p{
    padding-right: 20px;
  }
  .total span{
    font-size: 13px;
    color: #DB4453;
    font-weight: 600;
  }
  .order-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    background: #fff;
    border-top: 1px solid #ccc;
    z-index: 222;
  }
  .order-footer p span{
    color: #ED5564;
    font-size: 20px;
    font-weight: 700;
    padding: 0 10px;
  }
  .order-footer button{
    width: 80px;
    height: 40px;
    background:#ED5564 ;
    text-align: center;
    line-height: 40px;
    border: none;
    color: #fff;
  }
</style>

<template>
  <div>
  <div class="cartlist" v-show="key">
        <ul  v-for="(ele,sIndex) in shopData" :key="sIndex" :class="`cart-wrap wrap${sIndex}`">
          <div class="cart-title" >
            <span></span>
            <span >{{ele.store_name}}</span>
          </div>
          <li class="cart-item" v-for="(data,index) in ele.goods" :key="index">
              <input type="checkbox" class="cart-checked" :checked="data.checked" @click="changeChecked($event,index,sIndex)"/>
              <img :src="data.goods_image_url" >
              <div class="cart-shopping">
                  <div class="cart-shoptop">
                      <span> {{data.goods_name}} </span>
                      <span class="del" @click="show(index,sIndex)"></span>
                  </div>
                  <div class="cart-shopbtm">
                      <span>¥{{data.goods_price}}</span>
                      <span>限时折扣</span>
                      <button class="jian" @click="changeData(-1,index,sIndex,data.cart_id)">-</button>
                      <input type="text" v-model="data.goods_num">
                      <button class="add" @click="changeData(1,index,sIndex,data.cart_id)">+</button>
                  </div>
                  <div class="order-footer" >
                    <i>
                      <input type="checkbox" class="cart-checkall" :checked="!state" @click="changeState">
                    </i>
                    <p>  <span>合计总金额：</span> <span>¥{{allPrice}}</span></p>
                    <button :class="{commit:true,active:allPrice}" @click="gotoorder">确认信息</button>
                  </div>
              </div>
              <div class="filter" >
                <div>
                  <p>确认删除吗？</p>
                  <p>
                    <span @click="changeData(0,index,sIndex,data.cart_id)">确定</span>
                    <span @click="close(index,sIndex)">取消</span>
                  </p>
                </div>
              </div>
          </li>

        </ul>

  </div>
    <div class="cart-footer" v-if="!key">
      <p>结算购物车中的商品，需先登录商城</p>
      <p>
        <button ><a href="#/login">登录</a></button>
        <button><a href="#/register">注册</a></button>
      </p>
    </div>
    <div class="loading">
        <div>
            <p>
              <span></span>
            </p>
            <p>购物车数据读取中...</p>
        </div>
    </div>
  </div>
</template>

<script>
var qs=require('qs')
export default {
  name: 'cartlist',
  data(){
      return{
          state:true,
          cartData:[],
          shopData:[],
          quantity:'',
          key:''

      }
  },
  computed:{
    allPrice(){
      let priceAll = 0;
      //console.log("com")
      this.shopData.forEach(function (ele) {
        //console.log(ele.checked)
        ele.goods.forEach(function (e) {
          if(e.checked){
            priceAll+=e.goods_price*e.goods_num;
          }
        })

      })
      return priceAll
    }
  },
  methods:{
    changeData(type,index,sIndex,cart_id){
      console.log(sIndex,index)
      var num=this.shopData[sIndex].goods[index].goods_num;

      if(type){
        num=type+ this.shopData[sIndex].goods[index].goods_num*1;
        num=num<1?1:num;
        this.shopData[sIndex].goods[index].goods_num=num;
        this.getquantity(num,cart_id)
      }
      if(type==0){
            this.getDel(cart_id)
            this.shopData[sIndex].goods.splice(index,1)
            this.close(index,sIndex)

      }
    },
    show(index,sIndex){
      var  cartWrap=document.querySelector(`.wrap${sIndex}`)
      console.log(cartWrap)
      var filters=document.querySelectorAll(`.wrap${sIndex} .filter`)
      console.log(filters)
      filters[index].style.display="block";

    },
    close(index,sIndex){
      var  cartWrap=document.querySelector(`.wrap${sIndex}`)
      console.log(cartWrap)
      var filters=document.querySelectorAll(`.wrap${sIndex} .filter`)
      console.log(filters)
      filters[index].style.display="none";
    },
    changeState(){
        var _this=this;
        var arr=JSON.parse(JSON.stringify(this.shopData))
        if(this.state){
          arr.forEach((ele)=>{
            ele.goods.forEach(function (ele) {
              ele.checked =true;
              _this.shopData=arr;
              _this.state=false;
              console.log(_this.shopData)
            })
          })
        }else{
          arr.forEach((ele)=>{
            ele.goods.forEach(function (ele) {
              ele.checked =false;
              _this.shopData=arr;
              _this.state=true;
              console.log(_this.shopData)
            })
          })
        }
    },
    gotoorder(){
      var cart_id,num,id;
      this.shopData.forEach(function (ele) {
        ele.goods.forEach(function (e) {
          if(e.checked){
            cart_id=e.cart_id;
            num=e.goods_num;
            id+=(','+cart_id+'|'+num)
          }
        })

      })
      this.$router.push({name:'sureorder',query:{cart_id:id}})
    },
    getquantity(num,cart_id){

      var loading=document.querySelector(".loading")
      loading.style.display="block"
      var params = qs.stringify({
        'key':this.key,
        'cart_id':cart_id,
        'quantity':num
      });
      this.$http.post('/mobile/index.php?act=member_cart&op=cart_edit_quantity',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          loading.style.display="none"
          console.log(res)
        })
    },
    getDel(cart_id){
        var loading=document.querySelector(".loading")
        loading.style.display="block"
        var params = qs.stringify({
          'key':this.key,
          'cart_id':cart_id,
        });
        this.$http.post('/mobile/index.php?act=member_cart&op=cart_del',params,{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
          .then(res=>{
            loading.style.display="none"
          })
    },
    changeChecked(e,index,sIndex){
        console.log(index,sIndex)
      var _this=this;
          var arr =JSON.parse(JSON.stringify( this.shopData))
          this.shopData=arr;
          var cur = false;
          arr[sIndex].goods[index].checked = e.target.checked;
          arr.forEach( function (ele) {
              ele.goods.forEach(function (elem) {
                if(!elem.checked){
                  console.log(elem)
                  cur=true;
               }
              })
          })
            this.state=cur;

    }
  },
  mounted(){
    var key= JSON.parse( localStorage.getItem("user") )
    if(!key) return;
    this.key = key.key;
      var params = qs.stringify({
        'key':this.key
      });
      this.$http.post('/mobile/index.php?act=member_cart&op=cart_list',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          //actions==>mutations去处理
          this.cartData=res.data.datas;
          var arr=res.data.datas.cart_list
          arr.forEach((ele)=>{
            ele.goods.forEach(function (ele) {
              ele.checked =false
            })

          })
          this.shopData = arr;
          //console.log(this.shopData)
        })


  }
}
</script>

<style scoped>
 .cartlist{
   width: 100%;
   position: fixed;
   left: 0;
   top: 44px;
   bottom: 40px;
   background: rgb(245,245,245);
   overflow-y: auto;
   z-index: -10;

 }
 .cartlist::-webkit-scrollbar{
   display: none;
 }
 input[type="checkbox"]:checked {
   border-color: #ED5564;
   background-color: #ED5564;
 }
 input[type="checkbox"] {
   position: relative;
   width: 0.75rem;
   height: 0.75rem;
   background-color: #F5F5F5;
   border: 0.05rem solid #CCC;
   -webkit-border-radius: 50%;
   border-radius: 50%;
   vertical-align: middle;
 }
 input[type="checkbox"]:checked:after {
   content: '';
   position: absolute;
   left: 0.1rem;
   top: 0.14rem;
   width: 0.4rem;
   height: 0.2rem;
   border-left: 0.065rem solid #fff;
   border-bottom: 0.065rem solid #fff;
   -webkit-transform: rotate(-45deg);
   -ms-transform: rotate(-45deg);
   transform: rotate(-45deg);
 }
 .filter{
   display: none;
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0,0.6);
   z-index: 111111111111111;
 }
 .filter div{
   width:202px ;
   height: 95px;
   font-size: 15px;
   margin: 60% 0 0 20%;
   background: #fff;
 }
 .filter div p:nth-of-type(1){
   color: #000;
   width: 100%;
   height: 49px;
   text-align: center;
   line-height: 49px;
   border-bottom: 1px solid #eee;
 }
 .filter div p:nth-of-type(2){
   color: #0080FF;
   width: 100%;
   height: 49px;
 }
 .filter div p:nth-of-type(2) span{
   text-align: center;
   display: block;
   float: left;
   width: 49%;
   height: 18px;
   line-height: 18px;
   margin-top: 15px;

 }
 .filter div p:nth-of-type(2) span:nth-of-type(1){
   border-right: 1px solid #eee;
   margin-top: 15px;
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
.cart-checkall{
   -webkit-appearance: none;
   width:15px ;
   height: 15px;
   border: 0;
   -webkit-border-radius:50%;
   border-radius: 50%;
   margin: 10px;
   background:rgb(245,245,245) ;
   border: 1px solid #ccc;
   float: left;
 }

 .cart-title span:nth-of-type(1){
   margin:10px ;
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
  }
 .cart-checked{
   width:15px ;
   height: 15px;
   -webkit-appearance: none;
   -webkit-border-radius:50%;
   border-radius: 50%;
   margin: 10px;
   background:rgb(245,245,245) ;
   border: 1px solid #ccc;
 }
 .cart-item img{
   width:54px ;
   height: 54px;
   border: 1px solid #ccc;
   margin-right: 5px;
 }
 .cart-shopping{
   width: 65%;
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
   width: 80%;
   height: 28px;
   line-height: 14px;
   float: left;
 }
 .cart-shoptop span:nth-of-type(2){
   width: 15px;
   height: 15px;
   background: url("../../../static/img/del.png")no-repeat;
   background-size: 100% 100%;
   float: left;
   margin-left:10px ;
 }
  .cart-shopbtm{
    display: flex;
    align-items: center;
    height:20px ;
    line-height: 24px;
  }
 .cart-shopbtm span{
   display: block;
   color:#ED5564 ;
 }
 .cart-shopbtm span:nth-of-type(1){
   width:36px ;
   height: 14px;
   line-height: 14px;
   text-align: center;
   font-weight: 700;
   margin-right: 5px;
 }
 .cart-shopbtm span:nth-of-type(2){
   background: #ED5564;
   color: #fff;
   width: 52px;
   height: 14px;
   text-align: center;
   line-height: 14px;
   border-radius:2px;
   margin-right: 20px;
 }
 .cart-shopbtm  button{
    width:24px;
    height:24px;
    border: none;
    background: #FAFAFA;
    border: 1px solid #ccc;
 }
 .cart-shopbtm  button:nth-of-type(1){
   border-radius: 5px 0 0 5px;
 }
 .cart-shopbtm  button:nth-of-type(2){
   border-radius: 0 5px 5px 0;
 }
 .cart-shopbtm  input{
   width:24px;
   height:22px;
   text-align: center;
   line-height: 22px;
   border: none;
   background: #Fff;
   border-bottom: 1px solid #ccc;
   border-top: 1px solid #ccc;
 }
  .cart-footer{
    width: 100%;
    height:100px ;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
  }
 .cart-footer a{
   color:#333;
 }
 .cart-footer p:nth-of-type(1){
   width: 100%;
   height: 52px;
   line-height: 52px;
   text-align: center;
   line-height: 52px;
   color: #ED5564;
   font-size: 12px;
 }
 .cart-footer p:nth-of-type(2){
   width: 100%;
   height: 48px;
 }
 .cart-footer p:nth-of-type(2) button{
   width: 58px;
   height: 32px;
   background: #fff;
   border:1px solid #ccc;
   font-size: 12px;

 }
 .cart-footer p:nth-of-type(2) button:nth-of-type(1){
   margin: 0 10px 0 90px;
 }
 .order-footer{
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 39px;
   line-height: 39px;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 12px;
   background: #fff;
   border-top: 1px solid #ccc;
 }
 .order-footer i{
   display: block;
   width: 50px;
   height: 39px;
   margin-right: 45px;
 }
 .order-footer p:nth-of-type(1){
   display: flex;
   width: 150px;
   height: 39px;
 }
 .order-footer p:nth-of-type(1) span:nth-of-type(1){
   width: 80px;
   height: 39px;
 }
 .order-footer p:nth-of-type(1) span:nth-of-type(2){
   color: #ED5564;
   font-size: 20px;
   font-weight: 700;
 }
 .order-footer button{
   width: 80px;
   height: 39px;
   background:#ccc ;
   text-align: center;
   line-height: 39px;
   border: none;
   color: #fff;
 }
 .order-footer .commit.active{
   background:#ED5564 ;
   color: #fff;
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

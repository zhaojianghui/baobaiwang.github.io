<template>
  <div class="pro-list" v-if="indexData[22]">
    <div class="n-tit"><p>{{indexData[22].goods.title}}</p></div>
    <ul>
      <li v-for="(ele,index) in indexData[22].goods.item" :key="index">
          <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">
            <a href="javascript:;">
          <img :src="ele.goods_image" alt="">
          <p>{{ele.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
            </a>
          </router-link>
      </li>

    </ul>
    <ul>
      <li v-for="(ele,index) in indexData[23].goods.item" :key="index">
        <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">
        <a href="javascript:;">
          <img :src="ele.goods_image" alt="">
          <p>{{ele.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
        </a>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-for="(ele,index) in indexData[24].goods.item" :key="index">
        <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">
        <a href="javascript:;">
          <img :src="ele.goods_image" alt="">
          <p>{{ele.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
        </a>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-for="(ele,index) in indexData[25].goods.item" :key="index">
        <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">
        <a href="javascript:;">
          <img :src="ele.goods_image" alt="">
          <p>{{ele.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
        </a>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-for="(ele,index) in indexData[26].goods.item" :key="index">
        <router-link :to="{path:'/detail',query: {id:ele.goods_id}}">
        <a href="javascript:;">
          <img :src="ele.goods_image" alt="">
          <p>{{ele.goods_name}}</p>
          <div>
            <span class="new-price">¥{{ele.goods_promotion_price}}</span>
            <del class="old-price">¥{{ele.goods_price}}</del>
            <span class="s-bg">限时</span>
          </div>
        </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pro-list',
  props:{
      indexData:Array,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-tit {
  width: 100%;
  height:36px;
  padding:0 10px;
  overflow: hidden;
  background: #eee;
}
.n-tit p{
  padding-left: 10px;
  margin-top:10px;
  border-left:3px solid #ED5564;
  font-size: 12px;
}
  .pro-list ul{
     overflow: hidden;
   }
.pro-list ul li{
  float: left;
  width: 47%;
  margin:10px 1% 0 2%;
  background: #fff;
  padding-bottom: 4px;
}
.pro-list ul li a{
  color:#333;
  font-size: 12px;
}
.pro-list ul li:nth-child(2n){
  margin:10px 2% 0 1%;
}
.pro-list ul li img{
  width: 100%;
}
.pro-list ul li p{
  width: 100%;
  height:32px;
  padding:0 4px;
}
.pro-list ul li div{
  padding-left: 4px;
}
.pro-list ul li div{
  padding-left: 4px;
}
.pro-list ul li div .new-price{
  font-size: 13px;
  color: #db4453;
}
.pro-list ul li div .old-price{
  color: #999;
  padding:0 5px;
}
.pro-list ul li div .s-bg{
  background: #FF8E31;
  color: #fff;
  padding: 2px 2px 0;
  border-radius:2px;
}

</style>

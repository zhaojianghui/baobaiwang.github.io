<template>
  <div class="header">
    <div class="swiper-wrap" style="height:170px">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(ele,index) in swiperData" :key="index">
        <router-link :to="{path:'/active',query: {id:ele.data}}">
         <img :src=" ele.image " alt="" >
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="search">
      <div class="text">
        <span></span>
        <a href="#/search"><input type="text" placeholder="红牛"></a>
      </div>
      <div class="s-right">
        <a href="###">
            <span ></span>
            <p>消息</p>
        </a>
      </div>
    </div>
    <div class="h-search" ref="h-search">
      <div class="logo"></div>
      <div class="h-text">
        <span class=""></span>
        <a href="#/search">
        <input type="text" placeholder="红牛">
        </a>
      </div>
      <div class="s-mes"></div>
    </div>
  </div>
</template>


<script>
  //
export default {

  name: 'l-header',
  props:{
    indexData:Array,
    swiperData:Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  height:170px;
  box-sizing: border-box;
  overflow: hidden;
}
.swiper-wrap{
  width: 100%;
  height:170px;
}
  .mint-swipe img{
    width: 100%;
  }
  .search{
    position: absolute;
    left: 0;
    top:20px;
    width: 100%;
    height:36px;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .search .text{
    width: 82vw;
    height:28px;
    margin-top:4px;
    line-height: 28px;
    background: #fff;
    border-radius: 3px;
  }
  .search .text input{
    width: 150px;
    height: 28px;
    float: left;
    border:0;
    color:#bbb;
    outline: none;
  }
  .search .text span {
    float: left;
    width: 14px;
    height:14px;
    margin:7px 6px;
    background: url(./img/search.png) no-repeat;
    background-size: 100% 100%;
  }
  .s-right a{
    display: block;
    width: 44px;
    height:36px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .s-right a span{
    width: 20px;
    height:20px;
    background: url(./img/mes.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.8;
  }
.h-search{
  box-sizing: border-box;
  opacity: 0;
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height:36px;
  padding:0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F8F8F8;
}
.h-search .logo{
  width: 60px;
  height:30px;
  background: url(./img/logo.png) no-repeat;
  background-size: 100% 100%;
}
.h-search .h-text{
  width: 61vw;
  height:28px;
  line-height: 28px;
  border:1px solid #ccc;
  border-radius: 6px;
  background: #fff;
}
.h-search .h-text input{
  width: 150px;
  height: 26px;
  float: left;
  border:0;
  color:#bbb;
  outline: none;
}
.h-search .h-text span {
  float: left;
  width: 14px;
  height:14px;
  margin:7px 6px;
  background: url(./img/search.png) no-repeat;
  background-size: 100% 100%;
}
.h-search .s-mes {
  width: 24px;
  height:24px;
  background: url(./img/mes1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.5;
}



</style>

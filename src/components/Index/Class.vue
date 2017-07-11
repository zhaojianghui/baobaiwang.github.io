<template>
  <div class="class-type">
      <ul>
        <li>
          <a href="#/list">
            <span></span>
            <p>分类</p>
          </a>

        </li>
        <li>
          <a href="#/cart">
            <span></span>
            <p>购物车</p>
          </a>
        </li>
        <li>
          <a href="#/user">
            <span></span>
            <p>我的商城</p>
          </a>

        </li>
        <li>
          <a href="javascript:;">
            <span></span>
            <p>每日签到</p>
          </a>
        </li>
      </ul>
  </div>
</template>


<script>
export default {

  name: 'class-type',


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class-type{
  width:100%;
  height:90px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
}
.class-type ul {
    width: 100%;
    height:90px;
  padding: 6px 0 ;
}
.class-type ul li{
    float: left;
    width: 25%;
    height: 100%;
}
.class-type ul li a{
  display: block;
  text-align: center;
  height:100%;
  color:#555;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.class-type ul li a span{
  display: block;
  width: 48px;
  height:48px;
  border-radius: 50%;
}
.class-type ul li:nth-child(1) a span{
  background: #FB6E52 url(./img/c1.png) no-repeat 50% 50%;
  background-size: 50% 50%;
}
.class-type ul li:nth-child(2) a span{
  background: #48CFAE url(./img/c2.png) no-repeat 50% 50%;
  background-size: 50% 50%;
}
.class-type ul li:nth-child(3) a span{
  background: #4FC0E8 url(./img/c3.png) no-repeat 50% 50%;
  background-size: 50% 50%;
}
.class-type ul li:nth-child(4) a span{
  background: #AC92ED url(./img/c4.png) no-repeat 50% 50%;
  background-size: 50% 50%;
}



</style>

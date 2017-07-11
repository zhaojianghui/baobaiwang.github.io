<template>
  <div class="header">
    <div >
      <slot name="left"></slot>
    </div>
    <div >{{title}}</div>
    <div >
      <a href="javascript:;" @click="changeState" class="clickright"><img src="./img/more.png" ></a>
      <ul>
        <p></p>
        <li>
          <span class="icon"></span>
          <a href="#/"><span >首页</span></a>
        </li>
        <li>
          <slot name="right"></slot>
          <a href="#/cart"><span >{{forch}}</span></a>
        </li>
        <li>
          <span class="icon"></span>
          <a href="#/user"><span>我的商城</span></a>
        </li>
        <li>
          <span class="icon"></span>
          <span>消息</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props:["title","forch"],
    data(){
      return {state:true}
    },
    methods:{
      changeState(){
        var ulAt=document.querySelector('ul')
        if(this.state){
          ulAt.style.display="block";
          this.state=false;
        }else{
          ulAt.style.display="none";
          this.state=true;
        }

      }
    }
  }
</script>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    width: 100%;
    height: 44px;
    background: rgb(245,245,245);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
  }
  .header div:nth-of-type(1) img{
    width: 16px;
    height: 16px;
  }
  .header div:nth-of-type(2){
    color: black;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header div:nth-of-type(3){
    position:relative;
  }
  .header div:nth-of-type(3) img{
    width: 16px;
    height: 16px;
  }
  .header ul{
    display: none;
    width:100px ;
    height: 155px;
    position: absolute;
    right: -8px;
    top: 30px;
    background: rgba(85,85,85,0.9);
    font-size: 12px;
    color:#fff ;
    border-radius:5px ;
    z-index: 1000;
  }
  .header ul p:nth-of-type(1){
    width: 0px;
    height: 0px;
    position: absolute;
    left: 75px;
    top: -16px;
    border-width: 8px;
    font-size: 0;
    border-style: dashed dashed solid dashed;
    border-color:transparent transparent rgba(85,85,85,0.95) transparent ;
  }
  .header ul li{
    width: 100%;
    height: 25%;
    border-bottom: 1px solid #999;
    display: flex;
    align-items: center;
  }
  .header ul li span{
    display: block;
    float: left;
  }
  .header ul li:nth-of-type(4){
    border-bottom: none;
  }
  .header ul li .icon{
    width:15px ;
    height: 15px;
    margin: 0 8px;
  }
  .header ul li:nth-of-type(1) .icon{
    background: url(./img/home.png) no-repeat;
    background-size:100% 100%;
  }

  .header ul li:nth-of-type(3) .icon{
    background: url(./img/member.png) no-repeat;
    background-size:100% 100%;
  }
  .header ul li:nth-of-type(4) .icon{
    background: url(./img/msg.png) no-repeat;
    background-size:100% 100%;
  }

</style>

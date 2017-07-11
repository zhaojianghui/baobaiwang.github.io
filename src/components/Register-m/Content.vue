<template>
  <div class="content">

    <ul class="r-type">
      <li>
         <a href="#/register"><span></span>普通注册</a>
      </li>
      <li  class="active">
        <a href="javaScript:;"><span></span>手机注册</a>
      </li>
    </ul>
    <div class="c-form">
      <div class="txt">
        <label for="text">
          <p>手&nbsp;机&nbsp;号</p>
          <input id="text" type="text" placeholder="请输入手机号" v-model="phone">
        </label>

      </div>
      <div class="txt">
        <label for="pswd">
          <p>验&nbsp;证&nbsp;码</p>
          <input id="pswd" type="password" placeholder="请输入4位验证码" v-model="yzm">
          <div class="p-yzm"
          >
            <img @click="getYzmPic " :src="src" alt="">
           </div>
        </label>

      </div>

      </div>
    <div class="remember">
      <div class="r-left">
        <input id="checkbox" type="checkbox" v-model="wrap">
        <label for="checkbox" >同意 <a href="javaScript:;">用户注册协议</a></label>
      </div>
    </div>
    <div class="sub-btn">
      <input type="button" @click="toRegister" :class=" {active1 :phone&&yzm&&wrap}" value="获取验证码">

    </div>
    <div class="m-sm">
      绑定手机不收任何费用，一个手机只能绑定一个账号，若需修改或解除已绑定的手机，请登录商城PC端进行操作。
    </div>
    <div class="filter" ref="filter"></div>
  </div>
</template>

<script>
import Header from './Header'
var qs =require('qs')
export default {
  name: 'index',
  data () {
    return {
      phone:'',
      yzm:'',
      pic:'',
      wrap:false,
      src:'http://www.baobai.com/mobile/index.php?act=seccode&op=makecode&k=5c4fcb37188ccd19f17e88ed9c9e76e5&t=0.537895873778161'
    }
  },
  components:{
    'l-header':Header,
  },
  methods:{
      getYzmPic(){
          this.$http.get('/mobile/index.php?act=seccode&op=makecodekey')
            .then(res=>{
                var data = res.data.datas.codekey
              console.log(data);
                this.pic=data;
                this.src=`http://www.baobai.com/mobile/index.php?act=seccode&op=makecode&k=${data}&t=0.537895873778161`
            })
      },
      toRegister(){
          if(!this.phone || !this.yzm ||!this.wrap) return
          var filt = this.$refs['filter']
          this.$http.get(`/mobile//index.php?act=connect&op=get_sms_captcha&type=1&phone=${this.phone}&sec_val=${this.yzm}&sec_key=${this.pic}`)
            .then(res=>{
                console.log(res)
              if(res.data.datas.error){
                console.log(res.data.datas.error)
                filt.style.display = 'block';
                filt.innerHTML = res.data.datas.error
              }else{
                filt.style.display = 'block';
                filt.innerHTML = "获取成功";
                window.location.href='#/register-next'
              }
              setTimeout(()=>{
                filt.style.display = 'none';
              },1000)
            })
      }
  },
  mounted(){
      this.getYzmPic()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: absolute;
  left: 0;
  top:44px;
  width: 100%;
}
.r-type {
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #eee;
  background: #fff;
}
.r-type li{
  float: left;
  font-size: 14px;
  color: #333;
  width: 50%;
  height: 44px;
  display: flex;
  justify-content: center;
}
.r-type li a{
  color: #333;
}
.r-type li span{
  display: inline-block;
  width: 20px;
  height:20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 4px;
}
.r-type li:nth-child(1) span{
  background: url(./img/reg1.png) no-repeat center;
  background-size: 80% 80%;
}
.r-type li:nth-child(2) span{
   background: url(./img/reg2.png) no-repeat center;
  background-size: 80% 80%;
}
.r-type .active a {
  float: left;
  color: #ED5564;
  border-bottom: 2px solid #ED5564;
}
.c-form{
  background: #fff;
  margin-top:15px;
}
  .txt{
    position: relative;
    width: 94%;
    margin:0 3%;
    height:44px;
    line-height: 44px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }
  .txt label p{
    float: left;
    width: 60px;
    font-size: 14px;
    text-align: right;
    color: #444;
  }
.txt label input{
  float: left;
  width: 200px;
  height:44px;
  border:0;
  outline: none;
  padding-left: 10px;
}
.p-yzm {
  width: 88px;
  height:30px;
  position: absolute;
  right: 10px;
  top:6px;
}
.p-yzm img{
  width: 100%;
  height:100%;
  display: block;
}
.remember{
    height:56px;
    padding:20px 40px;

  }
.remember .r-left{
  float:left;
  font-size:14px;
}
.remember .r-left label{
  color: #666;
}
.remember .r-left label a{
  color: #4B89DC;
}
.remember .r-left input{
  width: 15px;
  height:15px;
  vertical-align: middle;
  border-radius: 50%;
  border:1px solid #CCC;
  margin-top:-2px;
  outline: none;
}
  .sub-btn{
    width: 100%;
    height:40px;
    padding: 0 5%;
    box-sizing: border-box;
  }
.sub-btn input{
  width: 100%;
  height:100%;
  border:0;
  outline: 0;
  font-size:18px;
  color: #555 ;
  background: #eee;
  border-radius:6px;
}
.m-sm {
  width: 100%;
  padding: 20px 30px;
  font-size: 12px;
  color: #999;
}
.sub-btn .active1 {
    background: #ED5564;
    color: #fff;
  }
.filter {
  display: none;
  width: 200px;
  height:60px;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  background: #fff;
  position: fixed;
  left:25%;
  top:40%;
  border:1px solid #eee;
  border-radius: 6px;
  color: #000;
}

</style>

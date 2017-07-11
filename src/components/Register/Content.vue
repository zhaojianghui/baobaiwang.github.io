<template>
  <div class="content">

    <ul class="r-type">
      <li class="active">
         <a href="javaScript:;"><span></span>普通注册</a>
      </li>
      <li>
        <a href="#/register-m"><span></span>手机注册</a>
      </li>
    </ul>
    <div class="c-form">
      <div class="txt">
        <label for="text">
          <p>用&nbsp; 户&nbsp;名</p>
          <input id="text" type="text" placeholder="请输入6-20个字符" v-model="txt" >
        </label>

      </div>
      <div class="txt">
        <label for="pswd">
          <p>设置密码</p>
          <input id="pswd" type="password" placeholder="请输入6-20位密码" v-model="psw">
        </label>

      </div>
      <div class="txt">
        <label for="pswd1">
          <p>确认密码</p>
          <input id="pswd1" type="password" placeholder="请再次输入密码" v-model="psw1">
        </label>

      </div>
      <div class="txt">
        <label for="email">
          <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</p>
          <input id="email" type="text" placeholder="请输入常用邮箱地址" v-model="email">
        </label>

      </div>
    </div>
    <div class="remember">
      <div class="r-left">
        <input id="checkbox" type="checkbox" v-model="wrap" >
        <label for="checkbox">同意 <a href="javaScript:;">用户注册协议</a></label>
      </div>
    </div>
    <div class="sub-btn">
      <input type="button" :class="{ tologin : txt&&psw&&psw1&&email&&wrap}" value="注册" ref="btn"
        @click="getLoginData "
      >
    </div>
    <div class="filter" ref="filter">

    </div>
  </div>
</template>

<script>
import Header from './Header'
var qs = require('qs')
export default {
  name: 'index',
  data () {
    return {
      txt:'',
      psw:'',
      psw1:'',
      email:'',
      wrap:false

    }
  },
  components:{
    'l-header':Header,
  },
  props:{

  },
  methods:{

      getLoginData(){
        if(!this.txt || !this.psw|| !this.psw1||!this.email||!this.wrap) return
          var filt = this.$refs['filter']
          var params = qs.stringify({
            'username':this.txt,
            'password':this.psw,
            'password_confirm':this.psw1,
            'email':this.email,
            'client':'wap'});
          this.$http.post('/mobile/index.php?act=login&op=register',params,{
              headers:{
                  'Content-type':'application/x-www-form-urlencoded'
              }}).then(res=>{
                console.log(res)
                if(res.data.datas.error){
                    console.log(res.data.datas.error)
                    filt.style.display = 'block';
                    filt.innerHTML = res.data.datas.error
                }else{
                  filt.style.display = 'block';
                  filt.innerHTML = "注册成功"
                }
                setTimeout(()=>{
                  filt.style.display = 'none';
                },1000)
            })
      }
  },
  mounted(){

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
  box-sizing: border-box;
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
  color:#333;
  float: left;
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
.sub-btn .tologin{
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

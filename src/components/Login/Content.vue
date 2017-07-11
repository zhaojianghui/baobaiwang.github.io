<template>
  <div class="content">
    <div class="c-form">
      <div class="txt">
        <label for="text">
          <p>账&nbsp;&nbsp;&nbsp;&nbsp;户</p>
          <input id="text" type="text" placeholder="请输入用户名/已验证手机" v-model="username">
        </label>
      </div>
      <div class="txt">
        <label for="pswd">
          <p>密&nbsp;&nbsp;&nbsp;&nbsp;码</p>
          <input id="pswd" type="password" placeholder="请输入登录的密码" v-model="password">
        </label>

      </div>
    </div>
    <div class="remember">
      <div class="r-left">
        <input id="checkbox" type="checkbox" checked>
        <label for="checkbox">七天自动登录</label>
      </div>
      <div class="r-right">
        <a href="###">忘记密码&nbsp;&nbsp;?</a>
      </div>
    </div>
    <div class="sub-btn">
      <input type="button" @click="toLogin" :class="{active1:username&&password}" value="登录">
    </div>

    <div class="filter" ref="filter"></div>
  </div>
</template>

<script>
import Header from './Header'
var qs = require('qs')
export default {
  name: 'index',
  data () {
    return {
      username:'',
      password:''
    }
  },
  components:{
    'l-header':Header,
  },
  methods:{
      toLogin(){
          var params = qs.stringify({
            'username':this.username,
            'password':this.password,
            'client':'wap'
          })
        var filt = this.$refs['filter']
          this.$http.post('/mobile/index.php?act=login',params,
        {headers:{
          'Content-type':'application/x-www-form-urlencoded'
        }}).then(res=>{
            if(res.data.datas.error){
              console.log(res.data.datas.error)
              filt.style.display = 'block';
              filt.innerHTML = res.data.datas.error
            }else{
              filt.style.display = 'block';
              console.log(filt);
              filt.innerHTML = "登录成功"
              localStorage.setItem('user',JSON.stringify(res.data.datas))
              setTimeout(()=>{
               window.location.href = "#/user"
              },1000)

            }
            setTimeout(()=>{
              filt.style.display = 'none';
            },1000)
          })
      }
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
.c-form{
  background: #fff;
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
.remember .r-left input{
  width: 15px;
  height:15px;
  vertical-align: middle;
  border-radius: 50%;
  border:1px solid #CCC;
  margin-top:-2px;
  background: #48CFAE;
  color: #fff;
  outline: none;
}
.remember .r-right{
  float:right
}
.remember .r-right a{
  float: right;
  font-size: 14px;
  color: #4B89DC;
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
.sub-btn .active1{
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
    left:20%;
    top:40%;
    border:1px solid #eee;
    border-radius: 6px;
     color: #000;
  }

</style>

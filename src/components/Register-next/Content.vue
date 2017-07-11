<template>
  <div class="content">

    <div class="tips">
        请输入收到的短信验证码
    </div>
      <div class="yzm y-pic">
        <div class="txt">
          <label for="pswd">
            <p>验&nbsp;证&nbsp;码</p>
            <input id="pswd" type="password" placeholder="请输入图形验证码" v-model="yzm">
            <div class="p-yzm"
            >
              <img @click="getYzmPic " :src="src" alt="">
             </div>
          </label>

        </div>
      </div>
      <div class="yzm y-phone">
        <div class="txt ">
          <label for="text">
            <p>动&nbsp;态&nbsp;码</p>
            <input id="text" type="text" placeholder="请输入短信动态验证码！" v-model="dtm">
            <span class="y-more">
              <a href="###">再次短信获取</a>
            </span>
          </label>

        </div>
      </div>
    <div class="sub-btn">
      <input type="button" :class=" {active1 :dtm&&yzm}" value="下一步">

    </div>
    <div class="m-sm">
      绑定手机不收任何费用，一个手机只能绑定一个账号，若需修改或解除已绑定的手机，请登录商城PC端进行操作。
    </div>

  </div>
</template>

<script>
import Header from './Header'
var qs =require('qs')
export default {
  name: 'index',
  data () {
    return {
      dtm:'',
      yzm:'',
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
                this.src=`http://www.baobai.com/mobile/index.php?act=seccode&op=makecode&k=${data}&t=0.537895873778161`
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
.tips{
  width: 100%;
  height:46px;
  padding:12px 20px;
  font-size: 14px;
  color: #888;
  box-sizing: border-box;
}
.yzm {
  background: #fff;
  width: 100%;
}
.y-phone{
  margin-top:10px;
}
  .txt{
    position: relative;
    width: 94%;
    margin:0 3%;
    height:44px;
    line-height: 44px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    background: #fff;
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
.txt .y-more{
  position: absolute;
  right: 10px;
  top:0;
}
.txt .y-more a{
  font-size: 12px;
  color: #3BAEDA;
  font-weight: 700;
  text-decoration: underline;
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

  .sub-btn{
    width: 100%;
    height:40px;
    padding: 0 5%;
    margin-top:20px;
    box-sizing: border-box;
  }
.sub-btn input{
  width: 100%;
  height:100%;
  border:0;
  outline: 0;
  font-size:16px;
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

</style>

<template>
  <div class="footer">
    <footer id="footer">
      <div class="footer-wrap posr">
        <div class="nav-text">
          <a href="#">我的商城</a>
          <a id="logout-btn" href="javascript:void(0);" @click="delUser">注销</a>
          <a href="#">反馈</a><a href="javascript:void(0);" class="gotop">返回顶部</a>
        </div>
        <div class="nav-pic">
          <a href="#" class="app"><span><i><img src="static/img/foot_app.png"></i></span><p>客户端</p></a>
          <a href="javascript:void(0);" class="touch"><span class="chu"><i><img src="static/img/foot_touch.png"></i></span><p>触屏版</p></a>
          <a href="#" class="pc"><span><i><img src="static/img/foot_pc.png"></i></span><p>电脑版</p></a>
        </div>
      <div class="copyright"></div></div></footer>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
    }
  },
  methods:{
    delUser(){
      localStorage.removeItem('user')
      this.$router.push({name:'index'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  a{
    text-decoration: none;
  }
#footer {
  display: block;
  position: relative;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  width: 100%;
  margin-top: 0.5rem;
  }
  .footer-wrap{
  background: #fff;
  border-top:solid 0.05rem #eee;
  }
  .posr{
    position: relative !important;
  }
  .footer-wrap .nav-text {
    padding: 0.6rem 0;
    font-size: 0;
    text-align: center;
    border-bottom: solid 0.05rem #EEE;
  }
  .footer-wrap .nav-text a {
  display: inline-block !important;
  width: 24%;
  height: 0.6rem;
  font-size: 0.6rem;
  line-height: 0.6rem;
  color: #555 !important;
  border-left: solid 0.05rem #EEE;
  }
  .footer-wrap .nav-pic{
    padding:0.3rem 2rem;
    font-size: 0;
    text-align: center;
    border-bottom: solid 0.05rem #eee;
  }
  .footer-wrap .nav-pic a {
    display: inline-block !important;
    width: 33.33%;
    font-size: 0.45rem;
    color: #999 !important;
    text-align: center;
  }
  .footer-wrap .copyright {
    height: 1.6rem;
    font-size: 0.45rem;
    line-height: 1.6rem;
    color: #555;
    text-align: center;
    text-shadow: 1px 1px 0 rgba(255,255,255,1);
  }
  .footer-wrap .nav-pic a span {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
    padding: 0.15rem;
    border: solid #CCC 1px;
    border-radius: 100%;
  }
  .footer-wrap .nav-pic a i {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
  .footer-wrap .nav-pic a i img{
    width:20px;
    height:20px;
    display: inline-block;
    text-align: center;
  }
  .footer-wrap .nav-pic .touch {
    color: #333 !important;
  }
  .footer-wrap .nav-pic .touch .chu i{
    opacity: 1;
  }
</style>

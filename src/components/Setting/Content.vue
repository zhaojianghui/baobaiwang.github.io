<template>
  <div class="content">

      <ul>
          <li>
            <h4>登录密码</h4>
            <p>建议您定期更改密码以保护账户安全</p>
            <span>&gt;</span>
          </li>
        <li>
          <h4>手机验证</h4>
          <p>若您的手机已丢失或停用，请立即修改更换</p>
          <em>186****5645</em>
          <span>&gt;</span>
        </li>
        <li>
          <h4>支付密码</h4>
          <p>建议您设置复杂的支付密码保护账户金额安全</p>
          <em>未设置</em>
          <span>&gt;</span>
        </li>
       </ul>
        <ul class="u-fk">
          <li>
            <h4>用户反馈</h4>
            <p>您在使用中遇到的问题与建议可向我们反馈</p>

            <span>&gt;</span>
          </li>
        </ul>
        <ul >
          <li>
            <h4>安全退出</h4>
          </li>
        </ul>
    <l-footer @click="goBackTop" ></l-footer>
  </div>
</template>

<script>
import  Header from './Header'
import Footer from './Footer'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  props:{
      activeData:Array,
      listData:Array
  },
  components:{
    'r-header':Header,
    'l-footer':Footer
  },
  methods:{
    goBackTop(){
      $('html,body').animate({
        scrollTop:0
      },500);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content{
  width: 100%;
  position: absolute;
  left:0;
  top:44px;
}
.content ul {
  width: 100%;
  padding-left: 10px;
  background: #fff;
}
.content ul li{
  position: relative;
  padding:10px 0;
  font-size: 12px;
  color:#888;
  border-bottom: 1px solid #eee;
}
.content ul li h4{
  font-size: 14px;
  color:#333;
  font-weight: 100;
}
.content ul li span {
  position: absolute;
  right:10px;
  top:20px;
  font-size: 16px;
  font-weight: 900;
  font-family: '宋体';
}
.content ul li em{
  font-style:normal;
  position: absolute;
  right:26px;
  top:50%;
  margin-top: -8px;
  color: #000;
}
  .content .u-fk{
    width: 100%;
    margin:10px 0;
  }



</style>

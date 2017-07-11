<template>
  <div class="index">
    <l-header title="登录">
      <a href="#/" slot="left"></a>
      <a href="#/register" slot="right">注册</a>
    </l-header>
    <l-content>

    </l-content>
    <div class="c-partner">
      <div class="p-login">
        <p>合作账号登录</p>
      </div>
      <ul>
        <li>
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Content from './Content'
export default {
  name: 'index',
  data () {
    return {
      indexData:[]
    }
  },
  components:{
    'l-header':Header,
    'l-content':Content
  },
  methods:{


  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  overflow: hidden;
  background: #eee;
  box-sizing: border-box;
}
.c-partner{
  width: 100%;
  position: absolute;
  left: 0;
  bottom:50px;
}
.c-partner .p-login{
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ccc;
  text-align: center;

}
.c-partner .p-login p{
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding: 0 20px;
  background-color: #f5f5f5;
  color: #666;
  font-size: 12px;
  -webkit-transform: translate3d(0, 50%, 0);
  -ms-transform: translate3d(0, 50%, 0);
  transform: translate3d(0, 50%, 0);
}
.c-partner ul {
    width: 60%;
    margin:20px auto 0;
  overflow: hidden;
}
.c-partner ul li{
  float: left;
  width: 30%;

}
.c-partner ul li a{
  width: 42px;
  height:42px;
  display: inline-block;
  border-radius: 50%;
}
.c-partner ul li:nth-child(1) a{
  border:1px solid #ED5564;
  background: url(./img/wb.png) no-repeat center;
  background-size: 60% 60%;
}
.c-partner ul li:nth-child(2) a{
  border:1px solid #4FC0E8;
  background: url(./img/qq.png) no-repeat center;
  background-size: 60% 60%;
}
</style>

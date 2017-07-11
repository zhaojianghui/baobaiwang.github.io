<template>
  <div class="index">
    <r-header title="提交验证码">
      <a href="#/" slot="left"></a>
      <a href="#/login" slot="right">登录</a>
    </r-header>
    <l-content>

    </l-content>
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
    'r-header':Header,
    'l-content':Content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    box-sizing: border-box;
  }
</style>

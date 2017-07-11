<template>
  <div class="index">
    <r-header title="设置" >
      <a href="#/" slot="left"><img src="./img/left.png" alt=""></a>
      <span class="icon one" slot="right"></span>
    </r-header>
    <l-content :active-data="activeData">

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
        activeData:[],
    }
  },
  components:{
    'r-header':Header,
    'l-content':Content,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon.one{
    display: block;
    width:15px ;
    height: 15px;
    margin: 0 8px;
    background: url("./img/cart.png") no-repeat;
    background-size:100% 100%;
  }
  .index{
    box-sizing: border-box;
  }
</style>

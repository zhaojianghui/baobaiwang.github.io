<template>
  <div class="order">
      <v-header  title="确认订单" forch="搜索" adress="search">
        <a href="javascript:history.go(-1);" slot="left"><img src="static/img/left.png" ></a>
        <span class="icon one" slot="right"></span>
      </v-header>
      <v-orderconter></v-orderconter>

  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>

<style scoped>
 .icon.one{
     display: block;
     width:15px ;
     height: 15px;
     margin: 0 8px;
     background: url("../../../static/img/search.png") no-repeat;
     background-size:100% 100%;
  }

</style>

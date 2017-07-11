<template>
  <div id="details">
      <m-header :goods-id="goodsID" :cur="cur"></m-header>
      <div class="pannel" v-html="html">
      </div>
    <my-footer class="footer"></my-footer>
  </div>
</template>
<script>
  import MyFooter from "../public/Footer";
  import MHeader from "./header";
export default {
  name: 'my-details',
  data(){
      return{
          cur:1,
        html:"",
        goodsID:'',
        cur:1
      }
  },
  components: {
    "m-header":MHeader,
    "my-footer":MyFooter
  },
  mounted(){
      //console.log(window.location.href)
      var url = window.location.href;
      var id = url.split("?")[1]
      var goodsID = id.split("=")[1]
    this.goodsID = goodsID
    //console.log(goodsID);
      this.$http.get(`/mobile/index.php?act=goods&op=goods_body&goods_id=${goodsID}`)
        .then(res=>{
            this.html = res.data;
           // console.log("de"+this.html)
        })

  }
}
</script>
<style>
  *{margin:0;padding:0}
  html{
    font-size:20px;
  }
  .footer{width:100%;height:134px;}
  .pannel{
    margin-top:2rem;
    max-width: 800px;
    overflow: hidden;
  }
  .pannel p,.pannel div,.pannel table{
    width:100%!important;
    font-size: 0.6rem!important;
  }
  .pannel img{
    width:100%!important;
    vertical-align: top;
    border:none;
  }
</style>

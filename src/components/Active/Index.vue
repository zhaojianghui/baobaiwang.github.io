<template>
  <div class="index">
    <r-header :title="tit" forch="购物车">
      <a href="#/" slot="left"><img src="./img/left.png" alt=""></a>
      <span class="icon one" slot="right"></span>
    </r-header>
    <l-content :active-data="activeData" :list-data="listData">

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
        tit:'',
        activeData:[],
        listData:[]
    }
  },
  components:{
    'r-header':Header,
    'l-content':Content,
  },
  methods:{

  },
  mounted(){
      var id = this.$route.query.id;
    this.$http.get('/mobile/index.php?act=index&op=special&special_id='+id)
      .then(res=>{
          console.log(res);
        this.tit=res.data.datas.special_desc
        var data = res.data.datas.list;
        this.activeData = data;
        this.listData = data.slice(1,data.length)
      })
    var user = JSON.parse(localStorage.getItem('user') )
    console.log(user)
  }
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

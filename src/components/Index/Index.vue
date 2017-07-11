<template>
  <div class="index">
    <l-header :index-data="indexData" :swiper-data="swiperData" ref="h-search"></l-header>
    <l-class></l-class>
    <l-active :index-data="indexData"></l-active>
    <l-floor :index-data="indexData"></l-floor>
    <l-pro-list :index-data="indexData"></l-pro-list>
    <l-footer @click="goBackTop" ref="go-top"></l-footer>
  </div>
</template>

<script>
  import Header from './Header'
  import Class from './Class'
  import Active from './Active'
  import Floor from './floor'
  import ProList from './ProList'
  import Footer from './Footer'
export default {
  name: 'index',
  data () {
    return {
      indexData:[],
      swiperData:[]
    }
  },
  components:{
      'l-header':Header,
      'l-class':Class,
      'l-active':Active,
      'l-floor':Floor,
      'l-pro-list':ProList,
      'l-footer':Footer
  },
  methods:{

      goBackTop(){
      $('html,body').animate({
        scrollTop:0
      },500);
    },
  },
  mounted(){
      document.body.scrollTop= 0;
      this.$http.get('/mobile/index.php?act=index')
        .then(res=>{
            console.log(res.data.datas);
            this.indexData=res.data.datas
            this.swiperData = res.data.datas[0].adv_list.item
        });

      var goTop = this.$refs['go-top'].$refs['go-top'];
      var search;
      setTimeout(()=>{
         search = this.$refs['h-search'].$refs['h-search'];
      },1000)
      window.onscroll=function(){
          if(document.body.scrollTop > 160){
            goTop.style.display= "block";
            search.style.opacity = 1
          }else{
            goTop.style.display= "none";
            search.style.opacity = 0
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 100%;
  background: #eee;
  box-sizing: border-box;
  overflow-x:hidden ;
}
</style>

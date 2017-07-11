<template>
  <div class="index">
    <l-header ></l-header>
    <l-content :hot-data="hotData" :history="history" @click="delHistory"></l-content>

  </div>
</template>

<script>
  import Header from './Header'
  import Content from './Content'
export default {
  name: 'index',
  data () {
    return {

      hotData:[],
      history:[]
    }
  },
  components:{
      'l-header':Header,
      'l-content':Content
  },
  methods:{
    delHistory(){
      localStorage.removeItem('searchItem');
      this.history = JSON.parse(localStorage.getItem('searchItem'))
    }
  },
  mounted(){
      this.$http.get('/mobile/index.php?act=index&op=search_key_list')
        .then(res=>{
            console.log(res)
          this.hotData = res.data.datas.list
        })
      this.history = JSON.parse(localStorage.getItem('searchItem'))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    box-sizing: border-box;
  }
</style>

<template>
  <div class="header">
    <div class="h-search" ref="h-search">
      <div class="logo"><a href="#/">&lt;</a></div>
      <div class="h-text">
        <span class=""></span>
        <input type="text" placeholder="红牛" v-model="search">
      </div>
      <router-link :to="{path:'/listxq',query:{keyword:search }}">

      <div class="s-mes" @click="addHistory"><a href="javaScript:;">搜索</a></div>

      </router-link>
    </div>
  </div>
</template>


<script>
  //
export default {

  name: 'l-header',
  data(){
    return{
      search:'红牛'
    }
  },
  methods:{
      addHistory(){

        var history = JSON.parse(localStorage.getItem( 'searchItem')||'[]');
        history.forEach((ele,index)=>{
            if(ele == this.search){
                history.splice(index,1)
            }
        })
        history.unshift(this.search);
        localStorage.setItem('searchItem',JSON.stringify(history));
      }
  },
  mounted(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  height:40px;
}
.h-search{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height:40px;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F8F8F8;
}
.h-search .logo{
  width: 40px;
}
.h-search .logo a{
  font-size: 22px;
  font-family: '宋体';
  color:#888;
  font-weight: 900;
}
.h-search .h-text{
  flex: 1;
  height:28px;
  margin-top: 2px;
  line-height: 30px;
  border:1px solid #DEDEDE;
  border-radius: 3px;
  background: #fff;
}
.h-search .h-text input{
  width: 150px;
  height: 26px;
  float: left;
  border:0;
  color:#bbb;
  outline: none;
}
.h-search .h-text span {
  float: left;
  width: 14px;
  height:14px;
  margin:7px 6px;
  background: url(./img/search.png) no-repeat;
  background-size: 100% 100%;
}
.h-search .s-mes a{
  display: block;
  width: 50px;
  font-size: 14px;
  color: #333;
}



</style>

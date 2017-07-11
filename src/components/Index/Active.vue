<template>
  <div class="active">
    <div>
      <ul class="sale-price" v-if="indexData[1]">
        <li>
          <router-link :to="{path:'/active',query: {id:indexData[1].home2.square_data}}">
            <img  :src="indexData[1].home2.square_image" alt="">
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/active',query: {id:indexData[1].home2.rectangle1_data}}">
            <img :src="indexData[1].home2.rectangle1_image" alt="">
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/active',query: {id:indexData[1].home2.rectangle2_data}}">
            <img :src="indexData[1].home2.rectangle2_image" alt="">
          </router-link>
        </li>
      </ul>

    </div>
      <div class="a-nzdc" v-if="indexData[2]">
          <div class="n-tit"><p>{{indexData[2].home1.title}}</p></div>
          <div class="n-pic">
            <router-link :to="{path:'/active',query: {id:indexData[2].home1.data}}">
              <img :src="indexData[2].home1.image" alt="">
            </router-link>
          </div>
      </div>
    <div class="a-nzdc" v-if="indexData[3]">
      <div class="n-tit"><p>{{indexData[3].home1.title}}</p></div>
      <div class="n-pic">
        <router-link :to="{path:'/active',query: {id:indexData[2].home1.data}}">
          <img :src="indexData[3].home1.image" alt="">
        </router-link>
      </div>
    </div>
    <div class="a-nzdc" v-if="indexData[4]">
      <div class="n-tit"><p>{{indexData[4].home1.title}}</p></div>
      <div class="n-pic">
        <router-link :to="{path:'/active',query: {id:indexData[2].home1.data}}">
          <img :src="indexData[4].home1.image" alt="">
        </router-link>
      </div>
    </div>
      <div class="a-nzdc" v-if="indexData[5]">
        <div class="n-tit"><p>{{indexData[5].home1.title}}</p></div>
        <div class="n-pic">
          <a :href="indexData[5].home1.data">
            <img :src="indexData[5].home1.image" alt="">
          </a>
        </div>
      </div>
    <div class="a-nzdc" v-if="indexData[6]">
      <div class="n-tit"><p>{{indexData[6].home1.title}}</p></div>
      <div class="n-pic">
        <a :href="indexData[6].home1.data">
          <img :src="indexData[6].home1.image" alt="">
        </a>
      </div>
    </div>

      <div class="a-theme" v-if="indexData[7]">
        <div class="n-tit"><p>{{indexData[7].home3.title}}</p></div>
        <ul>
          <li v-for="(ele,index) in indexData[7].home3.item" :key="index">
            <a href="###">
              <img :src="ele.image" alt="">
            </a>
          </li>

        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'active',
  props:{
     indexData:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  width: 100%;
}
.active img{
  display: block;
}
.sale-price{
  width: 100%;
  overflow: hidden;
}
.sale-price li{
  float: left;
  width: 50%;
}
.sale-price li a{
  display: block;

}
.sale-price li img{
  width: 100%;
}
.sale-price li:nth-child(1) a{
}
.sale-price li:nth-child(2) a{
  border-left:1px solid #fff ;
}
.sale-price li:nth-child(3) a img{
  width: 100%;
  border-left:1px solid #fff ;
  border-top:1px solid #fff;
}
.promotion{
  width: 100%;
  overflow: hidden;
}
.promotion li{
  float:left;
  width: 50%;
  height:100%;
  border-top:1px solid #fff;
}
.promotion li img{
  width: 100%;
  overflow: hidden;
}
.promotion li:nth-child(2){
  border-left:1px solid #fff;
}
  .a-nzdc{
    width: 100%;
    box-sizing: border-box;
  }
 .n-tit {
   box-sizing: border-box;
    width: 100%;
    height:36px;
    padding:0 10px;
    overflow: hidden;
    background: #eee;
  }
.n-tit p{
  padding-left: 10px;
  margin-top:10px;
  border-left:3px solid #ED5564;
  font-size: 12px;
}
.a-nzdc .n-pic a{
  display: block;
  height:130px;
}
.a-nzdc .n-pic img{
  width: 100%;
  height:100%;
}
.a-theme ul{
  overflow: hidden;
}
.a-theme ul li{
  box-sizing: border-box;
  float: left;
  width: 50%;
  border-bottom:1px solid #eee;
  border-left: 1px solid #eee;
}
.a-theme ul li a{
  display: block;
  width: 100%;
}
.a-theme ul li a img{
  width: 100%;
}


</style>

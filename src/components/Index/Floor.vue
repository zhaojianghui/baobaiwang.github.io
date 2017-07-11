<template>
  <div class="floor">
    <div class="flo-item" v-if="indexData[8]">
      <div class="n-tit"><p>{{indexData[8]&&indexData[8].home2.title}}</p></div>
      <ul class="sale-price" >
        <li>
          <a href="###">
            <img :src="indexData[8]&&indexData[8].home2.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[8]&&indexData[8].home2.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[8]&&indexData[8].home2.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[9]">
        <li v-for="(ele,index) in indexData[9].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[10]">
      <div class="n-tit"><p>{{indexData[10]&&indexData[10].home2.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[10]&&indexData[10].home2.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[10]&&indexData[10].home2.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[10].home2.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[11]">
        <li v-for="(ele,index) in indexData[11].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[12]">
      <div class="n-tit"><p>{{indexData[12].home4.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[12].home4.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[12].home4.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[12].home4.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[13]">
        <li v-for="(ele,index) in indexData[13].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[14]">
      <div class="n-tit"><p>{{indexData[14].home4.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[14].home4.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[14].home4.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[14].home4.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[15]">
        <li v-for="(ele,index) in indexData[15].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[16]">
      <div class="n-tit"><p>{{indexData[16].home4.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[16].home4.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[16].home4.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[16].home4.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[17]">
        <li v-for="(ele,index) in indexData[17].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[18]">
      <div class="n-tit"><p>{{indexData[18].home2.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[18].home2.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[18].home2.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[18].home2.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[19]">
        <li v-for="(ele,index) in indexData[19].home3.item">
          <a href="###">
            <img :src="ele.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="flo-item" v-if="indexData[20]">
      <div class="n-tit"><p>{{indexData[20].home2.title}}</p></div>
      <ul class="sale-price">
        <li>
          <a href="###">
            <img :src="indexData[20].home2.square_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[20].home2.rectangle1_image" alt="">
          </a>
        </li>
        <li>
          <a href="###">
            <img :src="indexData[20].home2.rectangle2_image" alt="">
          </a>
        </li>
      </ul>
      <ul class=" promotion" v-if="indexData[21]">
        <li v-for="(ele,index) in indexData[21].home3.item" :key="index">
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
  name: 'index',
  props:{
      indexData:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .floor img{
    display: block;
  }
  .n-tit {
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
    box-sizing: border-box;
  }
  .promotion li img{
    width: 100%;
    overflow: hidden;
  }
  .promotion li:nth-child(2){
    border-left:1px solid #fff;
  }
</style>

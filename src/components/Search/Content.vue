<template>
  <div class="content">
      <div class = "s-type">
          <h4>热门搜索</h4>
          <ul>
            <li v-for="(ele,index) in hotData" :key="index">
              <router-link :to="{path:'/listxq',query:{keyword:ele }}">
              <p>{{ele}}</p>
              </router-link>
            </li>
          </ul>
      </div>
      <div class="s-history">
        <h4>历史记录</h4>
          <ul>
            <li v-if="history" v-for="(ele,index) in history" :key="index">
              <router-link :to="{path:'/listxq',query:{keyword:ele }}">
              <p>{{ele}}</p>
              </router-link>
            </li>
          </ul>
          <div class="s-btn" @click="delHistory" >清空历史</div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'content',
  props:{
    hotData:Array,
    history:Array
  },
  components:{

  },
  methods:{
    delHistory(){
        this.$emit('click')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s-type,.s-history{
  padding:16px 10px 10px;
}
  .s-type h4,.s-history h4{
    font-weight: 100;
    font-size: 14px;
    color: #111;
    margin-bottom: 8px;
  }
  .s-type ul,.s-history ul {
    overflow: hidden;
  }
.s-type ul li,.s-type ul li{
  float: left;
}
  .s-type ul li p,.s-history ul li p{
    float: left;
    padding:5px 10px;
    font-size: 12px;
    background: #fff;
    border:1px solid #eee;
    border-radius:15px;
    margin: 0 8px 8px 0;
    color:#555;
  }
.s-history ul li p{
  border-radius: 0;
}
.s-history .s-btn{
  display: inline-block;
  width: 79%;
  height: 38px;
  text-align: center;
  margin: 30px 10% 0 10%;
  background-color: #EEE;
  border-radius: 4px;
  font-size: 14px;
  line-height: 38px;
  color: #555;

}

</style>

<template>
  <div class="header">
    <ul>
      <li class="h-btn h-left">
          <slot name="left"><a href="###"></a></slot>
      </li>
      <li class="h-tit">
        {{title}}
      </li>
      <li class="h-btn h-right">
        <slot name="right"><a href="###"></a></slot>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'l-header',
  props:{
      title:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  position: fixed;
  left: 0;
  top:0;
  z-index: 10;
  width: 100%;
  height:43px;
  border-bottom: 1px solid #eee;
}
.header ul{
  width: 100%;
  display: flex;
  text-align: center;
  line-height: 43px;
}
.header ul li {
  height:43px;
}
.header ul .h-btn{
  width: 60px;
  float: left;
}
.header ul .h-tit{
  flex: 1;
  font-size: 18px;
}
.header ul .h-left a{
  display: inline-block;
  width: 18px;
  height:18px;
  background: url(./img/home_b.png) no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
  opacity: 0.5;
}
.header ul .h-right a{
  color:#ED5564;
  font-size: 14px;
}

</style>

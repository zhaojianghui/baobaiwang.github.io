<template>
  <div id="list">
      <div class="layout">
        <div class="categroy-cnt" id="categroy-cnt">
          <ul class="categroy-list" >
          <li class="categroy-item" id="ming" @click="changeBg" :class="{selected:selected==-1}">
            <!--品牌推荐-->
            <a href="javascript:void(0);" class="brand">
              <div class="ci-ico">
                <img src="../../../static/img/degault.png">
              </div>
              <div class="ci-name">品牌推荐</div>
            </a>
          </li>
            <!--class列表选项-->
            <li class="categroy-item" id="item" v-for="(ele,index) in brandData"
                :key="index" @click="changeClass(ele.gc_id,index)" :class="{selected:selected==index}">
              <a href="javascript:void(0);" class="brand">
                <div class="ci-ico">
                  <img src="../../../static/img/degault.png">
                </div>
                <div class="ci-name">{{ele.gc_name}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="categroy-rgt" id="categroy-rgt">
        <!--品牌列表-->
        <dl class="brands-recommend" id="pai">
          <dd v-for="(ele,index) in listData" :key="index">
            <router-link :to="{path:'/listxq',query:{bid:ele.brand_id}}">
            <a href="javascript:;">
              <img :src="ele.brand_pic">
              <p>{{ele.brand_name}}</p>
            </a>
            </router-link>
          </dd>
        </dl>
        <dl class="child-list" id="child">
          <dt v-for="(ele,index) in classData" :key="index">
            <router-link :to="{path:'/listxq',query:{gid:ele.gc_id}}">
            <a href="#"><i class="col0"></i>{{ele.gc_name}}<i class="arrow-r"></i></a>
            </router-link>
              <span v-for="(ele,index) in ele.child">
                 <router-link :to="{path:'/listxq',query:{gid:ele.gc_id}}">
                  <a href="javascript:;">{{ele.gc_name}}</a>
                 </router-link>
              </span>
          </dt>
          <!--<dd v-for="(ele,index) in classData" :key="index"><a href="#">{{ele.child.gc_name}}</a></dd>-->
        </dl>
      </div>

  </div>
</template>

<script>
export default {
  name: 'my-list',
  data () {
    return {
    listData:[],
    brandData:[],
    classData:[],
    detailData:[],
    selected:-1
    }
  },
  methods:{
    getListData(){
        this.$http.get("/mobile/index.php?act=brand&op=recommend_list")
          .then(res=>{
              console.log(res.data.datas.brand_list);
              this.listData = res.data.datas.brand_list;
          })
    },
    getBrandData(){
        var Loading = document.getElementById("loading");
        Loading.style.display = "block";
      this.$http.get("/mobile/index.php?act=goods_class")
        .then(res=>{
          console.log(res.data.datas.class_list);
          this.brandData = res.data.datas.class_list;
          Loading.style.display = "none";
        })
    },
    getClassData:function(id){
      var Loading = document.getElementById("loading");
      Loading.style.display = "block";
      this.$http.jsonp("/mobile/index.php?act=goods_class&op=get_child_all&gc_id="+id)
        .then(res =>{
          this.classData=res.data.datas.class_list;
          console.log(res.data.datas.class_list);
          Loading.style.display = "none";
        });
    },
    changeBg(){
      this.selected=-1;
       var Pai = document.getElementById("pai");
       Pai.style.display="block";
    },
//    点击分类是传递id值，实现分类
    changeClass(id,index){
      this.getClassData(id);
      var Pai = document.getElementById("pai");
      var Child = document.getElementById("child");
      Pai.style.display="none";
      Child.style.display="block";
      this.selected=index;
      console.log(index)
//      var Loading = document.getElementById("loading");
//        Loading.style.display="block";
    }
  },
  mounted(){
     this.getListData();
    this.getBrandData();
    this.getClassData();
  },
}
</script>

<style>
  *{margin:0;padding:0}
  a{text-decoration: none}
  ::-webkit-scrollbar{
    display:none;
  }
  body{background-color: #f5f5f5;}
  .layout{margin-top:2rem;display: block;background: #F5F5F5;}
  .categroy-cnt{width:3.8rem;display: block;overflow-y: auto;overflow-x: hidden;float:left;position:absolute;z-index:1;top:2rem;left:0;bottom:0;}
  .categroy-cnt .categroy-list{transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transition-duration: 0ms;transform: translate(0px, 0px) translateZ(0px);padding:0 0.5rem;position:absolute;list-style: none}
  .categroy-cnt .categroy-list .categroy-item{width:3rem;height:3.5rem}
  .categroy-list .categroy-item .brand{display: block;}
  .categroy-item .ci-ico{width:1rem;height:1rem;padding:0.45rem 0 0.25rem 0;margin:0 auto;}
  .categroy-item .ci-ico img{width:1rem;height:1rem;display:block;opacity:0.3;
  vertical-align: top;}
  .categroy-item .ci-name{font-size:0.6rem;color:#999;line-height:0.9rem;text-align: center;width:100%;height:1.5rem;}
  .categroy-list li.selected .ci-name {color: #f00; padding-bottom: 0.2rem;border-bottom: solid 0.1rem #ED5564;
  }
  .categroy-list li.selected .ci-ico img{opacity: 1;}
  .categroy-rgt {background-color: #FCFCFC;position: absolute;z-index: 1;left: 3.8rem;
    top: 2rem;bottom: 0;right: 0;overflow: auto;scrollbar-face-color: #fff;}
  .categroy-rgt .brands-recommend{display:block;transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transition-duration: 0ms;transform: translate(0px, 0px) translateZ(0px);font-size:0}
  .categroy-rgt .brands-recommend dd{width:3.3rem;height:3.3rem;display: inline-block;vertical-align: top;background-color: #fff;padding:0.2rem;margin:0.3rem 0 0 0.3rem;}
  .categroy-rgt .brands-recommend dd a{color:#333;display:block;}
  .brands-recommend dd a img{width:100%;margin:0.5rem 0;}
  .brands-recommend dd a p{font-size:0.5rem;line-height: 1rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: center}
  .child-list dt {
    background-color: #FCFCFC;
    padding: 0.2rem 0;
    border-style: solid;
    border-color: #F5F5F5;
    border-width: 0.05rem 0;
  }
  .child-list dt a {
    display: block;
    width: 96%;
    height: 1.48rem;
    padding: 0 0 0 4%;
    font-size: 0.6rem;
    line-height: 1.48rem;
    color: #111;
    border-bottom: 1px solid #eee;
  }
  .child-list dt i {
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
    display: inline-block;
    border-radius: 0.2rem;
    margin-right: 0.4rem;
    background: #AC92ED;
  }
  .child-list dt i.arrow-r {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    background: transparent url(../../../static/img/arrow.png) no-repeat 50% 50%;
    background-size: cover;
    float: right;
    margin: 0.5rem 0.5rem 0 0;
    opacity: 0.5;
  }
  .child-list span {
    font-size: 0.55rem;
    line-height: 1.48rem;
    vertical-align: top;
    display: inline-block;
    width: 3.15rem;
    height: 1.48rem;
    padding: 0.2rem;
    margin-left: 0.3rem;
    border-radius: 0;
    background: #fff;

  }
  .child-list span a {
    display: block;
    color: #111;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-bottom: none;
  }


</style>

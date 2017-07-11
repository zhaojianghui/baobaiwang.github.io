<template>
  <div>
        <div class="newaddress">
          <v-header  title="编辑收货地址" forch="搜索" adress="search">
            <a href="javascript:history.go(-1);" slot="left"><img src="static/img/left.png" ></a>
            <span class="icon one" slot="right"></span>
          </v-header>
          <div class="newaddress-conter">
            <div>
              <p class="one">
                <span>收货人姓名</span>
                <input type="text" v-model="valone">
              </p>
              <p class="two">
                <span>联系手机</span>
                <input type="text" v-model="valtwo">
              </p>
              <p class="three">
                <span>地区选择</span>
                <input type="text" v-model="valthree" @click="selectaddress">
              </p>
              <p class="four">
                <span>详细地址</span>
                <input type="text" v-model="valfour">
              </p>
              <p class="five">
                <span>默认地址</span>
                <span class="circle" @click="changeOff">
                  <i></i>
                </span>
              </p>
            </div>
             <button @click="changeyemian"
                     :class="{saveaddress:true,active:valone&&valtwo&&valthree&&valfour}">
               保存地址</button>
          </div>
      </div>
        <div class="newaddress-contertwo">
          <div class="headertwo">
            <a href="javascript:history.go(-1);" ><img src="static/img/left.png" ></a>
            <span>选择地区</span>
            <span></span>
          </div>
          <ul>
            <li class="area-title one active">一级地区</li>
            <li  class="area-title two">二级地区</li>
            <li  class="area-title  three">三级地区</li>
          </ul>
          <div class="allarea">
                <div class="area one">
                    <p class="oneadress" @click="totwoadress">
                      <span class="sheng">河北</span>
                      <span>></span>
                    </p>
                </div>
                <div class="area two" >
                    <p class="twoadress" @click="tothreeadress">
                      <span class="shi">保定市</span>
                      <span>></span>
                    </p>
                </div>
                <div class="area three" >
                  <p  @click="tofouradress">
                    <span class="onequ">竞秀区</span>
                    <span>></span>
                  </p>
                  <p  @click="tofouradress">
                    <span class="onequ">莲池区</span>
                    <span>></span>
                  </p>
                </div>
          </div>
        </div>
  </div>

</template>

<script>
  var qs = require('qs')
export default {
  name: 'newaddress',
  data(){
      return {
          state:true,
          valone:'',
          valtwo:'',
          valthree:'',
          valfour:'',
          address_id:'',
          exitData:[]
      }
  },
  methods:{
    selectaddress(){
      var Contertwo=document.querySelector(".newaddress-contertwo")
      var left=320
      var timer=setInterval(function () {
          left-=80;
          Contertwo.style.left=left+"px";
          if(left==0){
              clearInterval(timer)
          }
      },100)


    },
    totwoadress(){
        var areatwo=document.querySelector('.area.two');
        var areaone=document.querySelector('.area.one');
        var areatitleone=document.querySelector('.area-title.one')
        var areatitletwo=document.querySelector('.area-title.two')
        var sheng=document.querySelector('.sheng')
        var str=sheng.innerHTML
        areatwo.style.display="block";
        areatitleone.className="area-title one";
        areatitletwo.className="area-title two active";
        areaone.style.display="none";
        areatitleone.innerHTML=str;
    },
    tothreeadress(){
      var areatwo=document.querySelector('.area.two');
      var areathree=document.querySelector('.area.three');
      var areatitletwo=document.querySelector('.area-title.two')
      var areatitlethree=document.querySelector('.area-title.three')
      var shi=document.querySelector('.shi')
      var str=shi.innerHTML
      console.log(str)
      areatwo.style.display="none";
      areathree.style.display="block";
      areatitletwo.className="area two";
      areatitlethree.className="area three active";
      areatitletwo.innerHTML=str;
    },
    tofouradress(ev){
        //console.log(ev.target)
        var sheng=document.querySelector('.sheng')
        var shi=document.querySelector('.shi')
        var Contertwo=document.querySelector(".newaddress-contertwo")
        var sheng=sheng.innerHTML;
        var shi=shi.innerHTML;
        var qu=ev.target.children[0].innerHTML;
        this.valthree=sheng +''+shi+''+qu;
        console.log(this.valthree)
        var left=0
        var timer=setInterval(function () {
          left+=80;
          Contertwo.style.left=left+"px";
          if(left==320){
            clearInterval(timer)
          }
        },100)
    },
    changeyemian(){
        if(!this.valone||!this.valtwo||!this.valthree||!this.valfour) return;
        var user=JSON.parse(localStorage.getItem('user'))
        var key=user.key;
        console.log(key)
        console.log(this.state)
        var params = qs.stringify({
          'key':key,
          'true_name':this.valone,
          'mob_phone':this.valtwo,
          'address':this.valfour,
          'city_id': '78',
          'area_id':'1208',
          'area_info':this.valthree,
          'is_default':!this.state
        })
        this.$http.post('/mobile/index.php?act=member_address&op=address_add',params,{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
        .then(res=>{
          console.log(res.data.datas.address_id)
          this.address_id= res.data.datas.address_id;
          this.$router.push({name:'address'})
        });
    },
    changeOff(){
        var icircle=document.querySelector("i")
        var circle=document.querySelector('.circle')
        if(this.state){
          icircle.style.left="18px";
          icircle.style.backgroundColor="#fff";
          circle.style.backgroundColor="#48CFAE";
          circle.style.borderColor="#48CFAE";
          this.state=false
        }else{
          icircle.style.left="0";
          icircle.style.backgroundColor="#fff";
          circle.style.backgroundColor="#fff";
          circle.style.borderColor="#eee";
          this.state=true
        }
    }
  },
  mounted(){
      var key=this.$route.query.key;
      var address_id=this.$route.query.address_id;
      var params = qs.stringify({
        'key':key,
        'address_id':address_id
      })
      this.$http.post('/mobile/index.php?act=member_address&op=address_info',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          console.log(res.data.datas.address_info)
          this.exitData=res.data.datas.address_info;
          this.valone=this.exitData.true_name;
          this.valtwo=this.exitData.mob_phone;
          this.valthree=this.exitData.area_info;
          this.valfour=this.exitData.address;
        });
  }

}
</script>

<style scoped>
  .icon.one{
    display: block;
    width:15px ;
    height: 15px;
    margin: 0 8px;
    background: url("../../../static/img/search.png") no-repeat;
    background-size:100% 100%;
  }
  .newaddress{
    -display: none;
  }
  .saveaddress.active{
    background:#ED5564 ;
    color: #fff;
  }
  .newaddress-conter{
    width: 100%;
    position: fixed;
    left: 0;
    top: 44px;
    bottom: 0;
    background: rgb(245,245,245);
    border-top: 1px solid #eee;
    font-size: 15px;

  }
  .newaddress-conter div{
    width: 100%;
    height:200px;
    background: #fff;
    color: #444;
    font-size: 14px;

  }
  .newaddress-conter div p{
    display: flex;
    border-bottom: 1px solid #eee;
    line-height: 39px;
    margin: 0 10px;
  }
  .newaddress-conter div p span{
    padding: 0 15px 0 10px;
  }
  .newaddress-conter div .five .circle{
    display: block;
    position: relative;
    width:12px ;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin-top: 7px;
  }
  .newaddress-conter div .five .circle i{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .newaddress-conter button{
    border: none;
    width: 90%;
    height: 36px;
    background: #eee;
    text-align: center;
    line-height: 36px;
    margin: 20px 5%;
  }
  .newaddress-contertwo{
    width: 100%;
    height: 100%;
    position: absolute;
    right: -320px;
    background:rgb(245,245,245) ;
    top: 0;
    z-index: 2000;
  }
  .headertwo{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .headertwo img{
    width: 16px;
    height: 16px;
  }
  .newaddress-contertwo ul{
    position: absolute;
    left: 0;
    top: 44px;
    width: 100%;
    height:40px ;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .newaddress-contertwo ul li{
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    margin: 0 28px;
  }
  .newaddress-contertwo ul .active{
    border-bottom: 1px solid #ED5564;
    color: #ED5564;
  }
  .allarea{
    width: 100%;
    position: relative;
    left: 0;
    top: 44px;
    width: 100%;
    background: #fff;
  }
  .allarea .area{
    background: #fff;
    display: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: -4px;
  }
  .allarea .area.one{
    display: block;
  }
  .allarea .area p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .allarea .area p span{
    padding: 0 20px;
  }
</style>

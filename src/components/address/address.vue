<template>
  <div class="address">
      <v-header  title="地址管理" forch="搜索" adress="search">
        <a href="javascript:history.go(-1);" slot="left"><img src="static/img/left.png" ></a>
        <span class="icon one" slot="right"></span>
      </v-header>
      <div class="address-conter">
        <div class="noaddress">
           <p>
             <img src="static/img/address.png" >
           </p>
          <p>您还没有过添加收货地址</p>
          <p>正确填写常用收货地址方便购物</p>
          <button ><a href="#/newaddress">添加新地址</a></button>
        </div>
        <div class="hasaddress" >
              <div class="hasaddress-wrap" v-for="(ele,index) in addressData" :key="index">
                  <div class="hasaddress-top">
                      <p>
                        <span>{{ele.true_name}}</span>
                        <span>{{ele.mob_phone}}</span>
                      </p>
                      <p>
                        <span>{{ele.area_info}}</span>
                        <span>{{ele.address}}</span>
                      </p>
                  </div>
                  <div class="hasaddress-btm">
                      <div class="hasaddress-btm-left">
                      <span v-if="ele.is_default==1">默认地址</span>
                      </div>
                      <p @click="exaddress(index,ele.address_id)">
                        <span></span>
                        <span >编辑</span>
                      </p>
                      <p @click="del">
                        <span></span>
                        <span>删除</span>
                      </p>
                  </div>
                  <div class="filter">
                    <div>
                      <p>确认删除吗？</p>
                      <p>
                        <span @click="sure(index,ele.address_id)">确定</span>
                        <span @click="close">取消</span>
                      </p>
                    </div>
                  </div>
                </div>

             </div>
          <button class="adddizhi"><a href="#/newaddress">添加新地址</a></button>

      </div>
  </div>
</template>

<script>
export default {
  name: 'address',
  data(){
      return {
        addressData:[],
        arr:null,
        key:''
      }
  },
  methods:{
    del(){
        var filter=document.querySelector('.filter')
        filter.style.display="block"

    },
    sure(index,id){
      var filter=document.querySelector('.filter')
      var noaddress=document.querySelector(".noaddress")
      var qs=require('qs')
      var user=JSON.parse(localStorage.getItem('user'))
      this.key=user.key
      var params = qs.stringify({
        'address_id':id,
        'key':this.key
      });
      this.$http.post('mobile/index.php?act=member_address&op=address_del',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
            console.log(res.datas)
            this.addressData.splice(index,1)
            filter.style.display="none"
            if(this.addressData.length==0){
              noaddress.style.display="block"
            }else{
              noaddress.style.display="none"
            }
        })
    },
    close(){
      var filter=document.querySelector('.filter')
      filter.style.display="none"
    },
    exaddress(index,address_id){
        //console.log(1)
         this.$router.push({name:'exitaddress',query:{address_id:address_id,key:this.key}})
          this.sure(index,address_id)
    }
  },
  mounted(){
      var noaddress=document.querySelector(".noaddress")
      var qs=require('qs')
      var user=JSON.parse(localStorage.getItem('user'))
      if(!user){
        this.$router.push({name:'login'})
        return
      }else{
        this.key=user.key
      }
      var params = qs.stringify({
        'key':this.key
      });
      this.$http.post('/mobile/index.php?act=member_address&op=address_list',params,{
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
            console.log(res.data.datas.address_list)
          this.addressData=res.data.datas.address_list;
          if(!res.data.datas.error){
            noaddress.style.display="none"
          }else{
            noaddress.style.display="block"
          }
        })

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
  .hasaddress-wrap{
    position: relative;
    width: 100%;
    height: 110px;
    background: #fff;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .hasaddress-wrap .hasaddress-top{
    width: 90%;
    height: 70px;
    border-bottom: 1px solid #eee;
    margin: 0 5%;
  }
  .hasaddress-wrap .hasaddress-btm{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
  }
  .hasaddress-top p{
     line-height: 35px;
    overflow:hidden;
  }
  .hasaddress-top p:nth-of-type(1) span{
    padding: 0 15px;
  }
  .hasaddress-top p:nth-of-type(2) span{
    padding: 0 0 0 15px;
  }
  .hasaddress-btm .hasaddress-btm-left{
    width: 180px;
    height:40px ;
  }
  .hasaddress-btm .hasaddress-btm-left span{
    padding: 0 0 0 30px;
  }
  .hasaddress-btm p {
    display: flex;
    align-items: center;
    width: 20%;
  }
  .hasaddress-btm p:nth-of-type(1) span:nth-of-type(1){
      display: block;
      width: 16px;
      height: 18px;
      background: url("../../../static/img/edit.png")no-repeat;
      background-size: 100% 100%;
  }
  .hasaddress-btm p:nth-of-type(2) span:nth-of-type(1){
    display: block;
    width: 16px;
    height: 18px;
    background: url("../../../static/img/del.png")no-repeat;
    background-size: 100% 100%;
  }
  .adddizhi{
    border: none;
    background: #ED5564;
    color: #fff;
    width: 90%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin: 20px 5%;
    border-radius: 5px;
  }
  .adddizhi a{
    color: #fff;
  }
  .address-conter{
    width: 100%;
    position: fixed;
    left: 0;
    top: 44px;
    bottom: 0;
    background: rgb(245,245,245);
    border-top: 1px solid #eee;
    font-size: 15px;
    overflow-y: auto;
  }
  .address-conter::-webkit-scrollbar{
    display: none;
  }
  a{
    color:#555 ;
  }
  .address-conter .noaddress{
    width:200px ;
    height: 164px;
    margin: 200px auto;
  }
  .address-conter .noaddress p{
    line-height: 30px;
    text-align: center;
  }
  .address-conter .noaddress p:nth-of-type(1){
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ccc;
    margin-left: 70px;
  }
  .address-conter .noaddress p:nth-of-type(1) img{
    width: 44px;
    height: 44px;
    margin: 8px;

  }
  .address-conter .noaddress p:nth-of-type(3){
     color:#999 ;
     font-size: 12px;

  }
  .address-conter .noaddress button{
    outline: none;
    border: none;
    background:#fff ;
    font-size: 12px;
    color: #000;
    width: 70px;
    height: 20px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-left: 65px;
  }
  .filter{
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 111111111111111;
  }
  .filter div{
    width:202px ;
    height: 95px;
    font-size: 15px;
    margin: 60% 0 0 20%;
    background: #fff;
  }
  .filter div p:nth-of-type(1){
    color: #000;
    width: 100%;
    height: 49px;
    text-align: center;
    line-height: 49px;
    border-bottom: 1px solid #eee;
  }
  .filter div p:nth-of-type(2){
    color: #0080FF;
    width: 100%;
    height: 49px;
  }
  .filter div p:nth-of-type(2) span{
    text-align: center;
    display: block;
    float: left;
    width: 49%;
    height: 18px;
    line-height: 18px;
    margin-top: 15px;

  }
  .filter div p:nth-of-type(2) span:nth-of-type(1){
    border-right: 1px solid #eee;
    margin-top: 15px;
  }
</style>

<template>
    <div>
          <div class="zyz_wrapper">
               <div class="zyz_header">
                   <ul>
                       <li>
                           <router-link to="/person">
                            <van-icon name="arrow-left" />
                           </router-link>
                        </li>
                       <li>{{this.$route.params.name}}</li>
                       <li></li>
                   </ul>
               </div>
               <div class="zyz_content">
                     <van-tabs v-model="active" color="#fe873a">
                        <van-tab title="全部订单">
                            <img src="../../../static/dan.png" alt="">
                        </van-tab>
                        <van-tab title="待支付">
                            <img src="../../../static/dan.png" alt="">
                        </van-tab>
                        <van-tab title="已完成">
                            <img src="../../../static/dan.png" alt="">
                        </van-tab>
                        <van-tab title="已取消">
                            <img src="../../../static/dan.png" alt="">
                        </van-tab>
                    </van-tabs>
               </div>
          </div>
    </div>
</template>
<script>
export default {
     data(){
         return{
             active:0
         }
     },
}
</script>
<style lang="scss" scoped>
     .zyz_wrapper{
         .zyz_header{
             height: .90rem;
             line-height: .90rem;
             padding-left: .28rem;          
                 ul{
                  display: flex;
                  li{
                     width: 33.33%;
                     font-size:.36rem;
                     color:#515151;
                  }
                  li:nth-child(2){
                       text-align: center;
                  }
              }
         }
         .zyz_content{
             img{
                 width: 100%;
                 display: block;
             }
         }
     }
</style>
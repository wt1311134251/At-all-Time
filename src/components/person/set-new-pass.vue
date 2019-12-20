<template>
    <div>
          <div class="zyz_wrapper">
               <div class="zyz_header">
                  
                  <ul>
                     <li>
                          <router-link to="/options">
                           <van-icon name="arrow-left" />
                         </router-link>
                         </li>
                     <li>设置密码</li>
                     <li></li>
                 </ul>
               </div>
               <div class="zyz_from">
                   <p :class="[active==1?'bor':'']"><input type="text" placeholder="请输入手机号" @blur="active=0" @focus="phone"><span>获取验证码</span></p>
                   <p :class="[active==2?'bor':'']"><input type="text" placeholder="请输入验证码" @blur="active=0" @focus="code"></p>
                   <p :class="[active==3?'bor':'']"><input type="text" placeholder="请输入密码"   @blur="active=0"  @focus="pass"></p>
               </div>
               <div class="zyz_footer">
                    <button>确定</button>
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
    methods: {
        phone(){
          this.active=1;
        },
        code(){
            this.active=2;
        },
        pass(){
            this.active=3;
        }
    },
}
</script>
<style lang="scss" scoped>
     .zyz_wrapper {
       .zyz_header {
             ul{
                display: flex;
                height: .90rem;
                line-height: .90rem;
                li{
                 width: 33.33%;
                 padding-left: .24rem;
                   font-size: .36rem;
                }
                li:nth-child(2){
                    text-align: center;
                    font-size: .36rem;
                    color:#7f7f7f;
                }
            }
       }
       .zyz_from{
           p{
               width: 90%;
               border-bottom: 1px solid #f9f9f9;
               height: 1rem;
               margin: 0 auto;
               input{
                   width: 100%;
                   border:none;
                   line-height: .90rem;
                   font-size: .32rem;
                //    padding-left: .40rem;
               }
           }
           p:nth-child(1){
               display: flex;
               height: 1rem;
               input{
                 width: 80%;
                 height: .90rem;
                 border:none;
                //  padding-left: .40rem;
               }
               span{
                   width: 20%;
                   text-align: center;
                  color:#ec6d21;
                  font-size: .24rem;
                    line-height: .90rem;
               }
           }
       }
       .zyz_footer{
           margin-top:1.20rem; 
           button{
               height: .90rem;
               width: 6.16rem;
               background: #ec6d21;
               border:none;
               border-radius: 20px;
               color:white;
               font-size: .28rem;
               display: block;
               margin: 0 auto;
           }
       }
     }
     .bor{
         border-bottom:1px solid red!important;
     }
</style>
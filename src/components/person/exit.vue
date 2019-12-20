<template>
    <div>
          <div class="zyz_wrapper">
              <div class="zyz_header">
                 <ul>
                     <li><van-icon name="arrow-left" /></li>
                     <li>设置</li>
                     <li></li>
                 </ul>
              </div>
              <div class="zyz_wra">
                <div class="zyz_content">
                    <router-link to="/set-new-pass">
                    <ul>
                        <li>设置密码</li>
                        <li></li>
                        <li><van-icon name="arrow" /></li>                
                    </ul>
                     </router-link>
                    <button>退出登录</button>
                </div>
              </div>
              
              <div class="zyz_footer">

              </div>
          </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .zyz_wrapper{
        background: #f0f2f5;
        display: flex;
        flex-direction: column;
        .zyz_header{
            background: white;
             height: .90rem;
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
        .zyz_wra{
            flex-grow:1;
            margin-top: .18rem;
            overflow: auto;
             .zyz_content{
            height: 4.32rem;
            background: white;
            a{
                text-decoration: none;
                color:#7f7f7f;
            }
            ul{
                display: flex;
                padding-top: .40rem;
                 margin-bottom: 1.80rem;
                li{
                  width: 20%;
                  font-size:.28rem; 
                }
                li:nth-child(1){
                    text-align: center;
                }
                 li:nth-child(3){
                    text-align: right;
                    padding-right: .20rem;
                }
                li:nth-child(2){
                    width: 60%;
                }
            }
            button{
                width: 96%;
                height: .90rem;
                font-size: .32rem;
                color:white;
                background: #eb6100;
                border:none;
                display: block;
                margin: 0 auto;
                border-radius: 5px;
            }
        }
        }
       
    }
</style>
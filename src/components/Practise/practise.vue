<template>
    <div>
          <div class="zyz_wrapper">
                <div class="zyz_header">
                      <h3>练习</h3>
                </div>
                <div class="zyz_wra">
                       <div class="zyz_nav">
                                <ul>
                                    <li>
                                        <img src="../../../static/zyz_01.png" alt="">
                                        <p>考点专练</p>
                                    </li>
                                    <li>
                                        <img src="../../../static/zyz05.png" alt="">
                                        <p>套卷联系</p>
                                    </li>
                                    <li>
                                        <img src="../../../static/zyz06.png" alt="">
                                        <p>仿真模考</p>
                                    </li>
                                    <li>
                                        <img src="../../../static/zyz03.png" alt="">
                                        <p>错题练习</p>
                                    </li>
                                    <li>
                                        <img src="../../../static/zyz04.png" alt="">
                                        <p>测评记录</p>
                                    </li>
                                    <li>
                                        <img src="../../../static/zyz02.png" alt="">
                                        <p>习题收藏</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="zyz_content">
                                <p>近期模考</p>
                                <p><span>默认排序</span><span @click="one" :class="[add?'or':'']">时间<img v-if="show%2==1" src="../../../static/xia.png" alt=""><img v-if="show%2==0&&show!=0" src="../../../static/shang.png" alt=""></span></p>
                                <p><img src="../../../static/jq.png" alt=""></p>
                            </div>  
                </div>
              
               <div class="zyz_footer">
                  
               </div>
          </div>
    </div>
</template>

<script>
    export default {
           data() {
               return {
                   show:0,
                   add:false
               }
           },
           methods: {
               one(){
                   this.show++;
                   this.add=true;
               }
           },
    }
</script>
<style lang="scss" scoped>
   @charset "utf-8";
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .zyz_wrapper{
        background: #f0f2f5;
        height: 90vh;
        color:#a6a6a6;
        display: flex;
        flex-direction: column;
          .zyz_header{
              height: .90rem;
              line-height: .90rem; 
              h3{
                  background: white;
                  font-size: .36rem;
                  font-weight: 200;
                  text-align: center;
                  color:#282828;
              }
          }
          .zyz_wra{
              flex-grow: 1;
                 overflow: auto;
                 .zyz_nav{
                    width: 96%;
                    height:3.60rem ;
                    background: white;
                    margin: 0 auto;
                    margin-top: .2rem;
                    border-radius: 5px;
                    ul{
                        display: flex;
                        flex-wrap:  wrap;
                        li{
                            width: 25%;
                            img{
                                display: block;
                                margin: .16rem auto;
                            }
                            font-size:.24rem ;
                            text-align: center;
                        }
                    }
                }
                 .zyz_content{
                        height: 4.80rem;
                        margin-top: .2rem;
                        background: white;
                        padding-top:.24rem; 
                        p:nth-child(1){
                            padding-left: .24rem;
                            font-size: .30rem;
                            color:#787878;
                        }
                        p:nth-child(2){
                            display: flex;
                            span:nth-child(1){
                                width: 50%;
                            padding-left: .24rem;
                            font-size: .28rem;
                            color:#e95008; 
                            }
                            span:nth-child(2){
                                width: 50%;
                                font-size: .28rem;
                                color:#787878;
                                text-align: right;
                                padding-right: .40rem;
                                img{
                                    width: .20rem;
                                }
                            }
                        }
                    }
          }
        
       
       
    }
    .or{
        color:orange!important;
    }
</style>

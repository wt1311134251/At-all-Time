<template>
  <div class="oto-plan">
      <header>
          <div class="nav-top">
              <van-icon @click="goo()" name="arrow-left" />
              <h3>预约课程</h3>
          </div>
          <div class="item">
              
                  <div class="feed">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt="">
                    <div class="zhi">
                        <p>杨德胜</p>
                        <span>男  30年教龄</span>
                    </div>
                    <div class="yuyue" @click="to()">
                        查看详情
                    </div>
              </div>
          </div>
      </header>
      <div class="time">
          <div class="time-l">
              <p>选择时间</p>
              <span>(北京时间)</span>
          </div>
      </div>
      <div class="timm">
          <ul>
              <li>
                  <div>
                      <p>周一</p>
                    <span>12/16</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周二</p>
                    <span>12/17</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周三</p>
                    <span>12/18</span>
                  </div>
                  
              </li>
              <li>
                  <div style='color:#eb6100'>
                      <p>周四</p>
                    <span>12/19</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周五</p>
                    <span>12/20</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周六</p>
                    <span>12/21</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周日</p>
                    <span>12/22</span>
                  </div>
                  
              </li>
              <li>
                  <div>
                      <p>周一</p>
                    <span>12/23</span>
                  </div>
                  
              </li>
          </ul>
      </div>
      <div class="img">
          <img src="/static/empty.0d284c2e.png" alt="">
          <p>暂无信息</p>
      </div>
      <div class="yu">
        立即预约
      </div>
  </div>
</template>

<script>
export default {
    name:'Oto-plan',
    data(){
        return{

        }
    },
    methods:{
        goo(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang='scss'>
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, 
body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt,
 em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6,
  header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, main, mark,
   menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span,
    strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time,
     tr, tt, u, ul, var, video{
    margin: 0;
    padding: 0;
}
.oto-plan{
    width: 100%;
    
    background: #f0f2f5;
    header{
        width: 100%;
        height: 2rem;
        background:linear-gradient(180deg,#63b7fe,#4e7de3);
        .nav-top{
            height: 0.88rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            font-size: 0.4rem;
            h3{
                width: 80%;
                text-align: center;
                font-size: 0.36rem;
                padding-right: 0.4rem;
                font-weight: 400;
            }
        }
        .item{
            width: 94%;
            margin: 0 auto;
            height: 1.62rem;
            background: #fff;
            border-radius: 0.1rem;
            
                .feed{
                    height: 100%;
                    padding: 0 0.3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img{
                        width: 0.8rem;
                        height: 0.8rem;
                        display: block;
                        border-radius: 50%;
                    }
                    .zhi{
                        width: 3.8rem;
                        height: 0.8rem;
                        p{
                            font-size: 0.3rem;
                            color: #595959;
                            padding-bottom: 0.1rem;
                        }
                        span{
                            display: block;
                            font-size: 0.25rem;
                            color: #B7B7B7;
                        }
                    }
                    .yuyue{
                        width: 1.54rem;
                        height: 0.58rem;
                        border-radius: 0.5rem;
                        color: #eb6100;
                        border: 0.01rem solid #eb6100;
                        font-size: 0.28rem;
                        text-align: center;
                        line-height: 0.62rem;
                    }
                }
        }
    }
    .time{
        margin-top: 0.5rem;
        height: 1rem;
        padding-left: 0.3rem;
        display: flex;
        align-items: center;
        .time-l{
            width: 100%;
            height: 0.35rem;
            border-left: 0.06rem solid #eb6100;
            display: flex;
            p{
                font-size: 0.28rem;
                margin-left: 0.3rem;
                color: #595959;
            }
            span{
                font-size: 0.25rem;
                margin-left: 0.3rem;
                color: #595959;
            }

        }
    }
    .timm{
        height: 1.48rem;
        margin: 0 0.2rem;
        background: #fff;
        border-radius: 0.08rem;
        overflow: auto;
        ul{
            width: 130%;
            height: 1.24rem;
            padding: 0 0.2rem;
            display: flex;
            border-bottom: 1px solid #f1f1f1;
            overflow-x: scroll;
            li{
                width: 1.12rem;
                height: 1.24rem;
                text-align: center;
                font-size: 0.25rem;
                line-height: center;
                div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    p{
                        margin-bottom: 0.1rem;
                    }
                }
            }
        }
    }
    .img{
        height: 4rem;
        margin-top: 0.4rem;
        padding-bottom: 1.3rem;
        img{
            width: 3rem;
            display: block;
            margin: 0 auto;
        }
        p{
            color: #8c8c8c;
            font-size: 0.3rem;
            text-align: center;
            margin-top: 0.35rem;
        }
    }
    .yu{
        width: 100%;
        height: 0.88rem;
        background: #eb6100;
        position: fixed;
        bottom: 0;
        font-size: 0.34rem;
        color: #fff;
        text-align: center;
        line-height: 0.88rem;
    }
}

</style>
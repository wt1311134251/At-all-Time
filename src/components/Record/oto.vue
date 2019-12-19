<template>
  <div class="oto">
      <header>
          <div class="o-left">
              <van-icon @click="go()" name="arrow-left" />
          </div>
          <p>
              一对一辅导
          </p>
          <div class="o-right">
              <van-icon name="search" @click="sea()" />
          </div>
      </header>
      <div class="menu">
        <van-dropdown-menu active-color="#eb6100">
            <van-dropdown-item active-color="#eb6100" title="选择上课时间" default="ssssssssssssssssssssssssssssssssssss" />
            <van-dropdown-item active-color="#eb6100" title="选择老师条件" />
        </van-dropdown-menu>
      </div>
      <div class="tit">
        <div class="feed">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
            <div class="zhi">
                <p>TNT--李</p>
                <span>男  10年教龄</span>
            </div>
            <div class="yuyue" @click="to()">
                预约
            </div>
        </div>  
      </div>
      <div class="tit">
        <div class="feed">
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg" alt="">
            <div class="zhi">
                <p>齐钰</p>
                <span>女  8年教龄</span>
            </div>
            <div class="yuyue">
                预约
            </div>
        </div>  
      </div>
      <div class="tit">
        <div class="feed">
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <div class="zhi">
                <p>田瑞莲</p>
                <span>女  6年教龄</span>
            </div>
            <div class="yuyue">
                预约
            </div>
        </div>  
      </div>
       <div class="text">
          没有更多了
        </div>
  </div>
</template>

<script>
export default {
    name:'oto',
    data(){
        return{
           
        }
    },
    methods:{
        sea(){
            this.$router.push('/search')
        },
        go(){
            this.$router.go(-1)
        },
        to(){
            this.$router.push('/oto-plan')
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
.oto{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    header{
        width: 100%;
        height: 0.88rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .o-left{
            width: 0.8rem;
            font-size: 0.4rem;
            text-align: center;
            color: #595959;
        }
        p{
            font-size: 0.36rem;
            color: #595959;
        }
        .o-right{
            font-size: 0.4rem;
            width: 0.8rem;
            text-align: center;
            color: #595959;
        }
    }
    .menu{
        .van-dropdown-menu{
            height: 0.84rem;
        }
        .van-dropdown-menu__item{
            height: 0.84rem;
        }
        .van-ellipsis{
            font-size: 0.3rem;
            height: 0.84rem;
            line-height: 0.84rem;
           
        }
    }
    .tit{
        width: 7.1rem;
        height: 1.62rem;
        margin: 0.2rem auto 0;
        background: #fff;
        border-radius: 8px;
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
                width: 1.4rem;
                height: 0.62rem;
                background: #ebeefe;
                border-radius: 0.5rem;
                color: #eb6100;
                font-size: 0.28rem;
                text-align: center;
                line-height: 0.62rem;
            }
        }
    }
    .text{
        height: 0.5rem;
        width: 100%;
        text-align: center;
        background: #f0f2f5;
        line-height: 0.5rem;
        color: #969799;
        font-size: 0.24rem;
    }
}

</style>
<template>
    <div class="wt_box2">
        <div class="wt_header2" v-show="show">
            <ul>
                <router-link tag="li" to="/course">
                    <van-icon name="arrow-left" size="0.3rem"/>
                </router-link>
                <li>
                    <a href="#z1">课程详情</a>
                    <a href="#z2">课程大纲</a>
                    <a href="#z3">课程评价</a>
                </li>
              <li>

              </li>
                <li>
                    <img src="../../../static/wt_img/wt_06.png" alt="">

                </li>
            </ul>
        </div>
      <div class="wt_header2" v-show="!show">
        <ul>
          <router-link tag="li" to="/course">
                    <van-icon name="arrow-left" size="0.3rem"/>
        </router-link>
          <li>
            <p>课程详情</p>
          </li>
          <li>
            <img src="../../../static/wt_img/wt_06.png" alt="">
          </li>
        </ul>
      </div>

        <div class="wt_main2" id="zlf_scr">
            <div class="wt_md1">
                <h3>黄老师讲堂</h3>
                <p><img src="../../../static/wt_img/wt_05.png" alt="">100.00</p>
                <p><span>共1课时</span>|4人已报名</p>
                <p>开课时间：2019.12.14 08:00 - 2019.12.14 20:00</p>
                <div class="wt_dw">
                    <van-icon name="star-o" size="0.35rem" @click="wt_tap()" v-show="!flag"/>
                    <van-icon name="star"  size="0.35rem" color="#eb6100" @click="wt_tap()" v-show="flag"/>
                </div>
            </div>
            <div class="wt_md2">
                 <h3>教学团队</h3>
                 <img src="../../../static/wt_img/wt_04.png" alt="">
                 <p>黄杰峰</p>
            </div>
            <div class="wt_md3">
                <h3 id="z1">课程介绍</h3>
            </div>
            <div class="wt_md4">
                <h3 id="z2">课程大纲</h3>
                <div><span>.</span><p>回放</p><span>黄老师课堂</span></div>
                <p class="wt_p1"><span>黄杰峰</span><span>12月14日08:00-20:00</span></p>
            </div>
            <div class="wt_md5">
                <h3 id="z3">课程评论</h3>
                <img src="../../../static/wt_img/wt_07.png" alt="">
                <p>暂无评论</p>
            </div>
        </div>
        <div class="wt_footer2">
            <button>立即报名</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
export default {

    methods: {

        wt_tap(){
          this.flag=!this.flag
          if(this.flag){
            this.$toast.success('收藏成功');
          }else {
            this.$toast.success('取消收藏');
          }


        },
      // 定义 滚动触发的方法
      zlf_xiang_box() {
        //距离top的距离<判断滚动top距离
        var zlf_scr=document.getElementById("zlf_scr")
        if(zlf_scr.offsetTop<zlf_scr.scrollTop){
          this.show=true
        }else {
          this.show=false
        }

      },
    },
    data() {
        return {
          show:false,
          flag:true
        }
    },
    mounted() {
      //监听window滚动的事件
      window.addEventListener('scroll', this.zlf_xiang_box,true);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.zlf_xiang_box);   //  离开页面清除（移除）滚轮滚动事件
    }

}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
//滑动设置
    .wt_box2{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #f0f2f5;
        //头部
        .wt_header2{
            width:100%;
            height: 0.88rem;
            background: #fff;
            margin-bottom: 0.01rem;
            ul{

                height: 100%;
                display: flex;
               justify-content: space-between;
              padding: 0 0.2rem;
                align-items: center;
              
                li:nth-child(2){
                  width: 6.2rem;
                    text-align: center;
                  font-size: 0.34rem;
                  color: #4b4b4b;
                    p{
                       width: 100%;
                    }
                  display: flex;
                  a{
                    color: #4b4b4b;
                    width: 2.06rem;
                    line-height: 0.88rem;

                  }
                }
                li:nth-child(3){
                    img{
                        width: 0.33rem;
                        height: 0.33rem;
                    }
                }
            }
        }
        //身体
        .wt_main2{
            flex-grow: 1;
            overflow-y: auto;
            .wt_md1{
                box-sizing: border-box;
                position: relative;
                padding: 0.30rem;
                // padding-left: 0 0.3rem;
                width: 100%;
                height: 2.52rem;
                background: #fff;
                h3{
                    font-size: 0.30rem;
                    color: #262626;
                    font-weight: 500;
                    // margin-left: 0.3rem;
                    margin-bottom: 0.1rem;
                }
                p:nth-child(2){
                    // margin-left: 0.3rem;
                    font-size: 0.3rem;
                    color: #ed1515;
                    img{
                        width: 0.16rem;
                        height: 0.16rem;
                    }

                }
                p:nth-child(3){
                    // margin-left: 0.3rem;
                    font-size: 0.3rem;
                    color: #858585;
                    margin-top: 0.15rem;
                    margin-bottom: 0.15rem;
                }
                p:nth-child(4){
                    // margin-left: 0.3rem;
                    font-size: 0.3rem;
                    color: #858585;
                }
                .wt_dw{
                    position: absolute;
                    top: 0.18rem;
                    right: 0.27rem;
                }
            }
            .wt_md2{
                margin-top: 0.3rem;
                padding-top: 0.38rem;
                // padding-left: 0 0.3rem;
                width: 100%;
                height: 2.52rem;
                background: #fff;
                h3{
                    font-size: 0.30rem;
                    color: #262626;
                    font-weight: 500;
                    margin-left: 0.2rem;
                    margin-bottom: 0.20rem;
                }
                img{
                    width: 0.78rem;
                    height: 0.78rem;
                    margin-left: 0.5rem;
                    margin-bottom: 0.1rem;
                }
                p{
                    font-size: 0.24rem;
                    color: #858585;
                    margin-left: 0.5rem;
                }
            }
            .wt_md3{
                margin-top: 0.3rem;
                padding-top: 0.38rem;
                // padding-left: 0 0.3rem;
                width: 100%;
                height: 1.9rem;
                background: #fff;
                h3{
                    font-size: 0.30rem;
                    color: #262626;
                    font-weight: 500;
                    margin-left: 0.2rem;
                    margin-bottom: 0.20rem;
                }
            }
            .wt_md4{
                margin-top: 0.3rem;
                padding-top: 0.38rem;
                // padding-left: 0 0.3rem;
                width: 100%;
                height: 2.02rem;
                background: #fff;
                h3{
                    font-size: 0.30rem;
                    color: #262626;
                    font-weight: 500;
                    margin-left: 0.2rem;
                    margin-bottom: 0.20rem;
                }
                div{
                    margin-left: 0.53rem;
                    display: flex;
                    align-items: center;
                    span:nth-child(1){
                        font-size: 0.48rem;
                        color: #e55905;
                    }
                    p{
                        font-size: 0.24rem;
                        color: #fff;
                        width: 0.68rem;
                        height: 0.37rem;
                        background: #e55905;
                        text-align: center;
                        line-height: 0.37rem;
                        border-radius: 5px;
                        margin-right: 0.17rem;
                    }
                    span:nth-child(3){
                        font-size: 0.24rem;
                        color: #0f0f0f;
                    }
                }
                .wt_p1{
                    font-size: 0.22rem;
                    color: #686868;
                    margin-left: 1rem;
                }

            }
            .wt_md5{
                margin-top: 0.3rem;
                padding: 0.1rem 0.2rem;
                width: 100%;
                height: 4.4rem;
                background: #fff;
                h3{
                    padding-top: 0.2rem;
                    font-size: 0.30rem;
                    font-weight: 500;
                    color: #262626;
                    // margin-left: 0.2rem;
                    // margin-bottom: 0.20rem;
                }
                img{
                    width: 3rem;
                    margin-left: 2.24rem;
                }
                p{
                    margin-top: 0.4rem;
                    width: 7.5rem;
                    font-size: 0.3rem;
                    color: #8c8c8c;
                    text-align: center;
                }
            }

        }
        //尾部
        .wt_footer2{
            margin-top: 0.1rem;
            width: 100%;
            button{
                width: 7.5rem;
                height: 0.85rem;
                border: none;
                color: #fff;
                background: #eb6100;
                font-size: 0.33rem;
            }
        }
    }
</style>

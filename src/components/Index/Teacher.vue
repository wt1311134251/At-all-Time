<template>
    <div class="zlf_teacher">
      <section>
        <header>
          <div>
            <van-icon name="arrow-left" @click="zlf_ret()"/>
            <h1>讲师详情</h1>
            <span></span>
          </div>
          <div>
            <dl>
              <dt>
                <img src="ggs" alt="讲师头像">
              </dt>
              <dd>
                <h2>小华华 <span>M11</span></h2>
                <p>女 8年教龄</p>
                <button @click="zlf_tap()" v-show="!flag">关注</button>
                <button @click="zlf_tap()" v-show="flag">已关注</button>
              </dd>
            </dl>
          </div>
        </header>
        <div class="zlf_tab">
          <van-tabs line-width="0.16rem">
            <van-tab title="讲师介绍">
              <ul class="zlf_slide1">
                <li><font>教学年龄</font><span>8年</span></li>
                <li><font>授课价格</font><span>180学习币</span></li>
                <li><font>老师简介</font> <span>
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                  不夜城的天空之夜 没有地狱使者 教师风格擅长教于乐的教学方式，条理清晰，细心认真。本人小华华字迹
                </span></li>
              </ul>
            </van-tab>
            <van-tab title="主讲课程">内容 2</van-tab>
            <van-tab title="学员评价">
              <div class="zlf_slide3">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
                <p>暂无评论</p>
              </div>
            </van-tab>
          </van-tabs>
        </div>

      </section>
      <footer>
          <button>立即预约</button>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "Teacher",
      data(){
          return {flag:false}
      },
      methods:{
        zlf_ret(){
          this.$router.go(-1)
        },
        zlf_tap(){
          this.flag=!this.flag
          if(this.flag){
            this.$toast.success('已关注');
          }else {
            this.$toast.success('已取消');
          }

        }
      }

    }
</script>

<style lang="scss" scoped>
  .zlf_tab{
    background: #fff;
    margin: 0.88rem 0 0.3rem;
    >>>.van-tabs__wrap{
      /*height:80px !important;*/
      height: 0.8rem;
      .van-ellipsis{
        line-height: 0.8rem;
        font-size: 0.3rem;
      }
      .van-tab--active{
      color: red;
      }
    }
  }

  .zlf_teacher {
    height: 100%;
    display: flex;
    flex-direction: column;

    section {
      flex-grow: 1;
      background: #f0f2f5;

      header {
        height: 2rem;
        background: #5da7f6;

        div {
          &:nth-child(1) {
            height: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.36rem;
            color: white;

            .van-icon-arrow-left {
              font-size: 0.3rem;
            }

            h1 {
              font-size: 0.36rem;
              font-weight: normal;
            }
          }

          &:nth-child(2) {
            dl {
              display: flex;
              background: #fff;
              height: 1.26rem;
              width: 6.54rem;
              padding: 0.35rem 0.28rem 0;
              border-radius: 0.05rem;
              margin: 0 auto;

              dt {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 0.05rem;
              }

              dd {
                width: 5.36rem;
                margin-left: 0.24rem;
                position: relative;

                h2 {
                  font-size: 0.28rem;
                  font-weight: normal;
                  height: 0.46rem;

                  span {
                    font-weight: normal;
                    font-size: 0.18rem;
                    color: #e9772a;
                  }
                }

                p {
                  font-size: 0.22rem;
                  color: #cbcbcb;
                }

                button {
                  width: 1.24rem;
                  height: 0.56rem;
                  background: #ebeefe;
                  position: absolute;
                  right: 0;
                  top: 0;
                  border: none;
                  color: #eb3e00;
                  outline: none;
                  border-radius: 0.25rem;
                  font-size: 0.26rem;
                  &:nth-of-type(2){
                    background: #fff;
                    font-size: 0.3rem;
                    color: #b7b7b7;
                  }
                }
              }
            }
          }

        }
      }
    }
    footer {
      button {
        height: 0.86rem;
        width: 100%;
        background: red;
        font-size: 0.32rem;
        color: white;
        outline: none;
        border: none;
      }
    }
  }
  .zlf_slide1{
    li{
      font-size: 0.26rem;
      color: #6d6d6d;
      padding: 0.2rem 0.4rem;
      display: flex;
      font{
        width: 1.2rem;
      }
      span{
        margin-left: 0.4rem;
         display: block;
        width: 5.26rem;
      }
    }

  }
  .zlf_slide3{
    width: 100%;
    height: 4rem;
    text-align: center;
    img{
      width: 3rem;
      height: 3rem;
    }
    p{
      font-size: 0.3rem;
      padding-top: 0.2rem;
      color: #999;
    }

  }


</style>

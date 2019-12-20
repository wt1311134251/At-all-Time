<template>
    <div class="zlf_otoplan">
      <section>
        <header>
          <div>
            <van-icon name="arrow-left" @click="zlf_ret()"/>
            <h1>预约课程</h1>
            <span></span>
          </div>
          <div>
            <dl>
              <dt>
                <img src="ggs" alt="讲师头像">
              </dt>
              <dd>
                <h2>小华华 </h2>
                <p>女 8年教龄</p>
                <button>查看详情</button>
              </dd>
            </dl>
          </div>
        </header>
        <div class="zlf_oto">
          <div class="zlf_tit">
            <h2>选择时间</h2><span>（北京时间）</span>
          </div>
        </div>
      </section>
      <footer>
        <button>立即预约</button>
      </footer>

    </div>
</template>

<script>
    export default {
        name: "otoPlan",
      methods:{
          //返回 上级路由
        zlf_ret(){
          this.$router.go(-1)
        }
      },
      mounted() {

      }
    }
</script>

<style lang="scss" scoped>
  .zlf_otoplan{
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
  }

  p {
    font-size: 0.22rem;
    color: #cbcbcb;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.5rem;
    height: 0.56rem;
    border-radius: 0.5rem;
    font-size: 0.26rem;
    color: #ed7119;
    background: #fff;
    border: 1px solid #ed7119;
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
  .zlf_oto{
    margin-top: 0.48rem;
      .zlf_tit{
        height: 1rem;
        display: flex;
        align-items: center;
        padding: 0 0.2rem;
        h2{
          font-weight: normal;
          font-size: 0.3rem;
          padding-left: 0.2rem;
          margin-left: 0.02rem;
          border-left: 0.06rem solid red;
        }
        span{
          font-size: 0.24rem;
        }
      }
  }

</style>

<template>
  <div class="wt_box">
    <div class="wt_header">
      <div>
        <h1>特色课</h1>
        <img src="../../../static/wt_img/wt_01.png" alt />
      </div>
      <div class="wt_kong">
        <ul>
          <li>
            <van-dropdown-menu class="wt_lieBiao">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </li>
          <li>
            <van-dropdown-menu class="wt_lieBiao">
              <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
          </li>
          <li>
            <van-dropdown-menu class="wt_lieBiao">
              <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
          </li>
        </ul>
      </div>
    </div>
    <div class="wt_main">
      <ul>
        <li>
          <div class="wt_m1">
            <h2>沈老师课堂（陈同学）</h2>
            <p class="wt_p1">
              <img src="../../../static/wt_img/wt_03.png" alt />
              <span>12月14日 17：00~12月14日22:00</span>|
              <span>共1课时</span>
            </p>
            <div class="wt_d1">
              <img src="../../../static/wt_img/wt_04.png" alt />
              <p>绳华侨</p>
            </div>
            <div class="wt_d2">
              <p>2人已报名</p>
              <p>
                <img src="../../../static/wt_img/wt_05.png" alt />
                <span>100.00</span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="wt_m1">
            <h2>沈老师课堂（陈同学）</h2>
            <p class="wt_p1">
              <img src="../../../static/wt_img/wt_03.png" alt />
              <span>12月14日 17：00~12月14日22:00</span>|
              <span>共1课时</span>
            </p>
            <div class="wt_d1">
              <img src="../../../static/wt_img/wt_04.png" alt />
              <p>绳华侨</p>
            </div>
            <div class="wt_d2">
              <p>2人已报名</p>
              <p>
                <img src="../../../static/wt_img/wt_05.png" alt />
                <span>100.00</span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="wt_m1">
            <h2>沈老师课堂（陈同学）</h2>
            <p class="wt_p1">
              <img src="../../../static/wt_img/wt_03.png" alt />
              <span>12月14日 17：00~12月14日22:00</span>|
              <span>共1课时</span>
            </p>
            <div class="wt_d1">
              <img src="../../../static/wt_img/wt_04.png" alt />
              <p>绳华侨</p>
            </div>
            <div class="wt_d2">
              <p>2人已报名</p>
              <p>
                <img src="../../../static/wt_img/wt_05.png" alt />
                <span>100.00</span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="wt_m1">
            <h2>沈老师课堂（陈同学）</h2>
            <p class="wt_p1">
              <img src="../../../static/wt_img/wt_03.png" alt />
              <span>12月14日 17：00~12月14日22:00</span>|
              <span>共1课时</span>
            </p>
            <div class="wt_d1">
              <img src="../../../static/wt_img/wt_04.png" alt />
              <p>绳华侨</p>
            </div>
            <div class="wt_d2">
              <p>2人已报名</p>
              <p>
                <img src="../../../static/wt_img/wt_05.png" alt />
                <span>100.00</span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="wt_m1">
            <h2>沈老师课堂（陈同学）</h2>
            <p class="wt_p1">
              <img src="../../../static/wt_img/wt_03.png" alt />
              <span>12月14日 17：00~12月14日22:00</span>|
              <span>共1课时</span>
            </p>
            <div class="wt_d1">
              <img src="../../../static/wt_img/wt_04.png" alt />
              <p>绳华侨</p>
            </div>
            <div class="wt_d2">
              <p>2人已报名</p>
              <p>
                <img src="../../../static/wt_img/wt_05.png" alt />
                <span>100.00</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="wt_footer">
      <p>底部</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "a",
      option1: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从高到低", value: 3 },
        { text: "价格从低到高", value: 4 }
      ],
      option2: [
        { text: "综合排序", value: "a" },
        { text: "最新", value: "b" },
        { text: "最热", value: "c" },
        { text: "价格从高到低", value: "d" },
        { text: "价格从低到高", value: "e" }
      ],
      option3: [
        { text: "综合排序", value: "a" },
        { text: "最新", value: "b" },
        { text: "最热", value: "c" },
        { text: "价格从高到低", value: "d" },
        { text: "价格从低到高", value: "e" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@charset "utf-8";
//列表页
* {
  margin: 0;
  padding: 0;
}
.wt_m1 {
  // margin-top: 0.3rem;
  width: 6.62rem;
  height: 3.1rem;
  border-radius: 5px;
  background: #fff;
  margin: 0 auto;
  padding-left: 0.28rem;
  padding-top: 0.3rem;
  h2 {
    font-size: 0.33rem;
    color: #323232;
    margin: 0;
    padding: 0;
    margin-bottom: 0.14rem;
  }
  .wt_p1 {
    margin-top: 0.52rem;
    margin: 0;
    padding: 0;
    height: 0.25rem;
    // line-height: 0.25rem;
    display: flex;
    align-items: center;
    // background: red;
    img {
      width: 0.25rem;
      height: 0.25rem;
      vertical-align: bottom;
    }
  }
  .wt_d1 {
    margin-top: 0.52rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    img {
      width: 0.54rem;
      height: 0.54rem;
      margin-right: 0.16rem;
    }
    p {
      font-size: 0.24rem;
      color: #8f8f8f;
    }
    // vertical-align: middle;
  }
  .wt_d2 {
    height: 0.88rem;
    width: 6.36rem;
    border-top: 1px solid #f6f6f6;
    display: flex;
    align-items: center;
    p:nth-child(1) {
      font-size: 0.24rem;
      color: #727272;
    }
    p:nth-child(2) {
      margin-left: 3.82rem;
      font-size: 0.24rem;
      color: #727272;
      display: flex;
      img {
        display: block;
        width: 0.26rem;
        height: 0.26rem;
      }
      span {
        font-size: 0.24rem;
        color: #ec0303;
      }
    }
  }
}
.wt_font {
  font-size: 0.3rem;
}
.wt_kong {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.01rem solid #f9fafa;
  ul {
    display: flex;
    width: 100%;
    li {
      width: 33.33%;
      .wt_lieBiao {
        height: 0.8rem;
        div{
            span{
                .van-dropdown-menu__title{
                    font-size: 0.5rem;        
                }
            }
        }
      }
    }
  }
}

//滑动设置
.wt_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  // flex-wrap: wrap;
  .wt_header {
    width: 100%;
    height: 1.7rem;
    background: #fff;
    div {
      border-bottom: 0.02rem solid #f9fafa;
      display: flex;
      height: 0.86rem;
      align-items: center;
      // text-align: center;
      h1 {
        font-size: 0.36rem;
        color: #595959;
        margin-left: 3.2rem;
      }
      img {
        width: 0.39rem;
        height: 0.39rem;
        margin-left: 2.64rem;
        // margin-top: 0.2rem;
        // display: block;
      }
    }
  }
  .wt_main {
    flex-grow: 1;
    padding-top: 0.3rem;
    // flex: 1
    overflow-y: auto;
    ul{
        li{
            margin-top: 0.3rem;
        }
    }
  }
  .wt_footer {
    text-align: center;
    width: 100%;
    height: 0.4rem;
    background: #fff;
  }
}
</style>

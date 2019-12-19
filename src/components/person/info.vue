<template>
    <div class="lsh_info">
<!--头部信息-->
      <div class="lsh_head">
        <img @click="lsh_gobefore()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
        <p>个人信息</p>
        <div class="lsh_right"></div>
      </div>
<!--主题部分-->
      <ul class="lsh_xinxi">
<!--头像-->
        <li @click="lsh_show = true">
          <span>头像</span>
          <span>
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
            <van-icon name="arrow" />
          </span>
        </li>
        <van-action-sheet :round="false" cancel-text="取消" v-model="lsh_show" :actions="actions" @select="onSelect" />
<!--手机号-->
        <li>
          <span>手机号</span>
          <span>13834887626</span>
        </li>
<!--性别-->
        <router-link tag="li" to="/setsex">
          <span>性别</span>
          <span>
            男
            <van-icon name="arrow" />
          </span>
        </router-link>
<!--出生日期-->
        <li @click="showPopup">
          <span>出生日期</span>
          <span>
            2018-12-18
            <van-icon name="arrow" />
          </span>
        </li>
        <van-popup :style="{height:'30%'}" position="bottom" v-model="lsh_show1">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
          />
        </van-popup>
<!--城市-->
        <li  @click="showPopup1">
          <span>所在城市</span>
          <span>
            北京,北京市,东城区
            <van-icon name="arrow" />
          </span>
        </li>
        <van-popup :style="{height:'30%'}" position="bottom" v-model="lsh_show2">
          <van-area
            :area-list="areaList"
            title="标题"
          />
        </van-popup>
<!--学科-->
        <router-link to="/class" tag="li">
          <span>学科</span>
          <span>
            地理
            <van-icon name="arrow" />
          </span>
        </router-link>
<!--年级-->
        <li @click="showPopup2">
          <span>年级</span>
          <span>
            小学一年级
            <van-icon name="arrow" />
          </span>
        </li>
        <van-popup :style="{height:'30%'}" position="bottom" v-model="lsh_show3">
          <van-picker :columns="columns" @change="onChange" />
        </van-popup>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "info",
      methods: {
        lsh_gobefore() {
          this.$router.go(-1)
        },
        onSelect(item) {
          // 默认情况下，点击选项时不会自动关闭菜单
          // 可以通过 close-on-click-action 属性开启自动关闭
          this.lsh_show1 = false;
          Toast(item.name);
        },
        showPopup() {
          this.lsh_show1 = true;
        },
        showPopup1() {
          this.lsh_show2 = true;
        },
        showPopup2() {
          this.lsh_show3 = true;
        },
        onChange(picker, value, index) {

        }
      },

      data() {
        return {
          columns: ['一年级', '二年级', '三年级', '四年级', '五年级','六年级','初一','初二','初三','高一','高二','高三'],
          areaList: {
            province_list: {
              110000: '北京市',
              120000: '天津市'
            },
            city_list: {
              110100: '北京市',
              110200: '县',
              120100: '天津市',
              120200: '县'
            },
            county_list: {
              110101: '东城区',
              110102: '西城区',
              110105: '朝阳区',
              110106: '丰台区',
              120101: '和平区',
              120102: '河东区',
              120103: '河西区',
              120104: '南开区',
              120105: '河北区',
            }
          },
          lsh_show: false,
          lsh_show1: false,
          lsh_show2: false,
          lsh_show3:false,
          currentDate: new Date(),
          actions: [
            {name: '拍照'},
            {name: '从手机相册选择'},
          ]
        }
      }
    }

</script>

<style lang="scss" scoped>
    ul,li,ol,p,input{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .lsh_info{
      background: #f0f2f5;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  .lsh_head{
    background: white;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    color: #595959;
    display: flex;
    justify-content: space-between;
    padding-left: 0.2rem;
    align-items: center;
    img{
      width: 0.2rem;
      height: 0.3rem;
    }
  }
  .lsh_xinxi{
    margin-top: 0.2rem;
    font-size: 0.28rem;
    background: white;
    padding: 0.13rem 0.4rem;
    flex-grow: 1;
    overflow-y: auto;
    li{
      height: 1.3rem;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-right: 0.7rem;
      position: relative;
      border-bottom: 1px solid #f0f2f5;
      color: #595959;
      .van-icon-arrow{
        font-size: 0.5rem;
        color: #b7b7b7;
        position: absolute;
        right: 0;
        top: 0.38rem;
      }
    }
    img{
      width: 0.74rem;
      height: 0.74rem;
      border-radius:100%;
    }
  }
</style>

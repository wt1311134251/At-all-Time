<template>
    <div class="lsh_concern">
      <!--头部信息-->
      <div class="lsh_head">
        <img @click="lsh_gobefore()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
        <p>我的关注</p>
        <div class="lsh_right"></div>
      </div>
      <div class="lsh_gz">
        <div class="lsh_ig">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
          <p>暂无关注</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "concer",
        methods:{
          lsh_gobefore(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .lsh_concern{
    height: 100%;
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
  .lsh_gz{
    padding-top: 2rem;
    height: 100%;
    background: #f0f2f5;
    color:gray;
    font-size: 0.3rem;
    .lsh_ig{
      text-align: center;
      img{
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 auto;
      }
      p{
        margin-top: 0.2rem;
      }
    }

  }
</style>

<template>
    <div class="lsh_setsex">
      <!--头部信息-->
      <div class="lsh_head">
        <img @click="lsh_gobefore()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
        <p>修改个人信息</p>
        <div class="lsh_right">保存</div>
      </div>
      <ul>
        <li @click="value=true" :class="{lsh_bg:value}">男</li>
        <li @click="value=false" :class="{lsh_bg:!value}">女</li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "setsex",
        methods:{
          lsh_gobefore() {
            this.$router.go(-1)
          },
        },
        data() {
          return {
              value:true
          }
        }
    }
</script>

<style lang="scss" scoped>
  div,body,h1,p,ul,li,ol,li,input,img{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .lsh_setsex{
    background: #f0f2f5;
    height:100%;
    ul{
      padding: 0 0.4rem;
      background: white;
      li:nth-of-type(1){
        border-bottom: 1px solid #f0f2f5;
      }
      li{
        font-size: 0.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        align-items: center;
      }
    }
  }
  .lsh_bg{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMTk5NkVCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMTk5NkZCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUExOTk2Q0I3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUExOTk2REI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL8dXQAAAHGSURBVHjaYvz//z/DQALGP6F0t1MRiIOB+BEQr2ahs+UaQHwMiAWhfF0mOlrOA8RrkSwHAXt6OmAOEGuhic2ilwMKgDgcTWwuEC+hRyK0AeL9QIyc3s4BsTUQ/6C1AySglkkiib0DYmMgfgDi0DIKQD5eiWY5qNCJgVlOawd0ALEdmlgTEG+nR0EUAipk0MR2ALE3EP+jtQPUgfg0EPMiiT2Axvs7dMVMNChs1qFZ/hMaIu+waWCiQ2GTA8RncWkAOcAAiK8C8VcgngzEbFQsbOZBHYW3NtwJpN2QxECFRhAQf6BWYYNPIygEnqOJOQLxESCWI6GwWYVm+XtolfuDkGaQA4qA+DiauDYQnwBiPTILm2jkwoaQA0Cp0wmaepEByNBDWAoTkgsbYltEIMf0QhMTMgAFYyQQbyC3sCG1SVYCxF0gOSSxv0CcCcSz8RQ2D4HYCFd+J7VNGAetr9GbbLVAPAGIT6Ll95/QFH+Wmo1SL2gQc6GJgxKXAppYKqH8Tm6r2BKItwCxEB41oMImmZbNck0gBhVWsljkiCpsCGVDQuA6jvi9BMT+lFhOanXMDMQ+0EIKVHfsAuLvFPeMBrprBhBgADxzbshcfaUMAAAAAElFTkSuQmCC") no-repeat center right;
    background-size: 0.3rem 0.3rem;
  }
  .lsh_head{
    background: white;
    margin-bottom: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    color: #595959;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    align-items: center;
  img{
    width: 0.2rem;
    height: 0.3rem;
  }
  }
</style>
